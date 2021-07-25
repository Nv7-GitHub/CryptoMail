package storage

import "github.com/Nv7-Github/CryptoMail/backend/pb"

func AddMsg(mail *pb.Mail) error {
	_, err := storage.Exec("INSERT INTO mail VALUES (?, ?, ?, ?, ?, ?)", mail.Id, mail.From, mail.To, mail.Subject, mail.Body, mail.Date)
	return err
}

// GetMessages gets all messages after a unix timestamp
func GetMessages(since int64) ([]*pb.Mail, error) {
	res, err := storage.Query("SELECT * FROM mail WHERE date > ?", since)
	if err != nil {
		return nil, err
	}

	var mail = &pb.Mail{}
	out := make([]*pb.Mail, 0)

	for res.Next() {
		err = res.Scan(&mail.Id, &mail.From, &mail.To, &mail.Subject, &mail.Body, &mail.Date)
		if err != nil {
			return nil, err
		}
		out = append(out, mail)
	}

	return out, nil
}
