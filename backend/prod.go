// +build prod

package main

import (
	"embed"
	"fmt"
	"net"
	"net/http"
	"runtime"

	"github.com/webview/webview"
)

//go:embed dist/*
var cnt embed.FS

const debug = false
const prodPort = ":49154"

func init() {
	runtime.LockOSThread()
}

func ServeProd() {
	lis, err := net.Listen("tcp", prodPort)
	if err != nil {
		panic(err)
	}

	serv := &http.Server{
		Handler: http.FileServer(http.FS(cnt)),
	}
	defer serv.Close()

	fmt.Println("Listening static at", prodPort)
	err = serv.Serve(lis)
	if err != nil {
		panic(err)
	}
}

func UIProd() {
	w := webview.New(debug)
	defer w.Destroy()

	w.SetTitle("CryptoMail")
	w.SetSize(800, 600, webview.HintNone)
	w.Navigate("http://localhost" + prodPort + "/dist/index.html")
	w.Run()
}
