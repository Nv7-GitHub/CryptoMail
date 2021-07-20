package main

import (
	"context"
	"flag"
	"fmt"
	"net"
	"net/http"

	"github.com/Nv7-Github/CryptoMail/backend/gmail"
	"github.com/Nv7-Github/CryptoMail/backend/pb"
	"github.com/Nv7-Github/CryptoMail/backend/storage"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"google.golang.org/grpc"
)

const port = ":49152"

var profile = *flag.String("profile", "cryptomail", "Which profile to use")

type server struct {
	pb.UnimplementedCryptoMailServer
}

func (s *server) IsLoggedIn(ctx context.Context, req *pb.Null) (*pb.Bool, error) {
	return &pb.Bool{
		Value: gmail.HasToken(),
	}, nil
}

func (s *server) AuthURL(ctx context.Context, req *pb.Null) (*pb.String, error) {
	return &pb.String{
		Value: gmail.GetURL(),
	}, nil
}

func (s *server) MakeService(ctx context.Context, req *pb.Null) (*pb.Null, error) {
	err := gmail.GetService()
	return &pb.Null{}, err
}

func (s *server) GetUnread(context.Context, *pb.Null) (*pb.MailArray, error) {
	return gmail.GetUnread("label:UNREAD <cryptomail>")
}

func main() {
	flag.Parse()

	storage.InitStorage(profile)
	gmail.InitGmail()

	lis, err := net.Listen("tcp", port)
	if err != nil {
		panic(err)
	}

	s := grpc.NewServer()
	pb.RegisterCryptoMailServer(s, &server{})

	wrapped := grpcweb.WrapServer(s)
	httpS := &http.Server{
		Handler: http.HandlerFunc(func(resp http.ResponseWriter, req *http.Request) {
			// CORS
			resp.Header().Set("Access-Control-Allow-Origin", "*")
			resp.Header().Set("Access-Control-Allow-Methods", "*")
			resp.Header().Set("Access-Control-Allow-Headers", "*")
			wrapped.ServeHTTP(resp, req)
		}),
	}
	defer httpS.Close()

	fmt.Println("Listening at", port)
	err = httpS.Serve(lis)
	if err != nil {
		panic(err)
	}
}
