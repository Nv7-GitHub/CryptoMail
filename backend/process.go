package main

import (
	"fmt"
	"regexp"
	"strings"

	"github.com/Nv7-Github/CryptoMail/backend/gmail"
	"github.com/Nv7-Github/CryptoMail/backend/pb"
	"github.com/Nv7-Github/CryptoMail/backend/storage"
)

var processRe = regexp.MustCompile("<cryptomail> <(.+?)>(?: (.+)|)")

func ProcessMail(mail *pb.Mail) error {
	if strings.HasPrefix(mail.Subject, "<cryptomail>") {
		matches := processRe.FindAllStringSubmatch(mail.Subject, -1)
		if len(matches) > 0 {
			kind := matches[0][1]
			//body := matches[0][2]
			switch kind {
			case "freq": // Friend request
				err := storage.AddFriendRequest(false, mail.From, mail.Body)
				if err != nil {
					return err
				}
				return gmail.MarkRead(mail)

			case "facc": // Friend request accept
				fmt.Println("facc")
				return gmail.MarkRead(mail)

			case "msg": // Message
				fmt.Println("msg")
				return gmail.MarkRead(mail)
			}
		}
	}
	return nil
}
