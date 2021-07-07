package keeper

import (
	"github.com/soniasingla/voter/x/voter/types"
)

var _ types.QueryServer = Keeper{}
