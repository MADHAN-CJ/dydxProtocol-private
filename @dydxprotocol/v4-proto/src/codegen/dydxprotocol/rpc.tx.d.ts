import { Rpc } from "../helpers";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    cosmos: {
        auth: {
            v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        authz: {
            v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        bank: {
            v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        circuit: {
            v1: import("../cosmos/circuit/v1/tx.rpc.msg").MsgClientImpl;
        };
        consensus: {
            v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
        };
        crisis: {
            v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        distribution: {
            v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        evidence: {
            v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        feegrant: {
            v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        gov: {
            v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
            v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        group: {
            v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
        };
        mint: {
            v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        nft: {
            v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        slashing: {
            v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        staking: {
            v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        upgrade: {
            v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        vesting: {
            v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
    };
    dydxprotocol: {
        accountplus: import("./accountplus/tx.rpc.msg").MsgClientImpl;
        affiliates: import("./affiliates/tx.rpc.msg").MsgClientImpl;
        blocktime: import("./blocktime/tx.rpc.msg").MsgClientImpl;
        bridge: import("./bridge/tx.rpc.msg").MsgClientImpl;
        clob: import("./clob/tx.rpc.msg").MsgClientImpl;
        delaymsg: import("./delaymsg/tx.rpc.msg").MsgClientImpl;
        feetiers: import("./feetiers/tx.rpc.msg").MsgClientImpl;
        govplus: import("./govplus/tx.rpc.msg").MsgClientImpl;
        listing: import("./listing/tx.rpc.msg").MsgClientImpl;
        perpetuals: import("./perpetuals/tx.rpc.msg").MsgClientImpl;
        prices: import("./prices/tx.rpc.msg").MsgClientImpl;
        ratelimit: import("./ratelimit/tx.rpc.msg").MsgClientImpl;
        revshare: import("./revshare/tx.rpc.msg").MsgClientImpl;
        rewards: import("./rewards/tx.rpc.msg").MsgClientImpl;
        sending: import("./sending/tx.rpc.msg").MsgClientImpl;
        stats: import("./stats/tx.rpc.msg").MsgClientImpl;
        vault: import("./vault/tx.rpc.msg").MsgClientImpl;
        vest: import("./vest/tx.rpc.msg").MsgClientImpl;
    };
}>;
