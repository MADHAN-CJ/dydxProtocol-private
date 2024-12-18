"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRPCQueryClient = void 0;
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const stargate_1 = require("@cosmjs/stargate");
const createRPCQueryClient = async ({ rpcEndpoint }) => {
    const tmClient = await tendermint_rpc_1.Tendermint34Client.connect(rpcEndpoint);
    const client = new stargate_1.QueryClient(tmClient);
    return {
        cosmos: {
            app: {
                v1alpha1: (await Promise.resolve().then(() => __importStar(require("../cosmos/app/v1alpha1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            auth: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/auth/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            authz: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/authz/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            bank: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/bank/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            base: {
                node: {
                    v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/base/node/v1beta1/query.rpc.Service")))).createRpcQueryExtension(client)
                },
                tendermint: {
                    v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/base/tendermint/v1beta1/query.rpc.Service")))).createRpcQueryExtension(client)
                }
            },
            circuit: {
                v1: (await Promise.resolve().then(() => __importStar(require("../cosmos/circuit/v1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            consensus: {
                v1: (await Promise.resolve().then(() => __importStar(require("../cosmos/consensus/v1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            distribution: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/distribution/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            evidence: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/evidence/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            feegrant: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/feegrant/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            gov: {
                v1: (await Promise.resolve().then(() => __importStar(require("../cosmos/gov/v1/query.rpc.Query")))).createRpcQueryExtension(client),
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/gov/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            group: {
                v1: (await Promise.resolve().then(() => __importStar(require("../cosmos/group/v1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            mint: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/mint/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            nft: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/nft/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            orm: {
                query: {
                    v1alpha1: (await Promise.resolve().then(() => __importStar(require("../cosmos/orm/query/v1alpha1/query.rpc.Query")))).createRpcQueryExtension(client)
                }
            },
            params: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/params/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            slashing: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/slashing/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            staking: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/staking/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            tx: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/tx/v1beta1/service.rpc.Service")))).createRpcQueryExtension(client)
            },
            upgrade: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/upgrade/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            }
        },
        dydxprotocol: {
            accountplus: (await Promise.resolve().then(() => __importStar(require("./accountplus/query.rpc.Query")))).createRpcQueryExtension(client),
            affiliates: (await Promise.resolve().then(() => __importStar(require("./affiliates/query.rpc.Query")))).createRpcQueryExtension(client),
            assets: (await Promise.resolve().then(() => __importStar(require("./assets/query.rpc.Query")))).createRpcQueryExtension(client),
            blocktime: (await Promise.resolve().then(() => __importStar(require("./blocktime/query.rpc.Query")))).createRpcQueryExtension(client),
            bridge: (await Promise.resolve().then(() => __importStar(require("./bridge/query.rpc.Query")))).createRpcQueryExtension(client),
            clob: (await Promise.resolve().then(() => __importStar(require("./clob/query.rpc.Query")))).createRpcQueryExtension(client),
            delaymsg: (await Promise.resolve().then(() => __importStar(require("./delaymsg/query.rpc.Query")))).createRpcQueryExtension(client),
            epochs: (await Promise.resolve().then(() => __importStar(require("./epochs/query.rpc.Query")))).createRpcQueryExtension(client),
            feetiers: (await Promise.resolve().then(() => __importStar(require("./feetiers/query.rpc.Query")))).createRpcQueryExtension(client),
            govplus: (await Promise.resolve().then(() => __importStar(require("./govplus/query.rpc.Query")))).createRpcQueryExtension(client),
            listing: (await Promise.resolve().then(() => __importStar(require("./listing/query.rpc.Query")))).createRpcQueryExtension(client),
            perpetuals: (await Promise.resolve().then(() => __importStar(require("./perpetuals/query.rpc.Query")))).createRpcQueryExtension(client),
            prices: (await Promise.resolve().then(() => __importStar(require("./prices/query.rpc.Query")))).createRpcQueryExtension(client),
            ratelimit: (await Promise.resolve().then(() => __importStar(require("./ratelimit/query.rpc.Query")))).createRpcQueryExtension(client),
            revshare: (await Promise.resolve().then(() => __importStar(require("./revshare/query.rpc.Query")))).createRpcQueryExtension(client),
            rewards: (await Promise.resolve().then(() => __importStar(require("./rewards/query.rpc.Query")))).createRpcQueryExtension(client),
            sending: (await Promise.resolve().then(() => __importStar(require("./sending/query.rpc.Query")))).createRpcQueryExtension(client),
            stats: (await Promise.resolve().then(() => __importStar(require("./stats/query.rpc.Query")))).createRpcQueryExtension(client),
            subaccounts: (await Promise.resolve().then(() => __importStar(require("./subaccounts/query.rpc.Query")))).createRpcQueryExtension(client),
            vault: (await Promise.resolve().then(() => __importStar(require("./vault/query.rpc.Query")))).createRpcQueryExtension(client),
            vest: (await Promise.resolve().then(() => __importStar(require("./vest/query.rpc.Query")))).createRpcQueryExtension(client)
        }
    };
};
exports.createRPCQueryClient = createRPCQueryClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnBjLnF1ZXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkeWR4cHJvdG9jb2wvdjQtcHJvdG8vc3JjL2NvZGVnZW4vZHlkeHByb3RvY29sL3JwYy5xdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRTtBQUMxRSwrQ0FBK0M7QUFDeEMsTUFBTSxvQkFBb0IsR0FBRyxLQUFLLEVBQUUsRUFDekMsV0FBVyxFQUdaLEVBQUUsRUFBRTtJQUNILE1BQU0sUUFBUSxHQUFHLE1BQU0sbUNBQWtCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9ELE1BQU0sTUFBTSxHQUFHLElBQUksc0JBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxPQUFPO1FBQ0wsTUFBTSxFQUFFO1lBQ04sR0FBRyxFQUFFO2dCQUNILFFBQVEsRUFBRSxDQUFDLHdEQUFhLHdDQUF3QyxHQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUM7YUFDbkc7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLENBQUMsd0RBQWEsd0NBQXdDLEdBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQzthQUNsRztZQUNELEtBQUssRUFBRTtnQkFDTCxPQUFPLEVBQUUsQ0FBQyx3REFBYSx5Q0FBeUMsR0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDO2FBQ25HO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLE9BQU8sRUFBRSxDQUFDLHdEQUFhLHdDQUF3QyxHQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUM7YUFDbEc7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFO29CQUNKLE9BQU8sRUFBRSxDQUFDLHdEQUFhLCtDQUErQyxHQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENB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