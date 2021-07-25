package storage

import "github.com/Nv7-Github/CryptoMail/backend/pb"

func AddMsg(mail *pb.Mail) error {
	_, err := storage.Exec("INSERT INTO mail VALUES (?, ?, ?, ?, ?, ?)", mail.Id, mail.From, mail.To, mail.Subject, mail.Body, mail.Date)
	return err
}
