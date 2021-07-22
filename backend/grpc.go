package main

import (
	"context"
	"errors"

	"github.com/Nv7-Github/CryptoMail/backend/gmail"
	"github.com/Nv7-Github/CryptoMail/backend/pb"
	"github.com/Nv7-Github/CryptoMail/backend/storage"
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
		return &pb.Null{}, err
	}

	for _, val := range unreads {
		err = ProcessMail(val)
		if err != nil {
			return &pb.Null{}, err
		}
	}

	return &pb.Null{}, nil
}

func (s *server) GetFriendRequests(ctx context.Context, req *pb.Null) (*pb.FriendRequestArray, error) {
	out, err := storage.GetFriendRequests()
	return &pb.FriendRequestArray{
		Requests: out,
	}, err
}

func (s *server) GetFriends(ctx context.Context, req *pb.Null) (*pb.StringArray, error) {
	out, err := storage.GetFriends()
	return &pb.StringArray{
		Vals: out,
	}, err
}

func (s *server) GetProfiles(ctx context.Context, req *pb.Null) (*pb.StringArray, error) {
	return &pb.StringArray{
		Vals: storage.GetProfiles(),
	}, nil
}

func (s *server) LoadProfile(ctx context.Context, req *pb.String) (*pb.Null, error) {
	storage.LoadProfile(req.Value)
	return &pb.Null{}, nil
}

func (s *server) NewProfile(ctx context.Context, req *pb.String) (*pb.Null, error) {
	storage.AddProfile(req.Value)
	return &pb.Null{}, nil
}

func (s *server) GetCurrentProfile(ctx context.Context, req *pb.Null) (*pb.String, error) {
	curr, exists := storage.GetCurrentProfile()
	if !exists {
		return nil, errors.New("no current profile")
	}
	return &pb.String{Value: curr}, nil
}
