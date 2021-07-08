package gmail

import (
	_ "embed"

	"encoding/json"

	"github.com/Nv7-Github/CryptoMail/backend/storage"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
)

var tok *oauth2.Token
var config *oauth2.Config

//go:embed credentials.json
var creds []byte

func InitGmail() {
	var err error
	config, err = google.ConfigFromJSON(creds)
	if err != nil {
		panic(err)
	}
}

func HasToken() bool {
	tokDat, exists := storage.GetCfg("gmailtoken")
	if !exists {
		return false
	}

	err := json.Unmarshal([]byte(tokDat), &tok)
	return err == nil
}
