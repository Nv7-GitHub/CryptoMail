package storage

import (
	"encoding/json"
	"os"
	"path/filepath"
)

func AddProfile(profile string) {
	configDir, err := os.UserConfigDir()
	if err != nil {
		panic(err)
	}
	profileFile := filepath.Join(configDir, appName, "profiles.json")
	profiles := GetProfiles()

	// Add Profile
	for _, prof := range profiles {
		if prof == profile {
			return
		}
	}
	profiles = append(profiles, profile)

	// Save
	f, err := os.Create(profileFile)
	if err != nil {
		panic(err)
	}
	defer f.Close()

	enc := json.NewEncoder(f)
	err = enc.Encode(profiles)
	if err != nil {
		panic(err)
	}
}

func GetProfiles() []string {
	configDir, err := os.UserConfigDir()
	if err != nil {
		panic(err)
	}
	profileFile := filepath.Join(configDir, appName, "profiles.json")

	// Get File
	f, err := os.Open(profileFile)
	if err != nil {
		return []string{}
	}
	defer f.Close()

	// Load Profiles
	dec := json.NewDecoder(f)
	var profiles []string
	if err := dec.Decode(&profiles); err != nil {
		return []string{}
	}

	return profiles
}

func GetCurrentProfile() (string, bool) {
	configDir, err := os.UserConfigDir()
	if err != nil {
		panic(err)
	}
	currFile := filepath.Join(configDir, appName, "curr.txt")

	curr, err := os.ReadFile(currFile)
	if err != nil {
		return "", false
	}

	return string(curr), true
}
