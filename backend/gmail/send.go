package gmail

import (
	"encoding/base64"

	"github.com/Nv7-Github/CryptoMail/backend/pb"
	"google.golang.org/api/gmail/v1"
)

func SendMail(mail *pb.Mail) error {
	var msg gmail.Message

	toData := "To: " + mail.To + "\r\n"
	subjectData := "Subject: " + mail.Subject + "\n"
	mimeData := "MIME-version: 1.0;\nContent-Type: text/plain; charset=\"UTF-8\";\n\n"
	data := []byte(toData + subjectData + mimeData + "\n" + mail.Body)

	msg.Raw = base64.URLEncoding.EncodeToString(data)
	_, err := srv.Users.Messages.Send("me", &msg).Do()
	return err
}
