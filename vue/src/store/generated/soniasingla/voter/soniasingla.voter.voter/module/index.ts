// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeletePoll } from "./types/voter/tx";
import { MsgCreateVote } from "./types/voter/tx";
import { MsgCreatePoll } from "./types/voter/tx";
import { MsgUpdateVote } from "./types/voter/tx";
import { MsgDeleteVote } from "./types/voter/tx";
import { MsgUpdatePoll } from "./types/voter/tx";


const types = [
  ["/soniasingla.voter.voter.MsgDeletePoll", MsgDeletePoll],
  ["/soniasingla.voter.voter.MsgCreateVote", MsgCreateVote],
  ["/soniasingla.voter.voter.MsgCreatePoll", MsgCreatePoll],
  ["/soniasingla.voter.voter.MsgUpdateVote", MsgUpdateVote],
  ["/soniasingla.voter.voter.MsgDeleteVote", MsgDeleteVote],
  ["/soniasingla.voter.voter.MsgUpdatePoll", MsgUpdatePoll],
  
];

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw new Error("wallet is required");

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee=defaultFee, memo=null }: SignAndBroadcastOptions) => memo?client.signAndBroadcast(address, msgs, fee,memo):client.signAndBroadcast(address, msgs, fee),
    msgDeletePoll: (data: MsgDeletePoll): EncodeObject => ({ typeUrl: "/soniasingla.voter.voter.MsgDeletePoll", value: data }),
    msgCreateVote: (data: MsgCreateVote): EncodeObject => ({ typeUrl: "/soniasingla.voter.voter.MsgCreateVote", value: data }),
    msgCreatePoll: (data: MsgCreatePoll): EncodeObject => ({ typeUrl: "/soniasingla.voter.voter.MsgCreatePoll", value: data }),
    msgUpdateVote: (data: MsgUpdateVote): EncodeObject => ({ typeUrl: "/soniasingla.voter.voter.MsgUpdateVote", value: data }),
    msgDeleteVote: (data: MsgDeleteVote): EncodeObject => ({ typeUrl: "/soniasingla.voter.voter.MsgDeleteVote", value: data }),
    msgUpdatePoll: (data: MsgUpdatePoll): EncodeObject => ({ typeUrl: "/soniasingla.voter.voter.MsgUpdatePoll", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
