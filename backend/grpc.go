package main

import (
	"context"

	"github.com/Nv7-Github/CryptoMail/backend/gmail"
	"github.com/Nv7-Github/CryptoMail/backend/pb"
)

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
	return &pb.Null{}, gmail.GetService()
}

func (s *server) NewFriendRequest(ctx context.Context, req *pb.String) (*pb.Null, error) {
	return &pb.Null{}, NewFriendRequest(req.Value)
}

func (s *server) RefreshMails(context.Context, *pb.Null) (*pb.Null, error) {
	unreads, err := gmail.GetUnread("label:UNREAD <cryptomail>")
	if err != nil {
		return nil, err
	}

	for _, val := range unreads {
		err = ProcessMail(val)
		if err != nil {
			return nil, err
		}
	}

	return nil, nil
}
