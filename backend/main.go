package main

import (
	"context"
	"log"
	"net"

	"github.com/Nv7-Github/CryptoMail/backend/pb"
	"google.golang.org/grpc"
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
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()

	pb.RegisterCryptoMailServer(s, &server{})

	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
