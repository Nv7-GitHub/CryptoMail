package gmail

import (
	"context"
	_ "embed"
	"encoding/json"
	"log"
	"net/http"
	"net/url"
	"strings"

	"github.com/Nv7-Github/CryptoMail/backend/storage"
	"github.com/gorilla/pat"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
	"google.golang.org/api/gmail/v1"
	"google.golang.org/api/option"
)

const gmailPort = ":49153"
const id = "668455781350-4ge633j7lop4f4a6mb76jt4aimk0qm8a.apps.googleusercontent.com"
const secret = "EvEO_GxK76PIe6XwhTH4QFIi"

const cliURL = "http://localhost:3000"

var tok *oauth2.Token
var srv *gmail.Service

var config = &oauth2.Config{
	ClientID:     id,
	ClientSecret: secret,
	RedirectURL:  "http://localhost" + gmailPort + "/callback",
	Scopes:       []string{"https://www.googleapis.com/auth/gmail.modify", "https://www.googleapis.com/auth/userinfo.email"},
	Endpoint:     google.Endpoint,
}

func InitGmail() {
	p := pat.New()
	p.Get("/callback", func(res http.ResponseWriter, req *http.Request) {
		code := req.FormValue("code")

		token, err := config.Exchange(context.TODO(), code)
		if err != nil {
			panic(err)
		}

		tok = token
		dat, err := json.Marshal(tok)
		if err != nil {
			panic(err)
		}
		storage.SetCfg("gmailtoken", string(dat))

		http.Redirect(res, req, cliURL, http.StatusTemporaryRedirect)
	})

	p.Get("/", func(res http.ResponseWriter, req *http.Request) {
		sendUrl, err := url.Parse(config.Endpoint.AuthURL)
		if err != nil {
			panic(err)
		}
		parameters := url.Values{}
		parameters.Add("client_id", config.ClientID)
		parameters.Add("scope", strings.Join(config.Scopes, " "))
		parameters.Add("redirect_uri", config.RedirectURL)
		parameters.Add("response_type", "code")
		parameters.Add("access_type", "offline")

		sendUrl.RawQuery = parameters.Encode()
		url := sendUrl.String()
		http.Redirect(res, req, url, http.StatusTemporaryRedirect)
	})

	go func() {
		log.Println("listening on localhost:49153")
		log.Fatal(http.ListenAndServe(gmailPort, p))
	}()
}

func HasToken() bool {
	tokDat, exists := storage.GetCfg("gmailtoken")
	if !exists {
		return false
	}

	err := json.Unmarshal([]byte(tokDat), &tok)
	return err == nil
}

func GetURL() string {
	return "http://localhost" + gmailPort + "/"
}

func GetService() error {
	client := config.Client(context.Background(), tok)

	var err error
	srv, err = gmail.NewService(context.Background(), option.WithHTTPClient(client))
	return err
}
