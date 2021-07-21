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

	// Get File
	f, err := os.Create(profileFile)
	if err != nil {
		panic(err)
	}
	defer f.Close()

	// Load Profiles
	dec := json.NewDecoder(f)
	var profiles []string
	if err := dec.Decode(&profiles); err != nil {
		panic(err)
	}

	// Add Profile
	for _, prof := range profiles {
		if prof == profile {
			return
		}
	}
	profiles = append(profiles, profile)

	// Save
	f.Truncate(0)
	f.Seek(0, 0)

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
	f, err := os.Create(profileFile)
	if err != nil {
		panic(err)
	}
	defer f.Close()

	// Load Profiles
	dec := json.NewDecoder(f)
	var profiles []string
	if err := dec.Decode(&profiles); err != nil {
		panic(err)
	}

	return profiles
}
