package main

import (
	"os"

	"github.com/soniasingla/voter/cmd/voterd/cmd"
    svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
	"github.com/soniasingla/voter/app"
)

func main() {
	rootCmd, _ := cmd.NewRootCmd()
    if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome); err != nil {
		os.Exit(1)
	}
}
