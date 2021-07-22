package storage

import (
	"database/sql"
	"os"
	"path/filepath"

	_ "github.com/mattn/go-sqlite3"
)

var storage *sql.DB

const appName = "cryptomail"

func LoadProfile(profile string) {
	configDir, err := os.UserConfigDir()
	if err != nil {
		panic(err)
	}
	err = os.MkdirAll(filepath.Join(configDir, appName), os.ModePerm)
	if err != nil {
		panic(err)
	}

	dbFile := filepath.Join(configDir, appName, profile+".db")

	storage, err = sql.Open("sqlite3", dbFile)
	if err != nil {
		panic(err)
	}

	storage.Exec("CREATE TABLE IF NOT EXISTS config ( key TEXT, value TEXT )")
	storage.Exec("CREATE TABLE IF NOT EXISTS freqs ( fromme INTEGER, email TEXT, key TEXT )")
	storage.Exec("CREATE TABLE IF NOT EXISTS friends ( email TEXT, key TEXT )")

	// Save Current Profile
	currFile := filepath.Join(configDir, appName, "curr.txt")
	f, err := os.Create(currFile)
	if err != nil {
		panic(err)
	}

	f.WriteString(profile)
	f.Close()
}

// GetCfg gets a value from the table, returning false when it doesn't exist
func GetCfg(key string) (string, bool) {
	var val string
	err := storage.QueryRow("SELECT value FROM config WHERE key = ?", key).Scan(&val)
	if err == sql.ErrNoRows {
		return "", false
	}
	return val, true
}

// SetCfg sets a value in the config table, creating a row if it does not exist
func SetCfg(key, val string) {
	storage.Exec("INSERT OR REPLACE INTO config (key, value) VALUES (?, ?)", key, val)
}
