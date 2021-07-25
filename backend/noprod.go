// +build !prod

package main

import (
	"os"
	"os/signal"
)

func ServeProd() {}

func UIProd() {
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)
	<-c
}
