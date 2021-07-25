package main

import (
	"crypto/rand"
	"crypto/rsa"
	"crypto/sha256"
	"crypto/x509"
	"encoding/hex"
	"encoding/pem"
	"io"

	"github.com/Nv7-Github/CryptoMail/backend/gmail"
	"github.com/Nv7-Github/CryptoMail/backend/pb"
	"github.com/Nv7-Github/CryptoMail/backend/storage"
)

const rsaSize = 2048
const label = "cryptomail"
const aesKeyLen = 32

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

func AcceptFriendRequest(email string) error {
	// Generate Key
	key := make([]byte, aesKeyLen)
	_, err := io.ReadFull(rand.Reader, key)
	if err != nil {
		return err
	}

	// Decode PEM Key
	req, err := storage.GetFriendRequest(email)
	if err != nil {
		return err
	}
	pemKey, _ := pem.Decode([]byte(req.Key))
	pubKey, err := x509.ParsePKCS1PublicKey(pemKey.Bytes)
	if err != nil {
		return err
	}

	// Encrypt with key
	out, err := rsa.EncryptOAEP(sha256.New(), rand.Reader, pubKey, key, []byte(label))
	if err != nil {
		panic(err)
	}

	// Send mail
	msg := &pb.Mail{
		To:      email,
		Subject: "<cryptomail> <facc>",
		Body:    string(out),
	}
	err = gmail.SendMail(msg)
	if err != nil {
		return err
	}

	// Remove from DB
	return storage.RemoveFriendRequest(email)
}

func ProcessFAcc(email string, content string) error {
	privKeyRaw, err := storage.GetFriendRequest(email)
	if err != nil {
		return err
	}

	// Decode PEM Key
	privKeyPem, _ := pem.Decode([]byte(privKeyRaw.Key))
	privKey, err := x509.ParsePKCS1PrivateKey(privKeyPem.Bytes)
	if err != nil {
		return err
	}

	// Decrypt and get AES key
	key, err := rsa.DecryptOAEP(sha256.New(), rand.Reader, privKey, []byte(content), []byte(label))
	if err != nil {
		panic(err)
	}

	// Save AES key as hex
	return storage.AddFriend(email, hex.EncodeToString(key))
}
