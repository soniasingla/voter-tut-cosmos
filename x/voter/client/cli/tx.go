package cli

import (
	"fmt"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/soniasingla/voter/x/voter/types"
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

    // this line is used by starport scaffolding # 1

	cmd.AddCommand(CmdCreateVote())
	cmd.AddCommand(CmdUpdateVote())
	cmd.AddCommand(CmdDeleteVote())


	cmd.AddCommand(CmdCreatePoll())
	cmd.AddCommand(CmdUpdatePoll())
	cmd.AddCommand(CmdDeletePoll())


	return cmd 
}
