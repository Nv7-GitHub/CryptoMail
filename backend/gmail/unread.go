package gmail

import (
	"encoding/base64"
	"time"

	"github.com/Nv7-Github/CryptoMail/backend/pb"
	"google.golang.org/api/gmail/v1"
)

func GetUnread(query string) ([]*pb.Mail, error) {
	user := "me"
	req, err := srv.Users.Messages.List(user).Q(query).Do()
	if err != nil {
		return nil, err
	}

	out := make([]*pb.Mail, len(req.Messages))

	for i, msg := range req.Messages {
		msg, err := srv.Users.Messages.Get(user, msg.Id).Do()
		if err != nil {
			return nil, err
		}

		mail := &pb.Mail{
			Id: msg.Id,
		}

		for _, header := range msg.Payload.Headers {
			switch header.Name {
			case "From":
				mail.From = header.Value

			case "To":
				mail.To = header.Value

			case "Subject":
				mail.Subject = header.Value

			case "Date":
				tm, err := time.Parse(time.RFC1123Z, header.Value)
				if err != nil {
					return nil, err
				}
				mail.Date = tm.Unix()
			}
		}

		if msg.Payload.Body.Data != "" {
			data, err := base64.URLEncoding.DecodeString(msg.Payload.Body.Data)
			if err != nil {
				return nil, err
			}
			mail.Body = string(data)
		}

		out[i] = mail
	}
	return out, nil
}

func MarkRead(mail *pb.Mail) error {
	_, err := srv.Users.Messages.Modify("me", mail.Id, &gmail.ModifyMessageRequest{
		RemoveLabelIds: []string{"UNREAD"},
	}).Do()
	return err
}
