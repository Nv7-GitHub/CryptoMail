package main

import (
	"context"
	"fmt"
	"net"
	"net/http"

	"github.com/Nv7-Github/CryptoMail/backend/pb"
	"google.golang.org/grpc"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
)

const port = ":8080"

type server struct {
	pb.UnimplementedCryptoMailServer
}

func (s *server) Add(ctx context.Context, req *pb.AddRequest) (*pb.AddResponse, error) {
	return &pb.AddResponse{
		C: req.A + req.B,
	}, nil
}

func main() {
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
