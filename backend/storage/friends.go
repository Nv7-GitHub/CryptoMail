package storage

func AddFriendRequest(email, privKey string) error {
	_, err := storage.Exec("INSERT INTO freqs (email, privkey) VALUES (?, ?)", email, privKey)
	return err
}

func GetFriendRequests() ([]string, error) {
	res, err := storage.Query("SELECT email FROM freqs")
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

func RemoveFriendRequest(email string) error {
	_, err := storage.Exec("DELETE FROM freqs WHERE email=?", email)
	return err
}
