package main

import (
	"crypto/rand"
	"crypto/rsa"
	"crypto/x509"
	"encoding/pem"

	"github.com/Nv7-Github/CryptoMail/backend/gmail"
	"github.com/Nv7-Github/CryptoMail/backend/pb"
	"github.com/Nv7-Github/CryptoMail/backend/storage"
)

const rsaSize = 2048
const label = "cryptomail"

func NewFriendRequest(email string) error {
	// Make key
	key, err := rsa.GenerateKey(rand.Reader, rsaSize)
	if err != nil {
		panic(err)
	}

	// Convert to string
	pubKey := pem.EncodeToMemory(
		&pem.Block{
			Type:  "RSA PUBLIC KEY",
			Bytes: x509.MarshalPKCS1PublicKey(&key.PublicKey),
		},
	)

	// Send mail
	msg := &pb.Mail{
		To:      email,
		Subject: "<cryptomail> <freq>",
		Body:    string(pubKey),
	}
	err = gmail.SendMail(msg)
	if err != nil {
		return err
	}

	// Add Priv Key to DB (conv to string and add)
	privKey := string(pem.EncodeToMemory(
		&pem.Block{
			Type:  "RSA PRIVATE KEY",
			Bytes: x509.MarshalPKCS1PrivateKey(key),
		},
	))
	return storage.AddFriendRequest(true, email, privKey)
}
