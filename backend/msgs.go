package main

import (
	"crypto/aes"
	"crypto/cipher"
	"crypto/rand"
	"encoding/hex"
	"errors"
	"io"
	"strings"

	"github.com/Nv7-Github/CryptoMail/backend/gmail"
	"github.com/Nv7-Github/CryptoMail/backend/pb"
	"github.com/Nv7-Github/CryptoMail/backend/storage"
)

const mailSendPrefix = "<cryptomail> <msg> "

func SendMsg(email, subject, msg string) error {
	// Get Key
	keyHex, err := storage.GetFriend(email)
	if err != nil {
		return err
	}
	key, err := hex.DecodeString(keyHex.Key)
	if err != nil {
		return err
	}

	// Make GCM
	c, err := aes.NewCipher([]byte(key))
	if err != nil {
		return err
	}

	gcm, err := cipher.NewGCM(c)
	if err != nil {
		return err
	}

	// Make Nonce
	nonce := make([]byte, gcm.NonceSize())
	_, err = io.ReadFull(rand.Reader, nonce)
	if err != nil {
		return err
	}

	// Encrypt
	ciphertext := gcm.Seal(nonce, nonce, []byte(msg), nil)

	// Send
	mail := &pb.Mail{
		To:      email,
		Subject: mailSendPrefix + subject,
		Body:    hex.EncodeToString(ciphertext),
	}
	return gmail.SendMail(mail)
}

func ProcessMsg(mail *pb.Mail) error {
	// Get Key & Message
	ciphertext, err := hex.DecodeString(strings.TrimSpace(mail.Body))
	if err != nil {
		return err
	}

	keyHex, err := storage.GetFriend(mail.From)
	if err != nil {
		return err
	}
	key, err := hex.DecodeString(keyHex.Key)
	if err != nil {
		return err
	}

	// Get Cipher
	c, err := aes.NewCipher([]byte(key))
	if err != nil {
		return err
	}

	gcm, err := cipher.NewGCM(c)
	if err != nil {
		return err
	}

	// Get Nonce
	nonceSize := gcm.NonceSize()
	if len(ciphertext) < nonceSize {
		return errors.New("ciphertext does not contain nonce")
	}
	nonce := ciphertext[:nonceSize]
	ciphertext = ciphertext[nonceSize:]

	// Decrypt
	text, err := gcm.Open(nil, nonce, ciphertext, nil)
	if err != nil {
		return err
	}
	mail.Body = string(text)

	// Change Subject
	mail.Subject = mail.Subject[len(mailSendPrefix):]

	return storage.AddMsg(mail)
}
