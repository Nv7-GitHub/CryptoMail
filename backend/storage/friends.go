package storage

import "github.com/Nv7-Github/CryptoMail/backend/pb"

// Friend Requests
func AddFriendRequest(fromme bool, email, key string) error {
	fme := 0
	if fromme {
		fme = 1
	}

	_, err := storage.Exec("INSERT INTO freqs (fromme, email, key) VALUES (?, ?, ?)", fme, email, key)
	return err
}

func GetFriendRequest(email string) (*pb.FriendRequest, error) {
	var fromme int
	var key string
	err := storage.QueryRow("SELECT fromme, key FROM freqs WHERE email=?", email).Scan(&fromme, &key)
	return &pb.FriendRequest{
		FromMe: fromme == 1,
		Email:  email,
		Key:    key,
	}, err
}

func GetFriendRequests() ([]*pb.FriendRequest, error) {
	res, err := storage.Query("SELECT fromme, email, key FROM freqs")
	if err != nil {
		return nil, err
	}

	out := make([]*pb.FriendRequest, 0)
	var email string
	var fromme int
	var key string
	for res.Next() {
		err = res.Scan(&fromme, &email, &key)
		if err != nil {
			return nil, err
		}

		out = append(out, &pb.FriendRequest{
			FromMe: fromme == 1,
			Email:  email,
			Key:    key,
		})
	}

	return out, nil
}

func RemoveFriendRequest(email string) error {
	_, err := storage.Exec("DELETE FROM freqs WHERE email=?", email)
	return err
}

// Friends
func AddFriend(email, key string) error {
	_, err := storage.Exec("INSERT INTO friends (email, key) VALUES (?, ?)", email, key)
	return err
}

func GetFriends() ([]string, error) {
	res, err := storage.Query("SELECT email FROM friends")
	if err != nil {
		return nil, err
	}

	out := make([]string, 0)
	var email string
	for res.Next() {
		err = res.Scan(&email)
		if err != nil {
			return nil, err
		}

		out = append(out, email)
	}

	return out, nil
}

func GetFriend(email string) (*pb.Friend, error) {
	var key string
	err := storage.QueryRow("SELECT key FROM freqs WHERE email=?", email).Scan(&key)
	return &pb.Friend{
		Email: email,
		Key:   key,
	}, err
}
