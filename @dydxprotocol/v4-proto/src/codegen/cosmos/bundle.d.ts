/// <reference types="long" />
import * as _2 from "./app/runtime/v1alpha1/module";
import * as _3 from "./app/v1alpha1/config";
import * as _4 from "./app/v1alpha1/module";
import * as _5 from "./app/v1alpha1/query";
import * as _6 from "./auth/module/v1/module";
import * as _7 from "./auth/v1beta1/auth";
import * as _8 from "./auth/v1beta1/genesis";
import * as _9 from "./auth/v1beta1/query";
import * as _10 from "./auth/v1beta1/tx";
import * as _11 from "./authz/module/v1/module";
import * as _12 from "./authz/v1beta1/authz";
import * as _13 from "./authz/v1beta1/event";
import * as _14 from "./authz/v1beta1/genesis";
import * as _15 from "./authz/v1beta1/query";
import * as _16 from "./authz/v1beta1/tx";
import * as _17 from "./bank/module/v1/module";
import * as _18 from "./bank/v1beta1/authz";
import * as _19 from "./bank/v1beta1/bank";
import * as _20 from "./bank/v1beta1/genesis";
import * as _21 from "./bank/v1beta1/query";
import * as _22 from "./bank/v1beta1/tx";
import * as _23 from "./base/abci/v1beta1/abci";
import * as _24 from "./base/node/v1beta1/query";
import * as _25 from "./base/query/v1beta1/pagination";
import * as _26 from "./base/reflection/v1beta1/reflection";
import * as _27 from "./base/reflection/v2alpha1/reflection";
import * as _28 from "./base/tendermint/v1beta1/query";
import * as _29 from "./base/tendermint/v1beta1/types";
import * as _30 from "./base/v1beta1/coin";
import * as _31 from "./circuit/module/v1/module";
import * as _32 from "./circuit/v1/query";
import * as _33 from "./circuit/v1/tx";
import * as _34 from "./circuit/v1/types";
import * as _35 from "./consensus/module/v1/module";
import * as _36 from "./consensus/v1/query";
import * as _37 from "./consensus/v1/tx";
import * as _38 from "./crisis/module/v1/module";
import * as _39 from "./crisis/v1beta1/genesis";
import * as _40 from "./crisis/v1beta1/tx";
import * as _41 from "./crypto/ed25519/keys";
import * as _42 from "./crypto/hd/v1/hd";
import * as _43 from "./crypto/keyring/v1/record";
import * as _44 from "./crypto/multisig/keys";
import * as _45 from "./crypto/secp256k1/keys";
import * as _46 from "./crypto/secp256r1/keys";
import * as _47 from "./distribution/module/v1/module";
import * as _48 from "./distribution/v1beta1/distribution";
import * as _49 from "./distribution/v1beta1/genesis";
import * as _50 from "./distribution/v1beta1/query";
import * as _51 from "./distribution/v1beta1/tx";
import * as _52 from "./evidence/module/v1/module";
import * as _53 from "./evidence/v1beta1/evidence";
import * as _54 from "./evidence/v1beta1/genesis";
import * as _55 from "./evidence/v1beta1/query";
import * as _56 from "./evidence/v1beta1/tx";
import * as _57 from "./feegrant/module/v1/module";
import * as _58 from "./feegrant/v1beta1/feegrant";
import * as _59 from "./feegrant/v1beta1/genesis";
import * as _60 from "./feegrant/v1beta1/query";
import * as _61 from "./feegrant/v1beta1/tx";
import * as _62 from "./genutil/module/v1/module";
import * as _63 from "./genutil/v1beta1/genesis";
import * as _64 from "./gov/module/v1/module";
import * as _65 from "./gov/v1/genesis";
import * as _66 from "./gov/v1/gov";
import * as _67 from "./gov/v1/query";
import * as _68 from "./gov/v1/tx";
import * as _69 from "./gov/v1beta1/genesis";
import * as _70 from "./gov/v1beta1/gov";
import * as _71 from "./gov/v1beta1/query";
import * as _72 from "./gov/v1beta1/tx";
import * as _73 from "./group/module/v1/module";
import * as _74 from "./group/v1/events";
import * as _75 from "./group/v1/genesis";
import * as _76 from "./group/v1/query";
import * as _77 from "./group/v1/tx";
import * as _78 from "./group/v1/types";
import * as _79 from "./mint/module/v1/module";
import * as _80 from "./mint/v1beta1/genesis";
import * as _81 from "./mint/v1beta1/mint";
import * as _82 from "./mint/v1beta1/query";
import * as _83 from "./mint/v1beta1/tx";
import * as _86 from "./nft/module/v1/module";
import * as _87 from "./nft/v1beta1/event";
import * as _88 from "./nft/v1beta1/genesis";
import * as _89 from "./nft/v1beta1/nft";
import * as _90 from "./nft/v1beta1/query";
import * as _91 from "./nft/v1beta1/tx";
import * as _92 from "./orm/module/v1alpha1/module";
import * as _93 from "./orm/query/v1alpha1/query";
import * as _94 from "./orm/v1/orm";
import * as _95 from "./orm/v1alpha1/schema";
import * as _96 from "./params/module/v1/module";
import * as _97 from "./params/v1beta1/params";
import * as _98 from "./params/v1beta1/query";
import * as _100 from "./reflection/v1/reflection";
import * as _101 from "./slashing/module/v1/module";
import * as _102 from "./slashing/v1beta1/genesis";
import * as _103 from "./slashing/v1beta1/query";
import * as _104 from "./slashing/v1beta1/slashing";
import * as _105 from "./slashing/v1beta1/tx";
import * as _106 from "./staking/module/v1/module";
import * as _107 from "./staking/v1beta1/authz";
import * as _108 from "./staking/v1beta1/genesis";
import * as _109 from "./staking/v1beta1/query";
import * as _110 from "./staking/v1beta1/staking";
import * as _111 from "./staking/v1beta1/tx";
import * as _112 from "./store/internal/kv/v1beta1/kv";
import * as _113 from "./store/snapshots/v1/snapshot";
import * as _114 from "./store/streaming/abci/grpc";
import * as _115 from "./store/v1beta1/commit_info";
import * as _116 from "./store/v1beta1/listening";
import * as _117 from "./tx/config/v1/config";
import * as _118 from "./tx/signing/v1beta1/signing";
import * as _119 from "./tx/v1beta1/service";
import * as _120 from "./tx/v1beta1/tx";
import * as _121 from "./upgrade/module/v1/module";
import * as _122 from "./upgrade/v1beta1/query";
import * as _123 from "./upgrade/v1beta1/tx";
import * as _124 from "./upgrade/v1beta1/upgrade";
import * as _125 from "./vesting/module/v1/module";
import * as _126 from "./vesting/v1beta1/tx";
import * as _127 from "./vesting/v1beta1/vesting";
import * as _269 from "./auth/v1beta1/query.lcd";
import * as _270 from "./authz/v1beta1/query.lcd";
import * as _271 from "./bank/v1beta1/query.lcd";
import * as _272 from "./base/node/v1beta1/query.lcd";
import * as _273 from "./base/tendermint/v1beta1/query.lcd";
import * as _274 from "./circuit/v1/query.lcd";
import * as _275 from "./consensus/v1/query.lcd";
import * as _276 from "./distribution/v1beta1/query.lcd";
import * as _277 from "./evidence/v1beta1/query.lcd";
import * as _278 from "./feegrant/v1beta1/query.lcd";
import * as _279 from "./gov/v1/query.lcd";
import * as _280 from "./gov/v1beta1/query.lcd";
import * as _281 from "./group/v1/query.lcd";
import * as _282 from "./mint/v1beta1/query.lcd";
import * as _283 from "./nft/v1beta1/query.lcd";
import * as _284 from "./params/v1beta1/query.lcd";
import * as _285 from "./slashing/v1beta1/query.lcd";
import * as _286 from "./staking/v1beta1/query.lcd";
import * as _287 from "./tx/v1beta1/service.lcd";
import * as _288 from "./upgrade/v1beta1/query.lcd";
import * as _289 from "./app/v1alpha1/query.rpc.Query";
import * as _290 from "./auth/v1beta1/query.rpc.Query";
import * as _291 from "./authz/v1beta1/query.rpc.Query";
import * as _292 from "./bank/v1beta1/query.rpc.Query";
import * as _293 from "./base/node/v1beta1/query.rpc.Service";
import * as _294 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _295 from "./circuit/v1/query.rpc.Query";
import * as _296 from "./consensus/v1/query.rpc.Query";
import * as _297 from "./distribution/v1beta1/query.rpc.Query";
import * as _298 from "./evidence/v1beta1/query.rpc.Query";
import * as _299 from "./feegrant/v1beta1/query.rpc.Query";
import * as _300 from "./gov/v1/query.rpc.Query";
import * as _301 from "./gov/v1beta1/query.rpc.Query";
import * as _302 from "./group/v1/query.rpc.Query";
import * as _303 from "./mint/v1beta1/query.rpc.Query";
import * as _304 from "./nft/v1beta1/query.rpc.Query";
import * as _305 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _306 from "./params/v1beta1/query.rpc.Query";
import * as _307 from "./slashing/v1beta1/query.rpc.Query";
import * as _308 from "./staking/v1beta1/query.rpc.Query";
import * as _309 from "./tx/v1beta1/service.rpc.Service";
import * as _310 from "./upgrade/v1beta1/query.rpc.Query";
import * as _311 from "./auth/v1beta1/tx.rpc.msg";
import * as _312 from "./authz/v1beta1/tx.rpc.msg";
import * as _313 from "./bank/v1beta1/tx.rpc.msg";
import * as _314 from "./circuit/v1/tx.rpc.msg";
import * as _315 from "./consensus/v1/tx.rpc.msg";
import * as _316 from "./crisis/v1beta1/tx.rpc.msg";
import * as _317 from "./distribution/v1beta1/tx.rpc.msg";
import * as _318 from "./evidence/v1beta1/tx.rpc.msg";
import * as _319 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _320 from "./gov/v1/tx.rpc.msg";
import * as _321 from "./gov/v1beta1/tx.rpc.msg";
import * as _322 from "./group/v1/tx.rpc.msg";
import * as _323 from "./mint/v1beta1/tx.rpc.msg";
import * as _324 from "./nft/v1beta1/tx.rpc.msg";
import * as _325 from "./slashing/v1beta1/tx.rpc.msg";
import * as _326 from "./staking/v1beta1/tx.rpc.msg";
import * as _327 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _328 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    encode(message: _2.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _2.Module;
                    fromPartial(object: {
                        appName?: string | undefined;
                        beginBlockers?: string[] | undefined;
                        endBlockers?: string[] | undefined;
                        initGenesis?: string[] | undefined;
                        exportGenesis?: string[] | undefined;
                        overrideStoreKeys?: {
                            moduleName?: string | undefined;
                            kvStoreKey?: string | undefined;
                        }[] | undefined;
                        orderMigrations?: string[] | undefined;
                        precommiters?: string[] | undefined;
                        prepareCheckStaters?: string[] | undefined;
                    }): _2.Module;
                };
                StoreKeyConfig: {
                    encode(message: _2.StoreKeyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _2.StoreKeyConfig;
                    fromPartial(object: {
                        moduleName?: string | undefined;
                        kvStoreKey?: string | undefined;
                    }): _2.StoreKeyConfig;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _289.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _5.QueryConfigRequest | undefined): Promise<_5.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _5.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _5.QueryConfigRequest;
                fromPartial(_: {}): _5.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _5.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _5.QueryConfigResponse;
                fromPartial(object: {
                    config?: {
                        modules?: {
                            name?: string | undefined;
                            config?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            } | undefined;
                            golangBindings?: {
                                interfaceType?: string | undefined;
                                implementation?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        golangBindings?: {
                            interfaceType?: string | undefined;
                            implementation?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }): _5.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _4.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _4.ModuleDescriptor;
                fromPartial(object: {
                    goImport?: string | undefined;
                    usePackage?: {
                        name?: string | undefined;
                        revision?: number | undefined;
                    }[] | undefined;
                    canMigrateFrom?: {
                        module?: string | undefined;
                    }[] | undefined;
                }): _4.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _4.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _4.PackageReference;
                fromPartial(object: {
                    name?: string | undefined;
                    revision?: number | undefined;
                }): _4.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _4.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _4.MigrateFromInfo;
                fromPartial(object: {
                    module?: string | undefined;
                }): _4.MigrateFromInfo;
            };
            Config: {
                encode(message: _3.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _3.Config;
                fromPartial(object: {
                    modules?: {
                        name?: string | undefined;
                        config?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        golangBindings?: {
                            interfaceType?: string | undefined;
                            implementation?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    golangBindings?: {
                        interfaceType?: string | undefined;
                        implementation?: string | undefined;
                    }[] | undefined;
                }): _3.Config;
            };
            ModuleConfig: {
                encode(message: _3.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _3.ModuleConfig;
                fromPartial(object: {
                    name?: string | undefined;
                    config?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    golangBindings?: {
                        interfaceType?: string | undefined;
                        implementation?: string | undefined;
                    }[] | undefined;
                }): _3.ModuleConfig;
            };
            GolangBinding: {
                encode(message: _3.GolangBinding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _3.GolangBinding;
                fromPartial(object: {
                    interfaceType?: string | undefined;
                    implementation?: string | undefined;
                }): _3.GolangBinding;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _6.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _6.Module;
                    fromPartial(object: {
                        bech32Prefix?: string | undefined;
                        moduleAccountPermissions?: {
                            account?: string | undefined;
                            permissions?: string[] | undefined;
                        }[] | undefined;
                        authority?: string | undefined;
                    }): _6.Module;
                };
                ModuleAccountPermission: {
                    encode(message: _6.ModuleAccountPermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _6.ModuleAccountPermission;
                    fromPartial(object: {
                        account?: string | undefined;
                        permissions?: string[] | undefined;
                    }): _6.ModuleAccountPermission;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _311.MsgClientImpl;
            QueryClientImpl: typeof _290.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _9.QueryAccountsRequest | undefined): Promise<_9.QueryAccountsResponse>;
                account(request: _9.QueryAccountRequest): Promise<_9.QueryAccountResponse>;
                accountAddressByID(request: _9.QueryAccountAddressByIDRequest): Promise<_9.QueryAccountAddressByIDResponse>;
                params(request?: _9.QueryParamsRequest | undefined): Promise<_9.QueryParamsResponse>;
                moduleAccounts(request?: _9.QueryModuleAccountsRequest | undefined): Promise<_9.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _9.QueryModuleAccountByNameRequest): Promise<_9.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _9.Bech32PrefixRequest | undefined): Promise<_9.Bech32PrefixResponse>;
                addressBytesToString(request: _9.AddressBytesToStringRequest): Promise<_9.AddressBytesToStringResponse>;
                addressStringToBytes(request: _9.AddressStringToBytesRequest): Promise<_9.AddressStringToBytesResponse>;
                accountInfo(request: _9.QueryAccountInfoRequest): Promise<_9.QueryAccountInfoResponse>;
            };
            LCDQueryClient: typeof _269.LCDQueryClient;
            MsgUpdateParams: {
                encode(message: _10.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _10.MsgUpdateParams;
                fromPartial(object: {
                    authority?: string | undefined;
                    params?: {
                        maxMemoCharacters?: string | number | import("long").Long | undefined;
                        txSigLimit?: string | number | import("long").Long | undefined;
                        txSizeCostPerByte?: string | number | import("long").Long | undefined;
                        sigVerifyCostEd25519?: string | number | import("long").Long | undefined;
                        sigVerifyCostSecp256k1?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _10.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _10.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _10.MsgUpdateParamsResponse;
                fromPartial(_: {}): _10.MsgUpdateParamsResponse;
            };
            QueryAccountsRequest: {
                encode(message: _9.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.QueryAccountsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _9.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _9.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.QueryAccountsResponse;
                fromPartial(object: {
                    accounts?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _9.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _9.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.QueryAccountRequest;
                fromPartial(object: {
                    address?: string | undefined;
                }): _9.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _9.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.QueryAccountResponse;
                fromPartial(object: {
                    account?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }): _9.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _9.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.QueryParamsRequest;
                fromPartial(_: {}): _9.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _9.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: string | number | import("long").Long | undefined;
                        txSigLimit?: string | number | import("long").Long | undefined;
                        txSizeCostPerByte?: string | number | import("long").Long | undefined;
                        sigVerifyCostEd25519?: string | number | import("long").Long | undefined;
                        sigVerifyCostSecp256k1?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _9.QueryParamsResponse;
            };
            QueryModuleAccountsRequest: {
                encode(_: _9.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.QueryModuleAccountsRequest;
                fromPartial(_: {}): _9.QueryModuleAccountsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _9.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.QueryModuleAccountsResponse;
                fromPartial(object: {
                    accounts?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    }[] | undefined;
                }): _9.QueryModuleAccountsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _9.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.QueryModuleAccountByNameRequest;
                fromPartial(object: {
                    name?: string | undefined;
                }): _9.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _9.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.QueryModuleAccountByNameResponse;
                fromPartial(object: {
                    account?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }): _9.QueryModuleAccountByNameResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _9.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.Bech32PrefixRequest;
                fromPartial(_: {}): _9.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _9.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.Bech32PrefixResponse;
                fromPartial(object: {
                    bech32Prefix?: string | undefined;
                }): _9.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _9.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.AddressBytesToStringRequest;
                fromPartial(object: {
                    addressBytes?: Uint8Array | undefined;
                }): _9.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _9.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.AddressBytesToStringResponse;
                fromPartial(object: {
                    addressString?: string | undefined;
                }): _9.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _9.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.AddressStringToBytesRequest;
                fromPartial(object: {
                    addressString?: string | undefined;
                }): _9.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _9.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.AddressStringToBytesResponse;
                fromPartial(object: {
                    addressBytes?: Uint8Array | undefined;
                }): _9.AddressStringToBytesResponse;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _9.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.QueryAccountAddressByIDRequest;
                fromPartial(object: {
                    id?: string | number | import("long").Long | undefined;
                    accountId?: string | number | import("long").Long | undefined;
                }): _9.QueryAccountAddressByIDRequest;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _9.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.QueryAccountAddressByIDResponse;
                fromPartial(object: {
                    accountAddress?: string | undefined;
                }): _9.QueryAccountAddressByIDResponse;
            };
            QueryAccountInfoRequest: {
                encode(message: _9.QueryAccountInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.QueryAccountInfoRequest;
                fromPartial(object: {
                    address?: string | undefined;
                }): _9.QueryAccountInfoRequest;
            };
            QueryAccountInfoResponse: {
                encode(message: _9.QueryAccountInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.QueryAccountInfoResponse;
                fromPartial(object: {
                    info?: {
                        address?: string | undefined;
                        pubKey?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        accountNumber?: string | number | import("long").Long | undefined;
                        sequence?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _9.QueryAccountInfoResponse;
            };
            GenesisState: {
                encode(message: _8.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.GenesisState;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: string | number | import("long").Long | undefined;
                        txSigLimit?: string | number | import("long").Long | undefined;
                        txSizeCostPerByte?: string | number | import("long").Long | undefined;
                        sigVerifyCostEd25519?: string | number | import("long").Long | undefined;
                        sigVerifyCostSecp256k1?: string | number | import("long").Long | undefined;
                    } | undefined;
                    accounts?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    }[] | undefined;
                }): _8.GenesisState;
            };
            BaseAccount: {
                encode(message: _7.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _7.BaseAccount;
                fromPartial(object: {
                    address?: string | undefined;
                    pubKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    accountNumber?: string | number | import("long").Long | undefined;
                    sequence?: string | number | import("long").Long | undefined;
                }): _7.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _7.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _7.ModuleAccount;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string | undefined;
                        pubKey?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        accountNumber?: string | number | import("long").Long | undefined;
                        sequence?: string | number | import("long").Long | undefined;
                    } | undefined;
                    name?: string | undefined;
                    permissions?: string[] | undefined;
                }): _7.ModuleAccount;
            };
            ModuleCredential: {
                encode(message: _7.ModuleCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _7.ModuleCredential;
                fromPartial(object: {
                    moduleName?: string | undefined;
                    derivationKeys?: Uint8Array[] | undefined;
                }): _7.ModuleCredential;
            };
            Params: {
                encode(message: _7.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _7.Params;
                fromPartial(object: {
                    maxMemoCharacters?: string | number | import("long").Long | undefined;
                    txSigLimit?: string | number | import("long").Long | undefined;
                    txSizeCostPerByte?: string | number | import("long").Long | undefined;
                    sigVerifyCostEd25519?: string | number | import("long").Long | undefined;
                    sigVerifyCostSecp256k1?: string | number | import("long").Long | undefined;
                }): _7.Params;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _11.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _11.Module;
                    fromPartial(_: {}): _11.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _312.MsgClientImpl;
            QueryClientImpl: typeof _291.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _15.QueryGrantsRequest): Promise<_15.QueryGrantsResponse>;
                granterGrants(request: _15.QueryGranterGrantsRequest): Promise<_15.QueryGranterGrantsResponse>;
                granteeGrants(request: _15.QueryGranteeGrantsRequest): Promise<_15.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _270.LCDQueryClient;
            MsgGrant: {
                encode(message: _16.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _16.MsgGrant;
                fromPartial(object: {
                    granter?: string | undefined;
                    grantee?: string | undefined;
                    grant?: {
                        authorization?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        expiration?: Date | undefined;
                    } | undefined;
                }): _16.MsgGrant;
            };
            MsgGrantResponse: {
                encode(_: _16.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _16.MsgGrantResponse;
                fromPartial(_: {}): _16.MsgGrantResponse;
            };
            MsgExec: {
                encode(message: _16.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _16.MsgExec;
                fromPartial(object: {
                    grantee?: string | undefined;
                    msgs?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    }[] | undefined;
                }): _16.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _16.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _16.MsgExecResponse;
                fromPartial(object: {
                    results?: Uint8Array[] | undefined;
                }): _16.MsgExecResponse;
            };
            MsgRevoke: {
                encode(message: _16.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _16.MsgRevoke;
                fromPartial(object: {
                    granter?: string | undefined;
                    grantee?: string | undefined;
                    msgTypeUrl?: string | undefined;
                }): _16.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _16.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _16.MsgRevokeResponse;
                fromPartial(_: {}): _16.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _15.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _15.QueryGrantsRequest;
                fromPartial(object: {
                    granter?: string | undefined;
                    grantee?: string | undefined;
                    msgTypeUrl?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _15.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _15.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _15.QueryGrantsResponse;
                fromPartial(object: {
                    grants?: {
                        authorization?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        expiration?: Date | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _15.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _15.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _15.QueryGranterGrantsRequest;
                fromPartial(object: {
                    granter?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _15.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _15.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _15.QueryGranterGrantsResponse;
                fromPartial(object: {
                    grants?: {
                        granter?: string | undefined;
                        grantee?: string | undefined;
                        authorization?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        expiration?: Date | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _15.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _15.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _15.QueryGranteeGrantsRequest;
                fromPartial(object: {
                    grantee?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _15.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _15.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _15.QueryGranteeGrantsResponse;
                fromPartial(object: {
                    grants?: {
                        granter?: string | undefined;
                        grantee?: string | undefined;
                        authorization?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        expiration?: Date | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _15.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _14.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _14.GenesisState;
                fromPartial(object: {
                    authorization?: {
                        granter?: string | undefined;
                        grantee?: string | undefined;
                        authorization?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        expiration?: Date | undefined;
                    }[] | undefined;
                }): _14.GenesisState;
            };
            EventGrant: {
                encode(message: _13.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _13.EventGrant;
                fromPartial(object: {
                    msgTypeUrl?: string | undefined;
                    granter?: string | undefined;
                    grantee?: string | undefined;
                }): _13.EventGrant;
            };
            EventRevoke: {
                encode(message: _13.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _13.EventRevoke;
                fromPartial(object: {
                    msgTypeUrl?: string | undefined;
                    granter?: string | undefined;
                    grantee?: string | undefined;
                }): _13.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _12.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _12.GenericAuthorization;
                fromPartial(object: {
                    msg?: string | undefined;
                }): _12.GenericAuthorization;
            };
            Grant: {
                encode(message: _12.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _12.Grant;
                fromPartial(object: {
                    authorization?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    expiration?: Date | undefined;
                }): _12.Grant;
            };
            GrantAuthorization: {
                encode(message: _12.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _12.GrantAuthorization;
                fromPartial(object: {
                    granter?: string | undefined;
                    grantee?: string | undefined;
                    authorization?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    expiration?: Date | undefined;
                }): _12.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _12.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _12.GrantQueueItem;
                fromPartial(object: {
                    msgTypeUrls?: string[] | undefined;
                }): _12.GrantQueueItem;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _17.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.Module;
                    fromPartial(object: {
                        blockedModuleAccountsOverride?: string[] | undefined;
                        authority?: string | undefined;
                    }): _17.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _313.MsgClientImpl;
            QueryClientImpl: typeof _292.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _21.QueryBalanceRequest): Promise<_21.QueryBalanceResponse>;
                allBalances(request: _21.QueryAllBalancesRequest): Promise<_21.QueryAllBalancesResponse>;
                spendableBalances(request: _21.QuerySpendableBalancesRequest): Promise<_21.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _21.QuerySpendableBalanceByDenomRequest): Promise<_21.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _21.QueryTotalSupplyRequest | undefined): Promise<_21.QueryTotalSupplyResponse>;
                supplyOf(request: _21.QuerySupplyOfRequest): Promise<_21.QuerySupplyOfResponse>;
                params(request?: _21.QueryParamsRequest | undefined): Promise<_21.QueryParamsResponse>;
                denomMetadata(request: _21.QueryDenomMetadataRequest): Promise<_21.QueryDenomMetadataResponse>;
                denomMetadataByQueryString(request: _21.QueryDenomMetadataByQueryStringRequest): Promise<_21.QueryDenomMetadataByQueryStringResponse>;
                denomsMetadata(request?: _21.QueryDenomsMetadataRequest | undefined): Promise<_21.QueryDenomsMetadataResponse>;
                denomOwners(request: _21.QueryDenomOwnersRequest): Promise<_21.QueryDenomOwnersResponse>;
                sendEnabled(request: _21.QuerySendEnabledRequest): Promise<_21.QuerySendEnabledResponse>;
            };
            LCDQueryClient: typeof _271.LCDQueryClient;
            MsgSend: {
                encode(message: _22.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _22.MsgSend;
                fromPartial(object: {
                    fromAddress?: string | undefined;
                    toAddress?: string | undefined;
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _22.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _22.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _22.MsgSendResponse;
                fromPartial(_: {}): _22.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _22.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _22.MsgMultiSend;
                fromPartial(object: {
                    inputs?: {
                        address?: string | undefined;
                        coins?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    outputs?: {
                        address?: string | undefined;
                        coins?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                }): _22.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _22.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _22.MsgMultiSendResponse;
                fromPartial(_: {}): _22.MsgMultiSendResponse;
            };
            MsgUpdateParams: {
                encode(message: _22.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _22.MsgUpdateParams;
                fromPartial(object: {
                    authority?: string | undefined;
                    params?: {
                        sendEnabled?: {
                            denom?: string | undefined;
                            enabled?: boolean | undefined;
                        }[] | undefined;
                        defaultSendEnabled?: boolean | undefined;
                    } | undefined;
                }): _22.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _22.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _22.MsgUpdateParamsResponse;
                fromPartial(_: {}): _22.MsgUpdateParamsResponse;
            };
            MsgSetSendEnabled: {
                encode(message: _22.MsgSetSendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _22.MsgSetSendEnabled;
                fromPartial(object: {
                    authority?: string | undefined;
                    sendEnabled?: {
                        denom?: string | undefined;
                        enabled?: boolean | undefined;
                    }[] | undefined;
                    useDefaultFor?: string[] | undefined;
                }): _22.MsgSetSendEnabled;
            };
            MsgSetSendEnabledResponse: {
                encode(_: _22.MsgSetSendEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _22.MsgSetSendEnabledResponse;
                fromPartial(_: {}): _22.MsgSetSendEnabledResponse;
            };
            QueryBalanceRequest: {
                encode(message: _21.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QueryBalanceRequest;
                fromPartial(object: {
                    address?: string | undefined;
                    denom?: string | undefined;
                }): _21.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _21.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QueryBalanceResponse;
                fromPartial(object: {
                    balance?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }): _21.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _21.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QueryAllBalancesRequest;
                fromPartial(object: {
                    address?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                    resolveDenom?: boolean | undefined;
                }): _21.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _21.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QueryAllBalancesResponse;
                fromPartial(object: {
                    balances?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _21.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _21.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QuerySpendableBalancesRequest;
                fromPartial(object: {
                    address?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _21.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _21.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QuerySpendableBalancesResponse;
                fromPartial(object: {
                    balances?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _21.QuerySpendableBalancesResponse;
            };
            QuerySpendableBalanceByDenomRequest: {
                encode(message: _21.QuerySpendableBalanceByDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: {
                    address?: string | undefined;
                    denom?: string | undefined;
                }): _21.QuerySpendableBalanceByDenomRequest;
            };
            QuerySpendableBalanceByDenomResponse: {
                encode(message: _21.QuerySpendableBalanceByDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: {
                    balance?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }): _21.QuerySpendableBalanceByDenomResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _21.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QueryTotalSupplyRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _21.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _21.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QueryTotalSupplyResponse;
                fromPartial(object: {
                    supply?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _21.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _21.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QuerySupplyOfRequest;
                fromPartial(object: {
                    denom?: string | undefined;
                }): _21.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _21.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QuerySupplyOfResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }): _21.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _21.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QueryParamsRequest;
                fromPartial(_: {}): _21.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _21.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string | undefined;
                            enabled?: boolean | undefined;
                        }[] | undefined;
                        defaultSendEnabled?: boolean | undefined;
                    } | undefined;
                }): _21.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _21.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QueryDenomsMetadataRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _21.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _21.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QueryDenomsMetadataResponse;
                fromPartial(object: {
                    metadatas?: {
                        description?: string | undefined;
                        denomUnits?: {
                            denom?: string | undefined;
                            exponent?: number | undefined;
                            aliases?: string[] | undefined;
                        }[] | undefined;
                        base?: string | undefined;
                        display?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        uri?: string | undefined;
                        uriHash?: string | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _21.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _21.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QueryDenomMetadataRequest;
                fromPartial(object: {
                    denom?: string | undefined;
                }): _21.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _21.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QueryDenomMetadataResponse;
                fromPartial(object: {
                    metadata?: {
                        description?: string | undefined;
                        denomUnits?: {
                            denom?: string | undefined;
                            exponent?: number | undefined;
                            aliases?: string[] | undefined;
                        }[] | undefined;
                        base?: string | undefined;
                        display?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        uri?: string | undefined;
                        uriHash?: string | undefined;
                    } | undefined;
                }): _21.QueryDenomMetadataResponse;
            };
            QueryDenomMetadataByQueryStringRequest: {
                encode(message: _21.QueryDenomMetadataByQueryStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QueryDenomMetadataByQueryStringRequest;
                fromPartial(object: {
                    denom?: string | undefined;
                }): _21.QueryDenomMetadataByQueryStringRequest;
            };
            QueryDenomMetadataByQueryStringResponse: {
                encode(message: _21.QueryDenomMetadataByQueryStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QueryDenomMetadataByQueryStringResponse;
                fromPartial(object: {
                    metadata?: {
                        description?: string | undefined;
                        denomUnits?: {
                            denom?: string | undefined;
                            exponent?: number | undefined;
                            aliases?: string[] | undefined;
                        }[] | undefined;
                        base?: string | undefined;
                        display?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        uri?: string | undefined;
                        uriHash?: string | undefined;
                    } | undefined;
                }): _21.QueryDenomMetadataByQueryStringResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _21.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QueryDenomOwnersRequest;
                fromPartial(object: {
                    denom?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _21.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _21.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.DenomOwner;
                fromPartial(object: {
                    address?: string | undefined;
                    balance?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }): _21.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _21.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QueryDenomOwnersResponse;
                fromPartial(object: {
                    denomOwners?: {
                        address?: string | undefined;
                        balance?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _21.QueryDenomOwnersResponse;
            };
            QuerySendEnabledRequest: {
                encode(message: _21.QuerySendEnabledRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QuerySendEnabledRequest;
                fromPartial(object: {
                    denoms?: string[] | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _21.QuerySendEnabledRequest;
            };
            QuerySendEnabledResponse: {
                encode(message: _21.QuerySendEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.QuerySendEnabledResponse;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string | undefined;
                        enabled?: boolean | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _21.QuerySendEnabledResponse;
            };
            GenesisState: {
                encode(message: _20.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.GenesisState;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string | undefined;
                            enabled?: boolean | undefined;
                        }[] | undefined;
                        defaultSendEnabled?: boolean | undefined;
                    } | undefined;
                    balances?: {
                        address?: string | undefined;
                        coins?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    supply?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    denomMetadata?: {
                        description?: string | undefined;
                        denomUnits?: {
                            denom?: string | undefined;
                            exponent?: number | undefined;
                            aliases?: string[] | undefined;
                        }[] | undefined;
                        base?: string | undefined;
                        display?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        uri?: string | undefined;
                        uriHash?: string | undefined;
                    }[] | undefined;
                    sendEnabled?: {
                        denom?: string | undefined;
                        enabled?: boolean | undefined;
                    }[] | undefined;
                }): _20.GenesisState;
            };
            Balance: {
                encode(message: _20.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.Balance;
                fromPartial(object: {
                    address?: string | undefined;
                    coins?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _20.Balance;
            };
            Params: {
                encode(message: _19.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.Params;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string | undefined;
                        enabled?: boolean | undefined;
                    }[] | undefined;
                    defaultSendEnabled?: boolean | undefined;
                }): _19.Params;
            };
            SendEnabled: {
                encode(message: _19.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.SendEnabled;
                fromPartial(object: {
                    denom?: string | undefined;
                    enabled?: boolean | undefined;
                }): _19.SendEnabled;
            };
            Input: {
                encode(message: _19.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.Input;
                fromPartial(object: {
                    address?: string | undefined;
                    coins?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _19.Input;
            };
            Output: {
                encode(message: _19.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.Output;
                fromPartial(object: {
                    address?: string | undefined;
                    coins?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _19.Output;
            };
            Supply: {
                encode(message: _19.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.Supply;
                fromPartial(object: {
                    total?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _19.Supply;
            };
            DenomUnit: {
                encode(message: _19.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.DenomUnit;
                fromPartial(object: {
                    denom?: string | undefined;
                    exponent?: number | undefined;
                    aliases?: string[] | undefined;
                }): _19.DenomUnit;
            };
            Metadata: {
                encode(message: _19.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.Metadata;
                fromPartial(object: {
                    description?: string | undefined;
                    denomUnits?: {
                        denom?: string | undefined;
                        exponent?: number | undefined;
                        aliases?: string[] | undefined;
                    }[] | undefined;
                    base?: string | undefined;
                    display?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    uri?: string | undefined;
                    uriHash?: string | undefined;
                }): _19.Metadata;
            };
            SendAuthorization: {
                encode(message: _18.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _18.SendAuthorization;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    allowList?: string[] | undefined;
                }): _18.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _23.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _23.TxResponse;
                    fromPartial(object: {
                        height?: string | number | import("long").Long | undefined;
                        txhash?: string | undefined;
                        codespace?: string | undefined;
                        code?: number | undefined;
                        data?: string | undefined;
                        rawLog?: string | undefined;
                        logs?: {
                            msgIndex?: number | undefined;
                            log?: string | undefined;
                            events?: {
                                type?: string | undefined;
                                attributes?: {
                                    key?: string | undefined;
                                    value?: string | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        info?: string | undefined;
                        gasWanted?: string | number | import("long").Long | undefined;
                        gasUsed?: string | number | import("long").Long | undefined;
                        tx?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        timestamp?: string | undefined;
                        events?: {
                            type?: string | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                                index?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    }): _23.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _23.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _23.ABCIMessageLog;
                    fromPartial(object: {
                        msgIndex?: number | undefined;
                        log?: string | undefined;
                        events?: {
                            type?: string | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    }): _23.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _23.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _23.StringEvent;
                    fromPartial(object: {
                        type?: string | undefined;
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] | undefined;
                    }): _23.StringEvent;
                };
                Attribute: {
                    encode(message: _23.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _23.Attribute;
                    fromPartial(object: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }): _23.Attribute;
                };
                GasInfo: {
                    encode(message: _23.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _23.GasInfo;
                    fromPartial(object: {
                        gasWanted?: string | number | import("long").Long | undefined;
                        gasUsed?: string | number | import("long").Long | undefined;
                    }): _23.GasInfo;
                };
                Result: {
                    encode(message: _23.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _23.Result;
                    fromPartial(object: {
                        data?: Uint8Array | undefined;
                        log?: string | undefined;
                        events?: {
                            type?: string | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                                index?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        msgResponses?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        }[] | undefined;
                    }): _23.Result;
                };
                SimulationResponse: {
                    encode(message: _23.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _23.SimulationResponse;
                    fromPartial(object: {
                        gasInfo?: {
                            gasWanted?: string | number | import("long").Long | undefined;
                            gasUsed?: string | number | import("long").Long | undefined;
                        } | undefined;
                        result?: {
                            data?: Uint8Array | undefined;
                            log?: string | undefined;
                            events?: {
                                type?: string | undefined;
                                attributes?: {
                                    key?: string | undefined;
                                    value?: string | undefined;
                                    index?: boolean | undefined;
                                }[] | undefined;
                            }[] | undefined;
                            msgResponses?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    }): _23.SimulationResponse;
                };
                MsgData: {
                    encode(message: _23.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _23.MsgData;
                    fromPartial(object: {
                        msgType?: string | undefined;
                        data?: Uint8Array | undefined;
                    }): _23.MsgData;
                };
                TxMsgData: {
                    encode(message: _23.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _23.TxMsgData;
                    fromPartial(object: {
                        data?: {
                            msgType?: string | undefined;
                            data?: Uint8Array | undefined;
                        }[] | undefined;
                        msgResponses?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        }[] | undefined;
                    }): _23.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _23.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _23.SearchTxsResult;
                    fromPartial(object: {
                        totalCount?: string | number | import("long").Long | undefined;
                        count?: string | number | import("long").Long | undefined;
                        pageNumber?: string | number | import("long").Long | undefined;
                        pageTotal?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        txs?: {
                            height?: string | number | import("long").Long | undefined;
                            txhash?: string | undefined;
                            codespace?: string | undefined;
                            code?: number | undefined;
                            data?: string | undefined;
                            rawLog?: string | undefined;
                            logs?: {
                                msgIndex?: number | undefined;
                                log?: string | undefined;
                                events?: {
                                    type?: string | undefined;
                                    attributes?: {
                                        key?: string | undefined;
                                        value?: string | undefined;
                                    }[] | undefined;
                                }[] | undefined;
                            }[] | undefined;
                            info?: string | undefined;
                            gasWanted?: string | number | import("long").Long | undefined;
                            gasUsed?: string | number | import("long").Long | undefined;
                            tx?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            } | undefined;
                            timestamp?: string | undefined;
                            events?: {
                                type?: string | undefined;
                                attributes?: {
                                    key?: string | undefined;
                                    value?: string | undefined;
                                    index?: boolean | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    }): _23.SearchTxsResult;
                };
                SearchBlocksResult: {
                    encode(message: _23.SearchBlocksResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _23.SearchBlocksResult;
                    fromPartial(object: {
                        totalCount?: string | number | import("long").Long | undefined;
                        count?: string | number | import("long").Long | undefined;
                        pageNumber?: string | number | import("long").Long | undefined;
                        pageTotal?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        blocks?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").Long | undefined;
                                    app?: string | number | import("long").Long | undefined;
                                } | undefined;
                                chainId?: string | undefined;
                                height?: string | number | import("long").Long | undefined;
                                time?: Date | undefined;
                                lastBlockId?: {
                                    hash?: Uint8Array | undefined;
                                    partSetHeader?: {
                                        total?: number | undefined;
                                        hash?: Uint8Array | undefined;
                                    } | undefined;
                                } | undefined;
                                lastCommitHash?: Uint8Array | undefined;
                                dataHash?: Uint8Array | undefined;
                                validatorsHash?: Uint8Array | undefined;
                                nextValidatorsHash?: Uint8Array | undefined;
                                consensusHash?: Uint8Array | undefined;
                                appHash?: Uint8Array | undefined;
                                lastResultsHash?: Uint8Array | undefined;
                                evidenceHash?: Uint8Array | undefined;
                                proposerAddress?: Uint8Array | undefined;
                            } | undefined;
                            data?: {
                                txs?: Uint8Array[] | undefined;
                            } | undefined;
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/types").SignedMsgType | undefined;
                                            height?: string | number | import("long").Long | undefined;
                                            round?: number | undefined;
                                            blockId?: {
                                                hash?: Uint8Array | undefined;
                                                partSetHeader?: {
                                                    total?: number | undefined;
                                                    hash?: Uint8Array | undefined;
                                                } | undefined;
                                            } | undefined;
                                            timestamp?: Date | undefined;
                                            validatorAddress?: Uint8Array | undefined;
                                            validatorIndex?: number | undefined;
                                            signature?: Uint8Array | undefined;
                                            extension?: Uint8Array | undefined;
                                            extensionSignature?: Uint8Array | undefined;
                                        } | undefined;
                                        voteB?: {
                                            type?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/types").SignedMsgType | undefined;
                                            height?: string | number | import("long").Long | undefined;
                                            round?: number | undefined;
                                            blockId?: {
                                                hash?: Uint8Array | undefined;
                                                partSetHeader?: {
                                                    total?: number | undefined;
                                                    hash?: Uint8Array | undefined;
                                                } | undefined;
                                            } | undefined;
                                            timestamp?: Date | undefined;
                                            validatorAddress?: Uint8Array | undefined;
                                            validatorIndex?: number | undefined;
                                            signature?: Uint8Array | undefined;
                                            extension?: Uint8Array | undefined;
                                            extensionSignature?: Uint8Array | undefined;
                                        } | undefined;
                                        totalVotingPower?: string | number | import("long").Long | undefined;
                                        validatorPower?: string | number | import("long").Long | undefined;
                                        timestamp?: Date | undefined;
                                    } | undefined;
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: string | number | import("long").Long | undefined;
                                                        app?: string | number | import("long").Long | undefined;
                                                    } | undefined;
                                                    chainId?: string | undefined;
                                                    height?: string | number | import("long").Long | undefined;
                                                    time?: Date | undefined;
                                                    lastBlockId?: {
                                                        hash?: Uint8Array | undefined;
                                                        partSetHeader?: {
                                                            total?: number | undefined;
                                                            hash?: Uint8Array | undefined;
                                                        } | undefined;
                                                    } | undefined;
                                                    lastCommitHash?: Uint8Array | undefined;
                                                    dataHash?: Uint8Array | undefined;
                                                    validatorsHash?: Uint8Array | undefined;
                                                    nextValidatorsHash?: Uint8Array | undefined;
                                                    consensusHash?: Uint8Array | undefined;
                                                    appHash?: Uint8Array | undefined;
                                                    lastResultsHash?: Uint8Array | undefined;
                                                    evidenceHash?: Uint8Array | undefined;
                                                    proposerAddress?: Uint8Array | undefined;
                                                } | undefined;
                                                commit?: {
                                                    height?: string | number | import("long").Long | undefined;
                                                    round?: number | undefined;
                                                    blockId?: {
                                                        hash?: Uint8Array | undefined;
                                                        partSetHeader?: {
                                                            total?: number | undefined;
                                                            hash?: Uint8Array | undefined;
                                                        } | undefined;
                                                    } | undefined;
                                                    signatures?: {
                                                        blockIdFlag?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/validator").BlockIDFlag | undefined;
                                                        validatorAddress?: Uint8Array | undefined;
                                                        timestamp?: Date | undefined;
                                                        signature?: Uint8Array | undefined;
                                                    }[] | undefined;
                                                } | undefined;
                                            } | undefined;
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array | undefined;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array | undefined;
                                                        secp256k1?: Uint8Array | undefined;
                                                    } | undefined;
                                                    votingPower?: string | number | import("long").Long | undefined;
                                                    proposerPriority?: string | number | import("long").Long | undefined;
                                                }[] | undefined;
                                                proposer?: {
                                                    address?: Uint8Array | undefined;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array | undefined;
                                                        secp256k1?: Uint8Array | undefined;
                                                    } | undefined;
                                                    votingPower?: string | number | import("long").Long | undefined;
                                                    proposerPriority?: string | number | import("long").Long | undefined;
                                                } | undefined;
                                                totalVotingPower?: string | number | import("long").Long | undefined;
                                            } | undefined;
                                        } | undefined;
                                        commonHeight?: string | number | import("long").Long | undefined;
                                        byzantineValidators?: {
                                            address?: Uint8Array | undefined;
                                            pubKey?: {
                                                ed25519?: Uint8Array | undefined;
                                                secp256k1?: Uint8Array | undefined;
                                            } | undefined;
                                            votingPower?: string | number | import("long").Long | undefined;
                                            proposerPriority?: string | number | import("long").Long | undefined;
                                        }[] | undefined;
                                        totalVotingPower?: string | number | import("long").Long | undefined;
                                        timestamp?: Date | undefined;
                                    } | undefined;
                                }[] | undefined;
                            } | undefined;
                            lastCommit?: {
                                height?: string | number | import("long").Long | undefined;
                                round?: number | undefined;
                                blockId?: {
                                    hash?: Uint8Array | undefined;
                                    partSetHeader?: {
                                        total?: number | undefined;
                                        hash?: Uint8Array | undefined;
                                    } | undefined;
                                } | undefined;
                                signatures?: {
                                    blockIdFlag?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/validator").BlockIDFlag | undefined;
                                    validatorAddress?: Uint8Array | undefined;
                                    timestamp?: Date | undefined;
                                    signature?: Uint8Array | undefined;
                                }[] | undefined;
                            } | undefined;
                        }[] | undefined;
                    }): _23.SearchBlocksResult;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _293.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _24.ConfigRequest | undefined): Promise<_24.ConfigResponse>;
                    status(request?: _24.StatusRequest | undefined): Promise<_24.StatusResponse>;
                };
                LCDQueryClient: typeof _272.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _24.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.ConfigRequest;
                    fromPartial(_: {}): _24.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _24.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.ConfigResponse;
                    fromPartial(object: {
                        minimumGasPrice?: string | undefined;
                        pruningKeepRecent?: string | undefined;
                        pruningInterval?: string | undefined;
                    }): _24.ConfigResponse;
                };
                StatusRequest: {
                    encode(_: _24.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.StatusRequest;
                    fromPartial(_: {}): _24.StatusRequest;
                };
                StatusResponse: {
                    encode(message: _24.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.StatusResponse;
                    fromPartial(object: {
                        earliestStoreHeight?: string | number | import("long").Long | undefined;
                        height?: string | number | import("long").Long | undefined;
                        timestamp?: Date | undefined;
                        appHash?: Uint8Array | undefined;
                        validatorHash?: Uint8Array | undefined;
                    }): _24.StatusResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _25.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _25.PageRequest;
                    fromPartial(object: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    }): _25.PageRequest;
                };
                PageResponse: {
                    encode(message: _25.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _25.PageResponse;
                    fromPartial(object: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    }): _25.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _26.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _26.ListAllInterfacesRequest;
                    fromPartial(_: {}): _26.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _26.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _26.ListAllInterfacesResponse;
                    fromPartial(object: {
                        interfaceNames?: string[] | undefined;
                    }): _26.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _26.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _26.ListImplementationsRequest;
                    fromPartial(object: {
                        interfaceName?: string | undefined;
                    }): _26.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _26.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _26.ListImplementationsResponse;
                    fromPartial(object: {
                        implementationMessageNames?: string[] | undefined;
                    }): _26.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _27.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.AppDescriptor;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string | undefined;
                                number?: number | undefined;
                                authnInfoProviderMethodFullname?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        chain?: {
                            id?: string | undefined;
                        } | undefined;
                        codec?: {
                            interfaces?: {
                                fullname?: string | undefined;
                                interfaceAcceptingMessages?: {
                                    fullname?: string | undefined;
                                    fieldDescriptorNames?: string[] | undefined;
                                }[] | undefined;
                                interfaceImplementers?: {
                                    fullname?: string | undefined;
                                    typeUrl?: string | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        configuration?: {
                            bech32AccountAddressPrefix?: string | undefined;
                        } | undefined;
                        queryServices?: {
                            queryServices?: {
                                fullname?: string | undefined;
                                isModule?: boolean | undefined;
                                methods?: {
                                    name?: string | undefined;
                                    fullQueryPath?: string | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        tx?: {
                            fullname?: string | undefined;
                            msgs?: {
                                msgTypeUrl?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                    }): _27.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _27.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.TxDescriptor;
                    fromPartial(object: {
                        fullname?: string | undefined;
                        msgs?: {
                            msgTypeUrl?: string | undefined;
                        }[] | undefined;
                    }): _27.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _27.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.AuthnDescriptor;
                    fromPartial(object: {
                        signModes?: {
                            name?: string | undefined;
                            number?: number | undefined;
                            authnInfoProviderMethodFullname?: string | undefined;
                        }[] | undefined;
                    }): _27.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _27.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.SigningModeDescriptor;
                    fromPartial(object: {
                        name?: string | undefined;
                        number?: number | undefined;
                        authnInfoProviderMethodFullname?: string | undefined;
                    }): _27.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _27.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.ChainDescriptor;
                    fromPartial(object: {
                        id?: string | undefined;
                    }): _27.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _27.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.CodecDescriptor;
                    fromPartial(object: {
                        interfaces?: {
                            fullname?: string | undefined;
                            interfaceAcceptingMessages?: {
                                fullname?: string | undefined;
                                fieldDescriptorNames?: string[] | undefined;
                            }[] | undefined;
                            interfaceImplementers?: {
                                fullname?: string | undefined;
                                typeUrl?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    }): _27.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _27.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.InterfaceDescriptor;
                    fromPartial(object: {
                        fullname?: string | undefined;
                        interfaceAcceptingMessages?: {
                            fullname?: string | undefined;
                            fieldDescriptorNames?: string[] | undefined;
                        }[] | undefined;
                        interfaceImplementers?: {
                            fullname?: string | undefined;
                            typeUrl?: string | undefined;
                        }[] | undefined;
                    }): _27.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _27.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.InterfaceImplementerDescriptor;
                    fromPartial(object: {
                        fullname?: string | undefined;
                        typeUrl?: string | undefined;
                    }): _27.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _27.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: {
                        fullname?: string | undefined;
                        fieldDescriptorNames?: string[] | undefined;
                    }): _27.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _27.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.ConfigurationDescriptor;
                    fromPartial(object: {
                        bech32AccountAddressPrefix?: string | undefined;
                    }): _27.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _27.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.MsgDescriptor;
                    fromPartial(object: {
                        msgTypeUrl?: string | undefined;
                    }): _27.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _27.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.GetAuthnDescriptorRequest;
                    fromPartial(_: {}): _27.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _27.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.GetAuthnDescriptorResponse;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string | undefined;
                                number?: number | undefined;
                                authnInfoProviderMethodFullname?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                    }): _27.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _27.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.GetChainDescriptorRequest;
                    fromPartial(_: {}): _27.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _27.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.GetChainDescriptorResponse;
                    fromPartial(object: {
                        chain?: {
                            id?: string | undefined;
                        } | undefined;
                    }): _27.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _27.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.GetCodecDescriptorRequest;
                    fromPartial(_: {}): _27.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _27.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.GetCodecDescriptorResponse;
                    fromPartial(object: {
                        codec?: {
                            interfaces?: {
                                fullname?: string | undefined;
                                interfaceAcceptingMessages?: {
                                    fullname?: string | undefined;
                                    fieldDescriptorNames?: string[] | undefined;
                                }[] | undefined;
                                interfaceImplementers?: {
                                    fullname?: string | undefined;
                                    typeUrl?: string | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        } | undefined;
                    }): _27.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _27.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.GetConfigurationDescriptorRequest;
                    fromPartial(_: {}): _27.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _27.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.GetConfigurationDescriptorResponse;
                    fromPartial(object: {
                        config?: {
                            bech32AccountAddressPrefix?: string | undefined;
                        } | undefined;
                    }): _27.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _27.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.GetQueryServicesDescriptorRequest;
                    fromPartial(_: {}): _27.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _27.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.GetQueryServicesDescriptorResponse;
                    fromPartial(object: {
                        queries?: {
                            queryServices?: {
                                fullname?: string | undefined;
                                isModule?: boolean | undefined;
                                methods?: {
                                    name?: string | undefined;
                                    fullQueryPath?: string | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        } | undefined;
                    }): _27.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _27.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.GetTxDescriptorRequest;
                    fromPartial(_: {}): _27.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _27.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.GetTxDescriptorResponse;
                    fromPartial(object: {
                        tx?: {
                            fullname?: string | undefined;
                            msgs?: {
                                msgTypeUrl?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                    }): _27.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _27.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.QueryServicesDescriptor;
                    fromPartial(object: {
                        queryServices?: {
                            fullname?: string | undefined;
                            isModule?: boolean | undefined;
                            methods?: {
                                name?: string | undefined;
                                fullQueryPath?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    }): _27.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _27.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.QueryServiceDescriptor;
                    fromPartial(object: {
                        fullname?: string | undefined;
                        isModule?: boolean | undefined;
                        methods?: {
                            name?: string | undefined;
                            fullQueryPath?: string | undefined;
                        }[] | undefined;
                    }): _27.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _27.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.QueryMethodDescriptor;
                    fromPartial(object: {
                        name?: string | undefined;
                        fullQueryPath?: string | undefined;
                    }): _27.QueryMethodDescriptor;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _294.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _28.GetNodeInfoRequest | undefined): Promise<_28.GetNodeInfoResponse>;
                    getSyncing(request?: _28.GetSyncingRequest | undefined): Promise<_28.GetSyncingResponse>;
                    getLatestBlock(request?: _28.GetLatestBlockRequest | undefined): Promise<_28.GetLatestBlockResponse>;
                    getBlockByHeight(request: _28.GetBlockByHeightRequest): Promise<_28.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _28.GetLatestValidatorSetRequest | undefined): Promise<_28.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _28.GetValidatorSetByHeightRequest): Promise<_28.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _28.ABCIQueryRequest): Promise<_28.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _273.LCDQueryClient;
                Block: {
                    encode(message: _29.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _29.Block;
                    fromPartial(object: {
                        header?: {
                            version?: {
                                block?: string | number | import("long").Long | undefined;
                                app?: string | number | import("long").Long | undefined;
                            } | undefined;
                            chainId?: string | undefined;
                            height?: string | number | import("long").Long | undefined;
                            time?: Date | undefined;
                            lastBlockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            lastCommitHash?: Uint8Array | undefined;
                            dataHash?: Uint8Array | undefined;
                            validatorsHash?: Uint8Array | undefined;
                            nextValidatorsHash?: Uint8Array | undefined;
                            consensusHash?: Uint8Array | undefined;
                            appHash?: Uint8Array | undefined;
                            lastResultsHash?: Uint8Array | undefined;
                            evidenceHash?: Uint8Array | undefined;
                            proposerAddress?: string | undefined;
                        } | undefined;
                        data?: {
                            txs?: Uint8Array[] | undefined;
                        } | undefined;
                        evidence?: {
                            evidence?: {
                                duplicateVoteEvidence?: {
                                    voteA?: {
                                        type?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/types").SignedMsgType | undefined;
                                        height?: string | number | import("long").Long | undefined;
                                        round?: number | undefined;
                                        blockId?: {
                                            hash?: Uint8Array | undefined;
                                            partSetHeader?: {
                                                total?: number | undefined;
                                                hash?: Uint8Array | undefined;
                                            } | undefined;
                                        } | undefined;
                                        timestamp?: Date | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        validatorIndex?: number | undefined;
                                        signature?: Uint8Array | undefined;
                                        extension?: Uint8Array | undefined;
                                        extensionSignature?: Uint8Array | undefined;
                                    } | undefined;
                                    voteB?: {
                                        type?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/types").SignedMsgType | undefined;
                                        height?: string | number | import("long").Long | undefined;
                                        round?: number | undefined;
                                        blockId?: {
                                            hash?: Uint8Array | undefined;
                                            partSetHeader?: {
                                                total?: number | undefined;
                                                hash?: Uint8Array | undefined;
                                            } | undefined;
                                        } | undefined;
                                        timestamp?: Date | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        validatorIndex?: number | undefined;
                                        signature?: Uint8Array | undefined;
                                        extension?: Uint8Array | undefined;
                                        extensionSignature?: Uint8Array | undefined;
                                    } | undefined;
                                    totalVotingPower?: string | number | import("long").Long | undefined;
                                    validatorPower?: string | number | import("long").Long | undefined;
                                    timestamp?: Date | undefined;
                                } | undefined;
                                lightClientAttackEvidence?: {
                                    conflictingBlock?: {
                                        signedHeader?: {
                                            header?: {
                                                version?: {
                                                    block?: string | number | import("long").Long | undefined;
                                                    app?: string | number | import("long").Long | undefined;
                                                } | undefined;
                                                chainId?: string | undefined;
                                                height?: string | number | import("long").Long | undefined;
                                                time?: Date | undefined;
                                                lastBlockId?: {
                                                    hash?: Uint8Array | undefined;
                                                    partSetHeader?: {
                                                        total?: number | undefined;
                                                        hash?: Uint8Array | undefined;
                                                    } | undefined;
                                                } | undefined;
                                                lastCommitHash?: Uint8Array | undefined;
                                                dataHash?: Uint8Array | undefined;
                                                validatorsHash?: Uint8Array | undefined;
                                                nextValidatorsHash?: Uint8Array | undefined;
                                                consensusHash?: Uint8Array | undefined;
                                                appHash?: Uint8Array | undefined;
                                                lastResultsHash?: Uint8Array | undefined;
                                                evidenceHash?: Uint8Array | undefined;
                                                proposerAddress?: Uint8Array | undefined;
                                            } | undefined;
                                            commit?: {
                                                height?: string | number | import("long").Long | undefined;
                                                round?: number | undefined;
                                                blockId?: {
                                                    hash?: Uint8Array | undefined;
                                                    partSetHeader?: {
                                                        total?: number | undefined;
                                                        hash?: Uint8Array | undefined;
                                                    } | undefined;
                                                } | undefined;
                                                signatures?: {
                                                    blockIdFlag?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/validator").BlockIDFlag | undefined;
                                                    validatorAddress?: Uint8Array | undefined;
                                                    timestamp?: Date | undefined;
                                                    signature?: Uint8Array | undefined;
                                                }[] | undefined;
                                            } | undefined;
                                        } | undefined;
                                        validatorSet?: {
                                            validators?: {
                                                address?: Uint8Array | undefined;
                                                pubKey?: {
                                                    ed25519?: Uint8Array | undefined;
                                                    secp256k1?: Uint8Array | undefined;
                                                } | undefined;
                                                votingPower?: string | number | import("long").Long | undefined;
                                                proposerPriority?: string | number | import("long").Long | undefined;
                                            }[] | undefined;
                                            proposer?: {
                                                address?: Uint8Array | undefined;
                                                pubKey?: {
                                                    ed25519?: Uint8Array | undefined;
                                                    secp256k1?: Uint8Array | undefined;
                                                } | undefined;
                                                votingPower?: string | number | import("long").Long | undefined;
                                                proposerPriority?: string | number | import("long").Long | undefined;
                                            } | undefined;
                                            totalVotingPower?: string | number | import("long").Long | undefined;
                                        } | undefined;
                                    } | undefined;
                                    commonHeight?: string | number | import("long").Long | undefined;
                                    byzantineValidators?: {
                                        address?: Uint8Array | undefined;
                                        pubKey?: {
                                            ed25519?: Uint8Array | undefined;
                                            secp256k1?: Uint8Array | undefined;
                                        } | undefined;
                                        votingPower?: string | number | import("long").Long | undefined;
                                        proposerPriority?: string | number | import("long").Long | undefined;
                                    }[] | undefined;
                                    totalVotingPower?: string | number | import("long").Long | undefined;
                                    timestamp?: Date | undefined;
                                } | undefined;
                            }[] | undefined;
                        } | undefined;
                        lastCommit?: {
                            height?: string | number | import("long").Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            signatures?: {
                                blockIdFlag?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/validator").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: Date | undefined;
                                signature?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    }): _29.Block;
                };
                Header: {
                    encode(message: _29.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _29.Header;
                    fromPartial(object: {
                        version?: {
                            block?: string | number | import("long").Long | undefined;
                            app?: string | number | import("long").Long | undefined;
                        } | undefined;
                        chainId?: string | undefined;
                        height?: string | number | import("long").Long | undefined;
                        time?: Date | undefined;
                        lastBlockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        lastCommitHash?: Uint8Array | undefined;
                        dataHash?: Uint8Array | undefined;
                        validatorsHash?: Uint8Array | undefined;
                        nextValidatorsHash?: Uint8Array | undefined;
                        consensusHash?: Uint8Array | undefined;
                        appHash?: Uint8Array | undefined;
                        lastResultsHash?: Uint8Array | undefined;
                        evidenceHash?: Uint8Array | undefined;
                        proposerAddress?: string | undefined;
                    }): _29.Header;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _28.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetValidatorSetByHeightRequest;
                    fromPartial(object: {
                        height?: string | number | import("long").Long | undefined;
                        pagination?: {
                            key?: Uint8Array | undefined;
                            offset?: string | number | import("long").Long | undefined;
                            limit?: string | number | import("long").Long | undefined;
                            countTotal?: boolean | undefined;
                            reverse?: boolean | undefined;
                        } | undefined;
                    }): _28.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _28.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetValidatorSetByHeightResponse;
                    fromPartial(object: {
                        blockHeight?: string | number | import("long").Long | undefined;
                        validators?: {
                            address?: string | undefined;
                            pubKey?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | import("long").Long | undefined;
                            proposerPriority?: string | number | import("long").Long | undefined;
                        }[] | undefined;
                        pagination?: {
                            nextKey?: Uint8Array | undefined;
                            total?: string | number | import("long").Long | undefined;
                        } | undefined;
                    }): _28.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _28.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetLatestValidatorSetRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array | undefined;
                            offset?: string | number | import("long").Long | undefined;
                            limit?: string | number | import("long").Long | undefined;
                            countTotal?: boolean | undefined;
                            reverse?: boolean | undefined;
                        } | undefined;
                    }): _28.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _28.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetLatestValidatorSetResponse;
                    fromPartial(object: {
                        blockHeight?: string | number | import("long").Long | undefined;
                        validators?: {
                            address?: string | undefined;
                            pubKey?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | import("long").Long | undefined;
                            proposerPriority?: string | number | import("long").Long | undefined;
                        }[] | undefined;
                        pagination?: {
                            nextKey?: Uint8Array | undefined;
                            total?: string | number | import("long").Long | undefined;
                        } | undefined;
                    }): _28.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _28.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.Validator;
                    fromPartial(object: {
                        address?: string | undefined;
                        pubKey?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | import("long").Long | undefined;
                        proposerPriority?: string | number | import("long").Long | undefined;
                    }): _28.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _28.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetBlockByHeightRequest;
                    fromPartial(object: {
                        height?: string | number | import("long").Long | undefined;
                    }): _28.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _28.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetBlockByHeightResponse;
                    fromPartial(object: {
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        block?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").Long | undefined;
                                    app?: string | number | import("long").Long | undefined;
                                } | undefined;
                                chainId?: string | undefined;
                                height?: string | number | import("long").Long | undefined;
                                time?: Date | undefined;
                                lastBlockId?: {
                                    hash?: Uint8Array | undefined;
                                    partSetHeader?: {
                                        total?: number | undefined;
                                        hash?: Uint8Array | undefined;
                                    } | undefined;
                                } | undefined;
                                lastCommitHash?: Uint8Array | undefined;
                                dataHash?: Uint8Array | undefined;
                                validatorsHash?: Uint8Array | undefined;
                                nextValidatorsHash?: Uint8Array | undefined;
                                consensusHash?: Uint8Array | undefined;
                                appHash?: Uint8Array | undefined;
                                lastResultsHash?: Uint8Array | undefined;
                                evidenceHash?: Uint8Array | undefined;
                                proposerAddress?: Uint8Array | undefined;
                            } | undefined;
                            data?: {
                                txs?: Uint8Array[] | undefined;
                            } | undefined;
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/types").SignedMsgType | undefined;
                                            height?: string | number | import("long").Long | undefined;
                                            round?: number | undefined;
                                            blockId?: {
                                                hash?: Uint8Array | undefined;
                                                partSetHeader?: {
                                                    total?: number | undefined;
                                                    hash?: Uint8Array | undefined;
                                                } | undefined;
                                            } | undefined;
                                            timestamp?: Date | undefined;
                                            validatorAddress?: Uint8Array | undefined;
                                            validatorIndex?: number | undefined;
                                            signature?: Uint8Array | undefined;
                                            extension?: Uint8Array | undefined;
                                            extensionSignature?: Uint8Array | undefined;
                                        } | undefined;
                                        voteB?: {
                                            type?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/types").SignedMsgType | undefined;
                                            height?: string | number | import("long").Long | undefined;
                                            round?: number | undefined;
                                            blockId?: {
                                                hash?: Uint8Array | undefined;
                                                partSetHeader?: {
                                                    total?: number | undefined;
                                                    hash?: Uint8Array | undefined;
                                                } | undefined;
                                            } | undefined;
                                            timestamp?: Date | undefined;
                                            validatorAddress?: Uint8Array | undefined;
                                            validatorIndex?: number | undefined;
                                            signature?: Uint8Array | undefined;
                                            extension?: Uint8Array | undefined;
                                            extensionSignature?: Uint8Array | undefined;
                                        } | undefined;
                                        totalVotingPower?: string | number | import("long").Long | undefined;
                                        validatorPower?: string | number | import("long").Long | undefined;
                                        timestamp?: Date | undefined;
                                    } | undefined;
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: string | number | import("long").Long | undefined;
                                                        app?: string | number | import("long").Long | undefined;
                                                    } | undefined;
                                                    chainId?: string | undefined;
                                                    height?: string | number | import("long").Long | undefined;
                                                    time?: Date | undefined;
                                                    lastBlockId?: {
                                                        hash?: Uint8Array | undefined;
                                                        partSetHeader?: {
                                                            total?: number | undefined;
                                                            hash?: Uint8Array | undefined;
                                                        } | undefined;
                                                    } | undefined;
                                                    lastCommitHash?: Uint8Array | undefined;
                                                    dataHash?: Uint8Array | undefined;
                                                    validatorsHash?: Uint8Array | undefined;
                                                    nextValidatorsHash?: Uint8Array | undefined;
                                                    consensusHash?: Uint8Array | undefined;
                                                    appHash?: Uint8Array | undefined;
                                                    lastResultsHash?: Uint8Array | undefined;
                                                    evidenceHash?: Uint8Array | undefined;
                                                    proposerAddress?: Uint8Array | undefined;
                                                } | undefined;
                                                commit?: {
                                                    height?: string | number | import("long").Long | undefined;
                                                    round?: number | undefined;
                                                    blockId?: {
                                                        hash?: Uint8Array | undefined;
                                                        partSetHeader?: {
                                                            total?: number | undefined;
                                                            hash?: Uint8Array | undefined;
                                                        } | undefined;
                                                    } | undefined;
                                                    signatures?: {
                                                        blockIdFlag?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/validator").BlockIDFlag | undefined;
                                                        validatorAddress?: Uint8Array | undefined;
                                                        timestamp?: Date | undefined;
                                                        signature?: Uint8Array | undefined;
                                                    }[] | undefined;
                                                } | undefined;
                                            } | undefined;
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array | undefined;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array | undefined;
                                                        secp256k1?: Uint8Array | undefined;
                                                    } | undefined;
                                                    votingPower?: string | number | import("long").Long | undefined;
                                                    proposerPriority?: string | number | import("long").Long | undefined;
                                                }[] | undefined;
                                                proposer?: {
                                                    address?: Uint8Array | undefined;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array | undefined;
                                                        secp256k1?: Uint8Array | undefined;
                                                    } | undefined;
                                                    votingPower?: string | number | import("long").Long | undefined;
                                                    proposerPriority?: string | number | import("long").Long | undefined;
                                                } | undefined;
                                                totalVotingPower?: string | number | import("long").Long | undefined;
                                            } | undefined;
                                        } | undefined;
                                        commonHeight?: string | number | import("long").Long | undefined;
                                        byzantineValidators?: {
                                            address?: Uint8Array | undefined;
                                            pubKey?: {
                                                ed25519?: Uint8Array | undefined;
                                                secp256k1?: Uint8Array | undefined;
                                            } | undefined;
                                            votingPower?: string | number | import("long").Long | undefined;
                                            proposerPriority?: string | number | import("long").Long | undefined;
                                        }[] | undefined;
                                        totalVotingPower?: string | number | import("long").Long | undefined;
                                        timestamp?: Date | undefined;
                                    } | undefined;
                                }[] | undefined;
                            } | undefined;
                            lastCommit?: {
                                height?: string | number | import("long").Long | undefined;
                                round?: number | undefined;
                                blockId?: {
                                    hash?: Uint8Array | undefined;
                                    partSetHeader?: {
                                        total?: number | undefined;
                                        hash?: Uint8Array | undefined;
                                    } | undefined;
                                } | undefined;
                                signatures?: {
                                    blockIdFlag?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/validator").BlockIDFlag | undefined;
                                    validatorAddress?: Uint8Array | undefined;
                                    timestamp?: Date | undefined;
                                    signature?: Uint8Array | undefined;
                                }[] | undefined;
                            } | undefined;
                        } | undefined;
                        sdkBlock?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").Long | undefined;
                                    app?: string | number | import("long").Long | undefined;
                                } | undefined;
                                chainId?: string | undefined;
                                height?: string | number | import("long").Long | undefined;
                                time?: Date | undefined;
                                lastBlockId?: {
                                    hash?: Uint8Array | undefined;
                                    partSetHeader?: {
                                        total?: number | undefined;
                                        hash?: Uint8Array | undefined;
                                    } | undefined;
                                } | undefined;
                                lastCommitHash?: Uint8Array | undefined;
                                dataHash?: Uint8Array | undefined;
                                validatorsHash?: Uint8Array | undefined;
                                nextValidatorsHash?: Uint8Array | undefined;
                                consensusHash?: Uint8Array | undefined;
                                appHash?: Uint8Array | undefined;
                                lastResultsHash?: Uint8Array | undefined;
                                evidenceHash?: Uint8Array | undefined;
                                proposerAddress?: string | undefined;
                            } | undefined;
                            data?: {
                                txs?: Uint8Array[] | undefined;
                            } | undefined;
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/types").SignedMsgType | undefined;
                                            height?: string | number | import("long").Long | undefined;
                                            round?: number | undefined;
                                            blockId?: {
                                                hash?: Uint8Array | undefined;
                                                partSetHeader?: {
                                                    total?: number | undefined;
                                                    hash?: Uint8Array | undefined;
                                                } | undefined;
                                            } | undefined;
                                            timestamp?: Date | undefined;
                                            validatorAddress?: Uint8Array | undefined;
                                            validatorIndex?: number | undefined;
                                            signature?: Uint8Array | undefined;
                                            extension?: Uint8Array | undefined;
                                            extensionSignature?: Uint8Array | undefined;
                                        } | undefined;
                                        voteB?: {
                                            type?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/types").SignedMsgType | undefined;
                                            height?: string | number | import("long").Long | undefined;
                                            round?: number | undefined;
                                            blockId?: {
                                                hash?: Uint8Array | undefined;
                                                partSetHeader?: {
                                                    total?: number | undefined;
                                                    hash?: Uint8Array | undefined;
                                                } | undefined;
                                            } | undefined;
                                            timestamp?: Date | undefined;
                                            validatorAddress?: Uint8Array | undefined;
                                            validatorIndex?: number | undefined;
                                            signature?: Uint8Array | undefined;
                                            extension?: Uint8Array | undefined;
                                            extensionSignature?: Uint8Array | undefined;
                                        } | undefined;
                                        totalVotingPower?: string | number | import("long").Long | undefined;
                                        validatorPower?: string | number | import("long").Long | undefined;
                                        timestamp?: Date | undefined;
                                    } | undefined;
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: string | number | import("long").Long | undefined;
                                                        app?: string | number | import("long").Long | undefined;
                                                    } | undefined;
                                                    chainId?: string | undefined;
                                                    height?: string | number | import("long").Long | undefined;
                                                    time?: Date | undefined;
                                                    lastBlockId?: {
                                                        hash?: Uint8Array | undefined;
                                                        partSetHeader?: {
                                                            total?: number | undefined;
                                                            hash?: Uint8Array | undefined;
                                                        } | undefined;
                                                    } | undefined;
                                                    lastCommitHash?: Uint8Array | undefined;
                                                    dataHash?: Uint8Array | undefined;
                                                    validatorsHash?: Uint8Array | undefined;
                                                    nextValidatorsHash?: Uint8Array | undefined;
                                                    consensusHash?: Uint8Array | undefined;
                                                    appHash?: Uint8Array | undefined;
                                                    lastResultsHash?: Uint8Array | undefined;
                                                    evidenceHash?: Uint8Array | undefined;
                                                    proposerAddress?: Uint8Array | undefined;
                                                } | undefined;
                                                commit?: {
                                                    height?: string | number | import("long").Long | undefined;
                                                    round?: number | undefined;
                                                    blockId?: {
                                                        hash?: Uint8Array | undefined;
                                                        partSetHeader?: {
                                                            total?: number | undefined;
                                                            hash?: Uint8Array | undefined;
                                                        } | undefined;
                                                    } | undefined;
                                                    signatures?: {
                                                        blockIdFlag?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/validator").BlockIDFlag | undefined;
                                                        validatorAddress?: Uint8Array | undefined;
                                                        timestamp?: Date | undefined;
                                                        signature?: Uint8Array | undefined;
                                                    }[] | undefined;
                                                } | undefined;
                                            } | undefined;
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array | undefined;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array | undefined;
                                                        secp256k1?: Uint8Array | undefined;
                                                    } | undefined;
                                                    votingPower?: string | number | import("long").Long | undefined;
                                                    proposerPriority?: string | number | import("long").Long | undefined;
                                                }[] | undefined;
                                                proposer?: {
                                                    address?: Uint8Array | undefined;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array | undefined;
                                                        secp256k1?: Uint8Array | undefined;
                                                    } | undefined;
                                                    votingPower?: string | number | import("long").Long | undefined;
                                                    proposerPriority?: string | number | import("long").Long | undefined;
                                                } | undefined;
                                                totalVotingPower?: string | number | import("long").Long | undefined;
                                            } | undefined;
                                        } | undefined;
                                        commonHeight?: string | number | import("long").Long | undefined;
                                        byzantineValidators?: {
                                            address?: Uint8Array | undefined;
                                            pubKey?: {
                                                ed25519?: Uint8Array | undefined;
                                                secp256k1?: Uint8Array | undefined;
                                            } | undefined;
                                            votingPower?: string | number | import("long").Long | undefined;
                                            proposerPriority?: string | number | import("long").Long | undefined;
                                        }[] | undefined;
                                        totalVotingPower?: string | number | import("long").Long | undefined;
                                        timestamp?: Date | undefined;
                                    } | undefined;
                                }[] | undefined;
                            } | undefined;
                            lastCommit?: {
                                height?: string | number | import("long").Long | undefined;
                                round?: number | undefined;
                                blockId?: {
                                    hash?: Uint8Array | undefined;
                                    partSetHeader?: {
                                        total?: number | undefined;
                                        hash?: Uint8Array | undefined;
                                    } | undefined;
                                } | undefined;
                                signatures?: {
                                    blockIdFlag?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/validator").BlockIDFlag | undefined;
                                    validatorAddress?: Uint8Array | undefined;
                                    timestamp?: Date | undefined;
                                    signature?: Uint8Array | undefined;
                                }[] | undefined;
                            } | undefined;
                        } | undefined;
                    }): _28.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _28.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetLatestBlockRequest;
                    fromPartial(_: {}): _28.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _28.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetLatestBlockResponse;
                    fromPartial(object: {
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        block?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").Long | undefined;
                                    app?: string | number | import("long").Long | undefined;
                                } | undefined;
                                chainId?: string | undefined;
                                height?: string | number | import("long").Long | undefined;
                                time?: Date | undefined;
                                lastBlockId?: {
                                    hash?: Uint8Array | undefined;
                                    partSetHeader?: {
                                        total?: number | undefined;
                                        hash?: Uint8Array | undefined;
                                    } | undefined;
                                } | undefined;
                                lastCommitHash?: Uint8Array | undefined;
                                dataHash?: Uint8Array | undefined;
                                validatorsHash?: Uint8Array | undefined;
                                nextValidatorsHash?: Uint8Array | undefined;
                                consensusHash?: Uint8Array | undefined;
                                appHash?: Uint8Array | undefined;
                                lastResultsHash?: Uint8Array | undefined;
                                evidenceHash?: Uint8Array | undefined;
                                proposerAddress?: Uint8Array | undefined;
                            } | undefined;
                            data?: {
                                txs?: Uint8Array[] | undefined;
                            } | undefined;
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/types").SignedMsgType | undefined;
                                            height?: string | number | import("long").Long | undefined;
                                            round?: number | undefined;
                                            blockId?: {
                                                hash?: Uint8Array | undefined;
                                                partSetHeader?: {
                                                    total?: number | undefined;
                                                    hash?: Uint8Array | undefined;
                                                } | undefined;
                                            } | undefined;
                                            timestamp?: Date | undefined;
                                            validatorAddress?: Uint8Array | undefined;
                                            validatorIndex?: number | undefined;
                                            signature?: Uint8Array | undefined;
                                            extension?: Uint8Array | undefined;
                                            extensionSignature?: Uint8Array | undefined;
                                        } | undefined;
                                        voteB?: {
                                            type?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/types").SignedMsgType | undefined;
                                            height?: string | number | import("long").Long | undefined;
                                            round?: number | undefined;
                                            blockId?: {
                                                hash?: Uint8Array | undefined;
                                                partSetHeader?: {
                                                    total?: number | undefined;
                                                    hash?: Uint8Array | undefined;
                                                } | undefined;
                                            } | undefined;
                                            timestamp?: Date | undefined;
                                            validatorAddress?: Uint8Array | undefined;
                                            validatorIndex?: number | undefined;
                                            signature?: Uint8Array | undefined;
                                            extension?: Uint8Array | undefined;
                                            extensionSignature?: Uint8Array | undefined;
                                        } | undefined;
                                        totalVotingPower?: string | number | import("long").Long | undefined;
                                        validatorPower?: string | number | import("long").Long | undefined;
                                        timestamp?: Date | undefined;
                                    } | undefined;
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: string | number | import("long").Long | undefined;
                                                        app?: string | number | import("long").Long | undefined;
                                                    } | undefined;
                                                    chainId?: string | undefined;
                                                    height?: string | number | import("long").Long | undefined;
                                                    time?: Date | undefined;
                                                    lastBlockId?: {
                                                        hash?: Uint8Array | undefined;
                                                        partSetHeader?: {
                                                            total?: number | undefined;
                                                            hash?: Uint8Array | undefined;
                                                        } | undefined;
                                                    } | undefined;
                                                    lastCommitHash?: Uint8Array | undefined;
                                                    dataHash?: Uint8Array | undefined;
                                                    validatorsHash?: Uint8Array | undefined;
                                                    nextValidatorsHash?: Uint8Array | undefined;
                                                    consensusHash?: Uint8Array | undefined;
                                                    appHash?: Uint8Array | undefined;
                                                    lastResultsHash?: Uint8Array | undefined;
                                                    evidenceHash?: Uint8Array | undefined;
                                                    proposerAddress?: Uint8Array | undefined;
                                                } | undefined;
                                                commit?: {
                                                    height?: string | number | import("long").Long | undefined;
                                                    round?: number | undefined;
                                                    blockId?: {
                                                        hash?: Uint8Array | undefined;
                                                        partSetHeader?: {
                                                            total?: number | undefined;
                                                            hash?: Uint8Array | undefined;
                                                        } | undefined;
                                                    } | undefined;
                                                    signatures?: {
                                                        blockIdFlag?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/validator").BlockIDFlag | undefined;
                                                        validatorAddress?: Uint8Array | undefined;
                                                        timestamp?: Date | undefined;
                                                        signature?: Uint8Array | undefined;
                                                    }[] | undefined;
                                                } | undefined;
                                            } | undefined;
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array | undefined;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array | undefined;
                                                        secp256k1?: Uint8Array | undefined;
                                                    } | undefined;
                                                    votingPower?: string | number | import("long").Long | undefined;
                                                    proposerPriority?: string | number | import("long").Long | undefined;
                                                }[] | undefined;
                                                proposer?: {
                                                    address?: Uint8Array | undefined;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array | undefined;
                                                        secp256k1?: Uint8Array | undefined;
                                                    } | undefined;
                                                    votingPower?: string | number | import("long").Long | undefined;
                                                    proposerPriority?: string | number | import("long").Long | undefined;
                                                } | undefined;
                                                totalVotingPower?: string | number | import("long").Long | undefined;
                                            } | undefined;
                                        } | undefined;
                                        commonHeight?: string | number | import("long").Long | undefined;
                                        byzantineValidators?: {
                                            address?: Uint8Array | undefined;
                                            pubKey?: {
                                                ed25519?: Uint8Array | undefined;
                                                secp256k1?: Uint8Array | undefined;
                                            } | undefined;
                                            votingPower?: string | number | import("long").Long | undefined;
                                            proposerPriority?: string | number | import("long").Long | undefined;
                                        }[] | undefined;
                                        totalVotingPower?: string | number | import("long").Long | undefined;
                                        timestamp?: Date | undefined;
                                    } | undefined;
                                }[] | undefined;
                            } | undefined;
                            lastCommit?: {
                                height?: string | number | import("long").Long | undefined;
                                round?: number | undefined;
                                blockId?: {
                                    hash?: Uint8Array | undefined;
                                    partSetHeader?: {
                                        total?: number | undefined;
                                        hash?: Uint8Array | undefined;
                                    } | undefined;
                                } | undefined;
                                signatures?: {
                                    blockIdFlag?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/validator").BlockIDFlag | undefined;
                                    validatorAddress?: Uint8Array | undefined;
                                    timestamp?: Date | undefined;
                                    signature?: Uint8Array | undefined;
                                }[] | undefined;
                            } | undefined;
                        } | undefined;
                        sdkBlock?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").Long | undefined;
                                    app?: string | number | import("long").Long | undefined;
                                } | undefined;
                                chainId?: string | undefined;
                                height?: string | number | import("long").Long | undefined;
                                time?: Date | undefined;
                                lastBlockId?: {
                                    hash?: Uint8Array | undefined;
                                    partSetHeader?: {
                                        total?: number | undefined;
                                        hash?: Uint8Array | undefined;
                                    } | undefined;
                                } | undefined;
                                lastCommitHash?: Uint8Array | undefined;
                                dataHash?: Uint8Array | undefined;
                                validatorsHash?: Uint8Array | undefined;
                                nextValidatorsHash?: Uint8Array | undefined;
                                consensusHash?: Uint8Array | undefined;
                                appHash?: Uint8Array | undefined;
                                lastResultsHash?: Uint8Array | undefined;
                                evidenceHash?: Uint8Array | undefined;
                                proposerAddress?: string | undefined;
                            } | undefined;
                            data?: {
                                txs?: Uint8Array[] | undefined;
                            } | undefined;
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/types").SignedMsgType | undefined;
                                            height?: string | number | import("long").Long | undefined;
                                            round?: number | undefined;
                                            blockId?: {
                                                hash?: Uint8Array | undefined;
                                                partSetHeader?: {
                                                    total?: number | undefined;
                                                    hash?: Uint8Array | undefined;
                                                } | undefined;
                                            } | undefined;
                                            timestamp?: Date | undefined;
                                            validatorAddress?: Uint8Array | undefined;
                                            validatorIndex?: number | undefined;
                                            signature?: Uint8Array | undefined;
                                            extension?: Uint8Array | undefined;
                                            extensionSignature?: Uint8Array | undefined;
                                        } | undefined;
                                        voteB?: {
                                            type?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/types").SignedMsgType | undefined;
                                            height?: string | number | import("long").Long | undefined;
                                            round?: number | undefined;
                                            blockId?: {
                                                hash?: Uint8Array | undefined;
                                                partSetHeader?: {
                                                    total?: number | undefined;
                                                    hash?: Uint8Array | undefined;
                                                } | undefined;
                                            } | undefined;
                                            timestamp?: Date | undefined;
                                            validatorAddress?: Uint8Array | undefined;
                                            validatorIndex?: number | undefined;
                                            signature?: Uint8Array | undefined;
                                            extension?: Uint8Array | undefined;
                                            extensionSignature?: Uint8Array | undefined;
                                        } | undefined;
                                        totalVotingPower?: string | number | import("long").Long | undefined;
                                        validatorPower?: string | number | import("long").Long | undefined;
                                        timestamp?: Date | undefined;
                                    } | undefined;
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: string | number | import("long").Long | undefined;
                                                        app?: string | number | import("long").Long | undefined;
                                                    } | undefined;
                                                    chainId?: string | undefined;
                                                    height?: string | number | import("long").Long | undefined;
                                                    time?: Date | undefined;
                                                    lastBlockId?: {
                                                        hash?: Uint8Array | undefined;
                                                        partSetHeader?: {
                                                            total?: number | undefined;
                                                            hash?: Uint8Array | undefined;
                                                        } | undefined;
                                                    } | undefined;
                                                    lastCommitHash?: Uint8Array | undefined;
                                                    dataHash?: Uint8Array | undefined;
                                                    validatorsHash?: Uint8Array | undefined;
                                                    nextValidatorsHash?: Uint8Array | undefined;
                                                    consensusHash?: Uint8Array | undefined;
                                                    appHash?: Uint8Array | undefined;
                                                    lastResultsHash?: Uint8Array | undefined;
                                                    evidenceHash?: Uint8Array | undefined;
                                                    proposerAddress?: Uint8Array | undefined;
                                                } | undefined;
                                                commit?: {
                                                    height?: string | number | import("long").Long | undefined;
                                                    round?: number | undefined;
                                                    blockId?: {
                                                        hash?: Uint8Array | undefined;
                                                        partSetHeader?: {
                                                            total?: number | undefined;
                                                            hash?: Uint8Array | undefined;
                                                        } | undefined;
                                                    } | undefined;
                                                    signatures?: {
                                                        blockIdFlag?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/validator").BlockIDFlag | undefined;
                                                        validatorAddress?: Uint8Array | undefined;
                                                        timestamp?: Date | undefined;
                                                        signature?: Uint8Array | undefined;
                                                    }[] | undefined;
                                                } | undefined;
                                            } | undefined;
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array | undefined;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array | undefined;
                                                        secp256k1?: Uint8Array | undefined;
                                                    } | undefined;
                                                    votingPower?: string | number | import("long").Long | undefined;
                                                    proposerPriority?: string | number | import("long").Long | undefined;
                                                }[] | undefined;
                                                proposer?: {
                                                    address?: Uint8Array | undefined;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array | undefined;
                                                        secp256k1?: Uint8Array | undefined;
                                                    } | undefined;
                                                    votingPower?: string | number | import("long").Long | undefined;
                                                    proposerPriority?: string | number | import("long").Long | undefined;
                                                } | undefined;
                                                totalVotingPower?: string | number | import("long").Long | undefined;
                                            } | undefined;
                                        } | undefined;
                                        commonHeight?: string | number | import("long").Long | undefined;
                                        byzantineValidators?: {
                                            address?: Uint8Array | undefined;
                                            pubKey?: {
                                                ed25519?: Uint8Array | undefined;
                                                secp256k1?: Uint8Array | undefined;
                                            } | undefined;
                                            votingPower?: string | number | import("long").Long | undefined;
                                            proposerPriority?: string | number | import("long").Long | undefined;
                                        }[] | undefined;
                                        totalVotingPower?: string | number | import("long").Long | undefined;
                                        timestamp?: Date | undefined;
                                    } | undefined;
                                }[] | undefined;
                            } | undefined;
                            lastCommit?: {
                                height?: string | number | import("long").Long | undefined;
                                round?: number | undefined;
                                blockId?: {
                                    hash?: Uint8Array | undefined;
                                    partSetHeader?: {
                                        total?: number | undefined;
                                        hash?: Uint8Array | undefined;
                                    } | undefined;
                                } | undefined;
                                signatures?: {
                                    blockIdFlag?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/validator").BlockIDFlag | undefined;
                                    validatorAddress?: Uint8Array | undefined;
                                    timestamp?: Date | undefined;
                                    signature?: Uint8Array | undefined;
                                }[] | undefined;
                            } | undefined;
                        } | undefined;
                    }): _28.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _28.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetSyncingRequest;
                    fromPartial(_: {}): _28.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _28.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetSyncingResponse;
                    fromPartial(object: {
                        syncing?: boolean | undefined;
                    }): _28.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _28.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetNodeInfoRequest;
                    fromPartial(_: {}): _28.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _28.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetNodeInfoResponse;
                    fromPartial(object: {
                        defaultNodeInfo?: {
                            protocolVersion?: {
                                p2p?: string | number | import("long").Long | undefined;
                                block?: string | number | import("long").Long | undefined;
                                app?: string | number | import("long").Long | undefined;
                            } | undefined;
                            defaultNodeId?: string | undefined;
                            listenAddr?: string | undefined;
                            network?: string | undefined;
                            version?: string | undefined;
                            channels?: Uint8Array | undefined;
                            moniker?: string | undefined;
                            other?: {
                                txIndex?: string | undefined;
                                rpcAddress?: string | undefined;
                            } | undefined;
                        } | undefined;
                        applicationVersion?: {
                            name?: string | undefined;
                            appName?: string | undefined;
                            version?: string | undefined;
                            gitCommit?: string | undefined;
                            buildTags?: string | undefined;
                            goVersion?: string | undefined;
                            buildDeps?: {
                                path?: string | undefined;
                                version?: string | undefined;
                                sum?: string | undefined;
                            }[] | undefined;
                            cosmosSdkVersion?: string | undefined;
                        } | undefined;
                    }): _28.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _28.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.VersionInfo;
                    fromPartial(object: {
                        name?: string | undefined;
                        appName?: string | undefined;
                        version?: string | undefined;
                        gitCommit?: string | undefined;
                        buildTags?: string | undefined;
                        goVersion?: string | undefined;
                        buildDeps?: {
                            path?: string | undefined;
                            version?: string | undefined;
                            sum?: string | undefined;
                        }[] | undefined;
                        cosmosSdkVersion?: string | undefined;
                    }): _28.VersionInfo;
                };
                Module: {
                    encode(message: _28.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.Module;
                    fromPartial(object: {
                        path?: string | undefined;
                        version?: string | undefined;
                        sum?: string | undefined;
                    }): _28.Module;
                };
                ABCIQueryRequest: {
                    encode(message: _28.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.ABCIQueryRequest;
                    fromPartial(object: {
                        data?: Uint8Array | undefined;
                        path?: string | undefined;
                        height?: string | number | import("long").Long | undefined;
                        prove?: boolean | undefined;
                    }): _28.ABCIQueryRequest;
                };
                ABCIQueryResponse: {
                    encode(message: _28.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.ABCIQueryResponse;
                    fromPartial(object: {
                        code?: number | undefined;
                        log?: string | undefined;
                        info?: string | undefined;
                        index?: string | number | import("long").Long | undefined;
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        proofOps?: {
                            ops?: {
                                type?: string | undefined;
                                key?: Uint8Array | undefined;
                                data?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        height?: string | number | import("long").Long | undefined;
                        codespace?: string | undefined;
                    }): _28.ABCIQueryResponse;
                };
                ProofOp: {
                    encode(message: _28.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.ProofOp;
                    fromPartial(object: {
                        type?: string | undefined;
                        key?: Uint8Array | undefined;
                        data?: Uint8Array | undefined;
                    }): _28.ProofOp;
                };
                ProofOps: {
                    encode(message: _28.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.ProofOps;
                    fromPartial(object: {
                        ops?: {
                            type?: string | undefined;
                            key?: Uint8Array | undefined;
                            data?: Uint8Array | undefined;
                        }[] | undefined;
                    }): _28.ProofOps;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _30.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _30.Coin;
                fromPartial(object: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }): _30.Coin;
            };
            DecCoin: {
                encode(message: _30.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _30.DecCoin;
                fromPartial(object: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }): _30.DecCoin;
            };
            IntProto: {
                encode(message: _30.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _30.IntProto;
                fromPartial(object: {
                    int?: string | undefined;
                }): _30.IntProto;
            };
            DecProto: {
                encode(message: _30.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _30.DecProto;
                fromPartial(object: {
                    dec?: string | undefined;
                }): _30.DecProto;
            };
        };
    }
    namespace circuit {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _31.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _31.Module;
                    fromPartial(object: {
                        authority?: string | undefined;
                    }): _31.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _314.MsgClientImpl;
            QueryClientImpl: typeof _295.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                account(request: _32.QueryAccountRequest): Promise<_32.AccountResponse>;
                accounts(request?: _32.QueryAccountsRequest | undefined): Promise<_32.AccountsResponse>;
                disabledList(request?: _32.QueryDisabledListRequest | undefined): Promise<_32.DisabledListResponse>;
            };
            LCDQueryClient: typeof _274.LCDQueryClient;
            permissions_LevelFromJSON(object: any): _34.Permissions_Level;
            permissions_LevelToJSON(object: _34.Permissions_Level): string;
            Permissions_Level: typeof _34.Permissions_Level;
            Permissions_LevelSDKType: typeof _34.Permissions_Level;
            Permissions: {
                encode(message: _34.Permissions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _34.Permissions;
                fromPartial(object: {
                    level?: _34.Permissions_Level | undefined;
                    limitTypeUrls?: string[] | undefined;
                }): _34.Permissions;
            };
            GenesisAccountPermissions: {
                encode(message: _34.GenesisAccountPermissions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _34.GenesisAccountPermissions;
                fromPartial(object: {
                    address?: string | undefined;
                    permissions?: {
                        level?: _34.Permissions_Level | undefined;
                        limitTypeUrls?: string[] | undefined;
                    } | undefined;
                }): _34.GenesisAccountPermissions;
            };
            GenesisState: {
                encode(message: _34.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _34.GenesisState;
                fromPartial(object: {
                    accountPermissions?: {
                        address?: string | undefined;
                        permissions?: {
                            level?: _34.Permissions_Level | undefined;
                            limitTypeUrls?: string[] | undefined;
                        } | undefined;
                    }[] | undefined;
                    disabledTypeUrls?: string[] | undefined;
                }): _34.GenesisState;
            };
            MsgAuthorizeCircuitBreaker: {
                encode(message: _33.MsgAuthorizeCircuitBreaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _33.MsgAuthorizeCircuitBreaker;
                fromPartial(object: {
                    granter?: string | undefined;
                    grantee?: string | undefined;
                    permissions?: {
                        level?: _34.Permissions_Level | undefined;
                        limitTypeUrls?: string[] | undefined;
                    } | undefined;
                }): _33.MsgAuthorizeCircuitBreaker;
            };
            MsgAuthorizeCircuitBreakerResponse: {
                encode(message: _33.MsgAuthorizeCircuitBreakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _33.MsgAuthorizeCircuitBreakerResponse;
                fromPartial(object: {
                    success?: boolean | undefined;
                }): _33.MsgAuthorizeCircuitBreakerResponse;
            };
            MsgTripCircuitBreaker: {
                encode(message: _33.MsgTripCircuitBreaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _33.MsgTripCircuitBreaker;
                fromPartial(object: {
                    authority?: string | undefined;
                    msgTypeUrls?: string[] | undefined;
                }): _33.MsgTripCircuitBreaker;
            };
            MsgTripCircuitBreakerResponse: {
                encode(message: _33.MsgTripCircuitBreakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _33.MsgTripCircuitBreakerResponse;
                fromPartial(object: {
                    success?: boolean | undefined;
                }): _33.MsgTripCircuitBreakerResponse;
            };
            MsgResetCircuitBreaker: {
                encode(message: _33.MsgResetCircuitBreaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _33.MsgResetCircuitBreaker;
                fromPartial(object: {
                    authority?: string | undefined;
                    msgTypeUrls?: string[] | undefined;
                }): _33.MsgResetCircuitBreaker;
            };
            MsgResetCircuitBreakerResponse: {
                encode(message: _33.MsgResetCircuitBreakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _33.MsgResetCircuitBreakerResponse;
                fromPartial(object: {
                    success?: boolean | undefined;
                }): _33.MsgResetCircuitBreakerResponse;
            };
            QueryAccountRequest: {
                encode(message: _32.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _32.QueryAccountRequest;
                fromPartial(object: {
                    address?: string | undefined;
                }): _32.QueryAccountRequest;
            };
            AccountResponse: {
                encode(message: _32.AccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _32.AccountResponse;
                fromPartial(object: {
                    permission?: {
                        level?: _34.Permissions_Level | undefined;
                        limitTypeUrls?: string[] | undefined;
                    } | undefined;
                }): _32.AccountResponse;
            };
            QueryAccountsRequest: {
                encode(message: _32.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _32.QueryAccountsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _32.QueryAccountsRequest;
            };
            AccountsResponse: {
                encode(message: _32.AccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _32.AccountsResponse;
                fromPartial(object: {
                    accounts?: {
                        address?: string | undefined;
                        permissions?: {
                            level?: _34.Permissions_Level | undefined;
                            limitTypeUrls?: string[] | undefined;
                        } | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _32.AccountsResponse;
            };
            QueryDisabledListRequest: {
                encode(_: _32.QueryDisabledListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _32.QueryDisabledListRequest;
                fromPartial(_: {}): _32.QueryDisabledListRequest;
            };
            DisabledListResponse: {
                encode(message: _32.DisabledListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _32.DisabledListResponse;
                fromPartial(object: {
                    disabledList?: string[] | undefined;
                }): _32.DisabledListResponse;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _35.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _35.Module;
                    fromPartial(object: {
                        authority?: string | undefined;
                    }): _35.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _315.MsgClientImpl;
            QueryClientImpl: typeof _296.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _36.QueryParamsRequest | undefined): Promise<_36.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _275.LCDQueryClient;
            MsgUpdateParams: {
                encode(message: _37.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _37.MsgUpdateParams;
                fromPartial(object: {
                    authority?: string | undefined;
                    block?: {
                        maxBytes?: string | number | import("long").Long | undefined;
                        maxGas?: string | number | import("long").Long | undefined;
                    } | undefined;
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long").Long | undefined;
                        maxAgeDuration?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        maxBytes?: string | number | import("long").Long | undefined;
                    } | undefined;
                    validator?: {
                        pubKeyTypes?: string[] | undefined;
                    } | undefined;
                    abci?: {
                        voteExtensionsEnableHeight?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _37.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _37.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _37.MsgUpdateParamsResponse;
                fromPartial(_: {}): _37.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _36.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _36.QueryParamsRequest;
                fromPartial(_: {}): _36.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _36.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _36.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        block?: {
                            maxBytes?: string | number | import("long").Long | undefined;
                            maxGas?: string | number | import("long").Long | undefined;
                        } | undefined;
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long").Long | undefined;
                            maxAgeDuration?: {
                                seconds?: string | number | import("long").Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            maxBytes?: string | number | import("long").Long | undefined;
                        } | undefined;
                        validator?: {
                            pubKeyTypes?: string[] | undefined;
                        } | undefined;
                        version?: {
                            app?: string | number | import("long").Long | undefined;
                        } | undefined;
                        abci?: {
                            voteExtensionsEnableHeight?: string | number | import("long").Long | undefined;
                        } | undefined;
                    } | undefined;
                }): _36.QueryParamsResponse;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _38.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _38.Module;
                    fromPartial(object: {
                        feeCollectorName?: string | undefined;
                        authority?: string | undefined;
                    }): _38.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _316.MsgClientImpl;
            MsgVerifyInvariant: {
                encode(message: _40.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _40.MsgVerifyInvariant;
                fromPartial(object: {
                    sender?: string | undefined;
                    invariantModuleName?: string | undefined;
                    invariantRoute?: string | undefined;
                }): _40.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _40.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _40.MsgVerifyInvariantResponse;
                fromPartial(_: {}): _40.MsgVerifyInvariantResponse;
            };
            MsgUpdateParams: {
                encode(message: _40.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _40.MsgUpdateParams;
                fromPartial(object: {
                    authority?: string | undefined;
                    constantFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }): _40.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _40.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _40.MsgUpdateParamsResponse;
                fromPartial(_: {}): _40.MsgUpdateParamsResponse;
            };
            GenesisState: {
                encode(message: _39.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _39.GenesisState;
                fromPartial(object: {
                    constantFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }): _39.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _41.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.PubKey;
                fromPartial(object: {
                    key?: Uint8Array | undefined;
                }): _41.PubKey;
            };
            PrivKey: {
                encode(message: _41.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.PrivKey;
                fromPartial(object: {
                    key?: Uint8Array | undefined;
                }): _41.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _42.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _42.BIP44Params;
                    fromPartial(object: {
                        purpose?: number | undefined;
                        coinType?: number | undefined;
                        account?: number | undefined;
                        change?: boolean | undefined;
                        addressIndex?: number | undefined;
                    }): _42.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _43.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.Record;
                    fromPartial(object: {
                        name?: string | undefined;
                        pubKey?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        local?: {
                            privKey?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        ledger?: {
                            path?: {
                                purpose?: number | undefined;
                                coinType?: number | undefined;
                                account?: number | undefined;
                                change?: boolean | undefined;
                                addressIndex?: number | undefined;
                            } | undefined;
                        } | undefined;
                        multi?: {} | undefined;
                        offline?: {} | undefined;
                    }): _43.Record;
                };
                Record_Local: {
                    encode(message: _43.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.Record_Local;
                    fromPartial(object: {
                        privKey?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                    }): _43.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _43.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.Record_Ledger;
                    fromPartial(object: {
                        path?: {
                            purpose?: number | undefined;
                            coinType?: number | undefined;
                            account?: number | undefined;
                            change?: boolean | undefined;
                            addressIndex?: number | undefined;
                        } | undefined;
                    }): _43.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _43.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.Record_Multi;
                    fromPartial(_: {}): _43.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _43.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.Record_Offline;
                    fromPartial(_: {}): _43.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _44.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _44.LegacyAminoPubKey;
                fromPartial(object: {
                    threshold?: number | undefined;
                    publicKeys?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    }[] | undefined;
                }): _44.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _45.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _45.PubKey;
                fromPartial(object: {
                    key?: Uint8Array | undefined;
                }): _45.PubKey;
            };
            PrivKey: {
                encode(message: _45.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _45.PrivKey;
                fromPartial(object: {
                    key?: Uint8Array | undefined;
                }): _45.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _46.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _46.PubKey;
                fromPartial(object: {
                    key?: Uint8Array | undefined;
                }): _46.PubKey;
            };
            PrivKey: {
                encode(message: _46.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _46.PrivKey;
                fromPartial(object: {
                    secret?: Uint8Array | undefined;
                }): _46.PrivKey;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _47.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _47.Module;
                    fromPartial(object: {
                        feeCollectorName?: string | undefined;
                        authority?: string | undefined;
                    }): _47.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _317.MsgClientImpl;
            QueryClientImpl: typeof _297.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _50.QueryParamsRequest | undefined): Promise<_50.QueryParamsResponse>;
                validatorDistributionInfo(request: _50.QueryValidatorDistributionInfoRequest): Promise<_50.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _50.QueryValidatorOutstandingRewardsRequest): Promise<_50.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _50.QueryValidatorCommissionRequest): Promise<_50.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _50.QueryValidatorSlashesRequest): Promise<_50.QueryValidatorSlashesResponse>;
                delegationRewards(request: _50.QueryDelegationRewardsRequest): Promise<_50.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _50.QueryDelegationTotalRewardsRequest): Promise<_50.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _50.QueryDelegatorValidatorsRequest): Promise<_50.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _50.QueryDelegatorWithdrawAddressRequest): Promise<_50.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _50.QueryCommunityPoolRequest | undefined): Promise<_50.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _276.LCDQueryClient;
            MsgSetWithdrawAddress: {
                encode(message: _51.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.MsgSetWithdrawAddress;
                fromPartial(object: {
                    delegatorAddress?: string | undefined;
                    withdrawAddress?: string | undefined;
                }): _51.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _51.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.MsgSetWithdrawAddressResponse;
                fromPartial(_: {}): _51.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _51.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.MsgWithdrawDelegatorReward;
                fromPartial(object: {
                    delegatorAddress?: string | undefined;
                    validatorAddress?: string | undefined;
                }): _51.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _51.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _51.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _51.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.MsgWithdrawValidatorCommission;
                fromPartial(object: {
                    validatorAddress?: string | undefined;
                }): _51.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _51.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _51.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _51.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.MsgFundCommunityPool;
                fromPartial(object: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    depositor?: string | undefined;
                }): _51.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _51.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.MsgFundCommunityPoolResponse;
                fromPartial(_: {}): _51.MsgFundCommunityPoolResponse;
            };
            MsgUpdateParams: {
                encode(message: _51.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.MsgUpdateParams;
                fromPartial(object: {
                    authority?: string | undefined;
                    params?: {
                        communityTax?: string | undefined;
                        baseProposerReward?: string | undefined;
                        bonusProposerReward?: string | undefined;
                        withdrawAddrEnabled?: boolean | undefined;
                    } | undefined;
                }): _51.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _51.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.MsgUpdateParamsResponse;
                fromPartial(_: {}): _51.MsgUpdateParamsResponse;
            };
            MsgCommunityPoolSpend: {
                encode(message: _51.MsgCommunityPoolSpend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.MsgCommunityPoolSpend;
                fromPartial(object: {
                    authority?: string | undefined;
                    recipient?: string | undefined;
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _51.MsgCommunityPoolSpend;
            };
            MsgCommunityPoolSpendResponse: {
                encode(_: _51.MsgCommunityPoolSpendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.MsgCommunityPoolSpendResponse;
                fromPartial(_: {}): _51.MsgCommunityPoolSpendResponse;
            };
            MsgDepositValidatorRewardsPool: {
                encode(message: _51.MsgDepositValidatorRewardsPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.MsgDepositValidatorRewardsPool;
                fromPartial(object: {
                    depositor?: string | undefined;
                    validatorAddress?: string | undefined;
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _51.MsgDepositValidatorRewardsPool;
            };
            MsgDepositValidatorRewardsPoolResponse: {
                encode(_: _51.MsgDepositValidatorRewardsPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.MsgDepositValidatorRewardsPoolResponse;
                fromPartial(_: {}): _51.MsgDepositValidatorRewardsPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _50.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _50.QueryParamsRequest;
                fromPartial(_: {}): _50.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _50.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _50.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        communityTax?: string | undefined;
                        baseProposerReward?: string | undefined;
                        bonusProposerReward?: string | undefined;
                        withdrawAddrEnabled?: boolean | undefined;
                    } | undefined;
                }): _50.QueryParamsResponse;
            };
            QueryValidatorDistributionInfoRequest: {
                encode(message: _50.QueryValidatorDistributionInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _50.QueryValidatorDistributionInfoRequest;
                fromPartial(object: {
                    validatorAddress?: string | undefined;
                }): _50.QueryValidatorDistributionInfoRequest;
            };
            QueryValidatorDistributionInfoResponse: {
                encode(message: _50.QueryValidatorDistributionInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _50.QueryValidatorDistributionInfoResponse;
                fromPartial(object: {
                    operatorAddress?: string | undefined;
                    selfBondRewards?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    commission?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _50.QueryValidatorDistributionInfoResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _50.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _50.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: {
                    validatorAddress?: string | undefined;
                }): _50.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _50.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _50.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        rewards?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }): _50.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _50.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _50.QueryValidatorCommissionRequest;
                fromPartial(object: {
                    validatorAddress?: string | undefined;
                }): _50.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _50.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _50.QueryValidatorCommissionResponse;
                fromPartial(object: {
                    commission?: {
                        commission?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }): _50.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _50.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _50.QueryValidatorSlashesRequest;
                fromPartial(object: {
                    validatorAddress?: string | undefined;
                    startingHeight?: string | number | import("long").Long | undefined;
                    endingHeight?: string | number | import("long").Long | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _50.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _50.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _50.QueryValidatorSlashesResponse;
                fromPartial(object: {
                    slashes?: {
                        validatorPeriod?: string | number | import("long").Long | undefined;
                        fraction?: string | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _50.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _50.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _50.QueryDelegationRewardsRequest;
                fromPartial(object: {
                    delegatorAddress?: string | undefined;
                    validatorAddress?: string | undefined;
                }): _50.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _50.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _50.QueryDelegationRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _50.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _50.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _50.QueryDelegationTotalRewardsRequest;
                fromPartial(object: {
                    delegatorAddress?: string | undefined;
                }): _50.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _50.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _50.QueryDelegationTotalRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        validatorAddress?: string | undefined;
                        reward?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    total?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _50.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _50.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _50.QueryDelegatorValidatorsRequest;
                fromPartial(object: {
                    delegatorAddress?: string | undefined;
                }): _50.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _50.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _50.QueryDelegatorValidatorsResponse;
                fromPartial(object: {
                    validators?: string[] | undefined;
                }): _50.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _50.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _50.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: {
                    delegatorAddress?: string | undefined;
                }): _50.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _50.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _50.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: {
                    withdrawAddress?: string | undefined;
                }): _50.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _50.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _50.QueryCommunityPoolRequest;
                fromPartial(_: {}): _50.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _50.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _50.QueryCommunityPoolResponse;
                fromPartial(object: {
                    pool?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _50.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _49.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.DelegatorWithdrawInfo;
                fromPartial(object: {
                    delegatorAddress?: string | undefined;
                    withdrawAddress?: string | undefined;
                }): _49.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _49.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.ValidatorOutstandingRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string | undefined;
                    outstandingRewards?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _49.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _49.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: {
                    validatorAddress?: string | undefined;
                    accumulated?: {
                        commission?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }): _49.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _49.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.ValidatorHistoricalRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string | undefined;
                    period?: string | number | import("long").Long | undefined;
                    rewards?: {
                        cumulativeRewardRatio?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        referenceCount?: number | undefined;
                    } | undefined;
                }): _49.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _49.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.ValidatorCurrentRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string | undefined;
                    rewards?: {
                        rewards?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        period?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _49.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _49.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.DelegatorStartingInfoRecord;
                fromPartial(object: {
                    delegatorAddress?: string | undefined;
                    validatorAddress?: string | undefined;
                    startingInfo?: {
                        previousPeriod?: string | number | import("long").Long | undefined;
                        stake?: string | undefined;
                        height?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _49.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _49.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.ValidatorSlashEventRecord;
                fromPartial(object: {
                    validatorAddress?: string | undefined;
                    height?: string | number | import("long").Long | undefined;
                    period?: string | number | import("long").Long | undefined;
                    validatorSlashEvent?: {
                        validatorPeriod?: string | number | import("long").Long | undefined;
                        fraction?: string | undefined;
                    } | undefined;
                }): _49.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _49.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.GenesisState;
                fromPartial(object: {
                    params?: {
                        communityTax?: string | undefined;
                        baseProposerReward?: string | undefined;
                        bonusProposerReward?: string | undefined;
                        withdrawAddrEnabled?: boolean | undefined;
                    } | undefined;
                    feePool?: {
                        communityPool?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                    delegatorWithdrawInfos?: {
                        delegatorAddress?: string | undefined;
                        withdrawAddress?: string | undefined;
                    }[] | undefined;
                    previousProposer?: string | undefined;
                    outstandingRewards?: {
                        validatorAddress?: string | undefined;
                        outstandingRewards?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    validatorAccumulatedCommissions?: {
                        validatorAddress?: string | undefined;
                        accumulated?: {
                            commission?: {
                                denom?: string | undefined;
                                amount?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                    }[] | undefined;
                    validatorHistoricalRewards?: {
                        validatorAddress?: string | undefined;
                        period?: string | number | import("long").Long | undefined;
                        rewards?: {
                            cumulativeRewardRatio?: {
                                denom?: string | undefined;
                                amount?: string | undefined;
                            }[] | undefined;
                            referenceCount?: number | undefined;
                        } | undefined;
                    }[] | undefined;
                    validatorCurrentRewards?: {
                        validatorAddress?: string | undefined;
                        rewards?: {
                            rewards?: {
                                denom?: string | undefined;
                                amount?: string | undefined;
                            }[] | undefined;
                            period?: string | number | import("long").Long | undefined;
                        } | undefined;
                    }[] | undefined;
                    delegatorStartingInfos?: {
                        delegatorAddress?: string | undefined;
                        validatorAddress?: string | undefined;
                        startingInfo?: {
                            previousPeriod?: string | number | import("long").Long | undefined;
                            stake?: string | undefined;
                            height?: string | number | import("long").Long | undefined;
                        } | undefined;
                    }[] | undefined;
                    validatorSlashEvents?: {
                        validatorAddress?: string | undefined;
                        height?: string | number | import("long").Long | undefined;
                        period?: string | number | import("long").Long | undefined;
                        validatorSlashEvent?: {
                            validatorPeriod?: string | number | import("long").Long | undefined;
                            fraction?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                }): _49.GenesisState;
            };
            Params: {
                encode(message: _48.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.Params;
                fromPartial(object: {
                    communityTax?: string | undefined;
                    baseProposerReward?: string | undefined;
                    bonusProposerReward?: string | undefined;
                    withdrawAddrEnabled?: boolean | undefined;
                }): _48.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _48.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.ValidatorHistoricalRewards;
                fromPartial(object: {
                    cumulativeRewardRatio?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    referenceCount?: number | undefined;
                }): _48.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _48.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.ValidatorCurrentRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    period?: string | number | import("long").Long | undefined;
                }): _48.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _48.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.ValidatorAccumulatedCommission;
                fromPartial(object: {
                    commission?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _48.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _48.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.ValidatorOutstandingRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _48.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _48.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.ValidatorSlashEvent;
                fromPartial(object: {
                    validatorPeriod?: string | number | import("long").Long | undefined;
                    fraction?: string | undefined;
                }): _48.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _48.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.ValidatorSlashEvents;
                fromPartial(object: {
                    validatorSlashEvents?: {
                        validatorPeriod?: string | number | import("long").Long | undefined;
                        fraction?: string | undefined;
                    }[] | undefined;
                }): _48.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _48.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.FeePool;
                fromPartial(object: {
                    communityPool?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _48.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _48.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.CommunityPoolSpendProposal;
                fromPartial(object: {
                    title?: string | undefined;
                    description?: string | undefined;
                    recipient?: string | undefined;
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _48.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _48.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.DelegatorStartingInfo;
                fromPartial(object: {
                    previousPeriod?: string | number | import("long").Long | undefined;
                    stake?: string | undefined;
                    height?: string | number | import("long").Long | undefined;
                }): _48.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _48.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.DelegationDelegatorReward;
                fromPartial(object: {
                    validatorAddress?: string | undefined;
                    reward?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _48.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _48.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: {
                    title?: string | undefined;
                    description?: string | undefined;
                    recipient?: string | undefined;
                    amount?: string | undefined;
                    deposit?: string | undefined;
                }): _48.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _52.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _52.Module;
                    fromPartial(_: {}): _52.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _318.MsgClientImpl;
            QueryClientImpl: typeof _298.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _55.QueryEvidenceRequest): Promise<_55.QueryEvidenceResponse>;
                allEvidence(request?: _55.QueryAllEvidenceRequest | undefined): Promise<_55.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _277.LCDQueryClient;
            MsgSubmitEvidence: {
                encode(message: _56.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.MsgSubmitEvidence;
                fromPartial(object: {
                    submitter?: string | undefined;
                    evidence?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }): _56.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _56.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.MsgSubmitEvidenceResponse;
                fromPartial(object: {
                    hash?: Uint8Array | undefined;
                }): _56.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _55.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _55.QueryEvidenceRequest;
                fromPartial(object: {
                    evidenceHash?: Uint8Array | undefined;
                    hash?: string | undefined;
                }): _55.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _55.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _55.QueryEvidenceResponse;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }): _55.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _55.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _55.QueryAllEvidenceRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _55.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _55.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _55.QueryAllEvidenceResponse;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _55.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _54.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _54.GenesisState;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    }[] | undefined;
                }): _54.GenesisState;
            };
            Equivocation: {
                encode(message: _53.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _53.Equivocation;
                fromPartial(object: {
                    height?: string | number | import("long").Long | undefined;
                    time?: Date | undefined;
                    power?: string | number | import("long").Long | undefined;
                    consensusAddress?: string | undefined;
                }): _53.Equivocation;
            };
        };
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _57.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.Module;
                    fromPartial(_: {}): _57.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _319.MsgClientImpl;
            QueryClientImpl: typeof _299.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _60.QueryAllowanceRequest): Promise<_60.QueryAllowanceResponse>;
                allowances(request: _60.QueryAllowancesRequest): Promise<_60.QueryAllowancesResponse>;
                allowancesByGranter(request: _60.QueryAllowancesByGranterRequest): Promise<_60.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _278.LCDQueryClient;
            MsgGrantAllowance: {
                encode(message: _61.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _61.MsgGrantAllowance;
                fromPartial(object: {
                    granter?: string | undefined;
                    grantee?: string | undefined;
                    allowance?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }): _61.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _61.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _61.MsgGrantAllowanceResponse;
                fromPartial(_: {}): _61.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _61.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _61.MsgRevokeAllowance;
                fromPartial(object: {
                    granter?: string | undefined;
                    grantee?: string | undefined;
                }): _61.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _61.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _61.MsgRevokeAllowanceResponse;
                fromPartial(_: {}): _61.MsgRevokeAllowanceResponse;
            };
            MsgPruneAllowances: {
                encode(message: _61.MsgPruneAllowances, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _61.MsgPruneAllowances;
                fromPartial(object: {
                    pruner?: string | undefined;
                }): _61.MsgPruneAllowances;
            };
            MsgPruneAllowancesResponse: {
                encode(_: _61.MsgPruneAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _61.MsgPruneAllowancesResponse;
                fromPartial(_: {}): _61.MsgPruneAllowancesResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _60.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryAllowanceRequest;
                fromPartial(object: {
                    granter?: string | undefined;
                    grantee?: string | undefined;
                }): _60.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _60.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryAllowanceResponse;
                fromPartial(object: {
                    allowance?: {
                        granter?: string | undefined;
                        grantee?: string | undefined;
                        allowance?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                }): _60.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _60.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryAllowancesRequest;
                fromPartial(object: {
                    grantee?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _60.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _60.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryAllowancesResponse;
                fromPartial(object: {
                    allowances?: {
                        granter?: string | undefined;
                        grantee?: string | undefined;
                        allowance?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _60.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _60.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryAllowancesByGranterRequest;
                fromPartial(object: {
                    granter?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _60.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _60.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryAllowancesByGranterResponse;
                fromPartial(object: {
                    allowances?: {
                        granter?: string | undefined;
                        grantee?: string | undefined;
                        allowance?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _60.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _59.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.GenesisState;
                fromPartial(object: {
                    allowances?: {
                        granter?: string | undefined;
                        grantee?: string | undefined;
                        allowance?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                    }[] | undefined;
                }): _59.GenesisState;
            };
            BasicAllowance: {
                encode(message: _58.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _58.BasicAllowance;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    expiration?: Date | undefined;
                }): _58.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _58.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _58.PeriodicAllowance;
                fromPartial(object: {
                    basic?: {
                        spendLimit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        expiration?: Date | undefined;
                    } | undefined;
                    period?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    periodSpendLimit?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    periodCanSpend?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    periodReset?: Date | undefined;
                }): _58.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _58.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _58.AllowedMsgAllowance;
                fromPartial(object: {
                    allowance?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    allowedMessages?: string[] | undefined;
                }): _58.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _58.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _58.Grant;
                fromPartial(object: {
                    granter?: string | undefined;
                    grantee?: string | undefined;
                    allowance?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }): _58.Grant;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _62.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.Module;
                    fromPartial(_: {}): _62.Module;
                };
            };
        }
        const v1beta1: {
            GenesisState: {
                encode(message: _63.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _63.GenesisState;
                fromPartial(object: {
                    genTxs?: Uint8Array[] | undefined;
                }): _63.GenesisState;
            };
        };
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _64.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.Module;
                    fromPartial(object: {
                        maxMetadataLen?: string | number | import("long").Long | undefined;
                        authority?: string | undefined;
                    }): _64.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _320.MsgClientImpl;
            QueryClientImpl: typeof _300.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                constitution(request?: _67.QueryConstitutionRequest | undefined): Promise<_67.QueryConstitutionResponse>;
                proposal(request: _67.QueryProposalRequest): Promise<_67.QueryProposalResponse>;
                proposals(request: _67.QueryProposalsRequest): Promise<_67.QueryProposalsResponse>;
                vote(request: _67.QueryVoteRequest): Promise<_67.QueryVoteResponse>;
                votes(request: _67.QueryVotesRequest): Promise<_67.QueryVotesResponse>;
                params(request: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                deposit(request: _67.QueryDepositRequest): Promise<_67.QueryDepositResponse>;
                deposits(request: _67.QueryDepositsRequest): Promise<_67.QueryDepositsResponse>;
                tallyResult(request: _67.QueryTallyResultRequest): Promise<_67.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _279.LCDQueryClient;
            MsgSubmitProposal: {
                encode(message: _68.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _68.MsgSubmitProposal;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    }[] | undefined;
                    initialDeposit?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    proposer?: string | undefined;
                    metadata?: string | undefined;
                    title?: string | undefined;
                    summary?: string | undefined;
                    expedited?: boolean | undefined;
                }): _68.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _68.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _68.MsgSubmitProposalResponse;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                }): _68.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _68.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _68.MsgExecLegacyContent;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    authority?: string | undefined;
                }): _68.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _68.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _68.MsgExecLegacyContentResponse;
                fromPartial(_: {}): _68.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _68.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _68.MsgVote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    voter?: string | undefined;
                    option?: _66.VoteOption | undefined;
                    metadata?: string | undefined;
                }): _68.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _68.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _68.MsgVoteResponse;
                fromPartial(_: {}): _68.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _68.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _68.MsgVoteWeighted;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    voter?: string | undefined;
                    options?: {
                        option?: _66.VoteOption | undefined;
                        weight?: string | undefined;
                    }[] | undefined;
                    metadata?: string | undefined;
                }): _68.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _68.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _68.MsgVoteWeightedResponse;
                fromPartial(_: {}): _68.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _68.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _68.MsgDeposit;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    depositor?: string | undefined;
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _68.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _68.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _68.MsgDepositResponse;
                fromPartial(_: {}): _68.MsgDepositResponse;
            };
            MsgUpdateParams: {
                encode(message: _68.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _68.MsgUpdateParams;
                fromPartial(object: {
                    authority?: string | undefined;
                    params?: {
                        minDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        votingPeriod?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        quorum?: string | undefined;
                        threshold?: string | undefined;
                        vetoThreshold?: string | undefined;
                        minInitialDepositRatio?: string | undefined;
                        proposalCancelRatio?: string | undefined;
                        proposalCancelDest?: string | undefined;
                        expeditedVotingPeriod?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        expeditedThreshold?: string | undefined;
                        expeditedMinDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        burnVoteQuorum?: boolean | undefined;
                        burnProposalDepositPrevote?: boolean | undefined;
                        burnVoteVeto?: boolean | undefined;
                        minDepositRatio?: string | undefined;
                    } | undefined;
                }): _68.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _68.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _68.MsgUpdateParamsResponse;
                fromPartial(_: {}): _68.MsgUpdateParamsResponse;
            };
            MsgCancelProposal: {
                encode(message: _68.MsgCancelProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _68.MsgCancelProposal;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    proposer?: string | undefined;
                }): _68.MsgCancelProposal;
            };
            MsgCancelProposalResponse: {
                encode(message: _68.MsgCancelProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _68.MsgCancelProposalResponse;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    canceledTime?: Date | undefined;
                    canceledHeight?: string | number | import("long").Long | undefined;
                }): _68.MsgCancelProposalResponse;
            };
            QueryConstitutionRequest: {
                encode(_: _67.QueryConstitutionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _67.QueryConstitutionRequest;
                fromPartial(_: {}): _67.QueryConstitutionRequest;
            };
            QueryConstitutionResponse: {
                encode(message: _67.QueryConstitutionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _67.QueryConstitutionResponse;
                fromPartial(object: {
                    constitution?: string | undefined;
                }): _67.QueryConstitutionResponse;
            };
            QueryProposalRequest: {
                encode(message: _67.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _67.QueryProposalRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                }): _67.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _67.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _67.QueryProposalResponse;
                fromPartial(object: {
                    proposal?: {
                        id?: string | number | import("long").Long | undefined;
                        messages?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        }[] | undefined;
                        status?: _66.ProposalStatus | undefined;
                        finalTallyResult?: {
                            yesCount?: string | undefined;
                            abstainCount?: string | undefined;
                            noCount?: string | undefined;
                            noWithVetoCount?: string | undefined;
                        } | undefined;
                        submitTime?: Date | undefined;
                        depositEndTime?: Date | undefined;
                        totalDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        votingStartTime?: Date | undefined;
                        votingEndTime?: Date | undefined;
                        metadata?: string | undefined;
                        title?: string | undefined;
                        summary?: string | undefined;
                        proposer?: string | undefined;
                        expedited?: boolean | undefined;
                        failedReason?: string | undefined;
                    } | undefined;
                }): _67.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _67.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _67.QueryProposalsRequest;
                fromPartial(object: {
                    proposalStatus?: _66.ProposalStatus | undefined;
                    voter?: string | undefined;
                    depositor?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _67.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _67.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _67.QueryProposalsResponse;
                fromPartial(object: {
                    proposals?: {
                        id?: string | number | import("long").Long | undefined;
                        messages?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        }[] | undefined;
                        status?: _66.ProposalStatus | undefined;
                        finalTallyResult?: {
                            yesCount?: string | undefined;
                            abstainCount?: string | undefined;
                            noCount?: string | undefined;
                            noWithVetoCount?: string | undefined;
                        } | undefined;
                        submitTime?: Date | undefined;
                        depositEndTime?: Date | undefined;
                        totalDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        votingStartTime?: Date | undefined;
                        votingEndTime?: Date | undefined;
                        metadata?: string | undefined;
                        title?: string | undefined;
                        summary?: string | undefined;
                        proposer?: string | undefined;
                        expedited?: boolean | undefined;
                        failedReason?: string | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _67.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _67.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _67.QueryVoteRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    voter?: string | undefined;
                }): _67.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _67.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _67.QueryVoteResponse;
                fromPartial(object: {
                    vote?: {
                        proposalId?: string | number | import("long").Long | undefined;
                        voter?: string | undefined;
                        options?: {
                            option?: _66.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                        metadata?: string | undefined;
                    } | undefined;
                }): _67.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _67.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _67.QueryVotesRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _67.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _67.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _67.QueryVotesResponse;
                fromPartial(object: {
                    votes?: {
                        proposalId?: string | number | import("long").Long | undefined;
                        voter?: string | undefined;
                        options?: {
                            option?: _66.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                        metadata?: string | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _67.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _67.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _67.QueryParamsRequest;
                fromPartial(object: {
                    paramsType?: string | undefined;
                }): _67.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _67.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _67.QueryParamsResponse;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    depositParams?: {
                        minDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    tallyParams?: {
                        quorum?: string | undefined;
                        threshold?: string | undefined;
                        vetoThreshold?: string | undefined;
                    } | undefined;
                    params?: {
                        minDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        votingPeriod?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        quorum?: string | undefined;
                        threshold?: string | undefined;
                        vetoThreshold?: string | undefined;
                        minInitialDepositRatio?: string | undefined;
                        proposalCancelRatio?: string | undefined;
                        proposalCancelDest?: string | undefined;
                        expeditedVotingPeriod?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        expeditedThreshold?: string | undefined;
                        expeditedMinDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        burnVoteQuorum?: boolean | undefined;
                        burnProposalDepositPrevote?: boolean | undefined;
                        burnVoteVeto?: boolean | undefined;
                        minDepositRatio?: string | undefined;
                    } | undefined;
                }): _67.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _67.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _67.QueryDepositRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    depositor?: string | undefined;
                }): _67.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _67.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _67.QueryDepositResponse;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: string | number | import("long").Long | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }): _67.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _67.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _67.QueryDepositsRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _67.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _67.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _67.QueryDepositsResponse;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: string | number | import("long").Long | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _67.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _67.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _67.QueryTallyResultRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                }): _67.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _67.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _67.QueryTallyResultResponse;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string | undefined;
                        abstainCount?: string | undefined;
                        noCount?: string | undefined;
                        noWithVetoCount?: string | undefined;
                    } | undefined;
                }): _67.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _66.VoteOption;
            voteOptionToJSON(object: _66.VoteOption): string;
            proposalStatusFromJSON(object: any): _66.ProposalStatus;
            proposalStatusToJSON(object: _66.ProposalStatus): string;
            VoteOption: typeof _66.VoteOption;
            VoteOptionSDKType: typeof _66.VoteOption;
            ProposalStatus: typeof _66.ProposalStatus;
            ProposalStatusSDKType: typeof _66.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _66.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.WeightedVoteOption;
                fromPartial(object: {
                    option?: _66.VoteOption | undefined;
                    weight?: string | undefined;
                }): _66.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _66.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.Deposit;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    depositor?: string | undefined;
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _66.Deposit;
            };
            Proposal: {
                encode(message: _66.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.Proposal;
                fromPartial(object: {
                    id?: string | number | import("long").Long | undefined;
                    messages?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    }[] | undefined;
                    status?: _66.ProposalStatus | undefined;
                    finalTallyResult?: {
                        yesCount?: string | undefined;
                        abstainCount?: string | undefined;
                        noCount?: string | undefined;
                        noWithVetoCount?: string | undefined;
                    } | undefined;
                    submitTime?: Date | undefined;
                    depositEndTime?: Date | undefined;
                    totalDeposit?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    votingStartTime?: Date | undefined;
                    votingEndTime?: Date | undefined;
                    metadata?: string | undefined;
                    title?: string | undefined;
                    summary?: string | undefined;
                    proposer?: string | undefined;
                    expedited?: boolean | undefined;
                    failedReason?: string | undefined;
                }): _66.Proposal;
            };
            TallyResult: {
                encode(message: _66.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.TallyResult;
                fromPartial(object: {
                    yesCount?: string | undefined;
                    abstainCount?: string | undefined;
                    noCount?: string | undefined;
                    noWithVetoCount?: string | undefined;
                }): _66.TallyResult;
            };
            Vote: {
                encode(message: _66.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.Vote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    voter?: string | undefined;
                    options?: {
                        option?: _66.VoteOption | undefined;
                        weight?: string | undefined;
                    }[] | undefined;
                    metadata?: string | undefined;
                }): _66.Vote;
            };
            DepositParams: {
                encode(message: _66.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.DepositParams;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    maxDepositPeriod?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                }): _66.DepositParams;
            };
            VotingParams: {
                encode(message: _66.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.VotingParams;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                }): _66.VotingParams;
            };
            TallyParams: {
                encode(message: _66.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.TallyParams;
                fromPartial(object: {
                    quorum?: string | undefined;
                    threshold?: string | undefined;
                    vetoThreshold?: string | undefined;
                }): _66.TallyParams;
            };
            Params: {
                encode(message: _66.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.Params;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    maxDepositPeriod?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    votingPeriod?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    quorum?: string | undefined;
                    threshold?: string | undefined;
                    vetoThreshold?: string | undefined;
                    minInitialDepositRatio?: string | undefined;
                    proposalCancelRatio?: string | undefined;
                    proposalCancelDest?: string | undefined;
                    expeditedVotingPeriod?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    expeditedThreshold?: string | undefined;
                    expeditedMinDeposit?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    burnVoteQuorum?: boolean | undefined;
                    burnProposalDepositPrevote?: boolean | undefined;
                    burnVoteVeto?: boolean | undefined;
                    minDepositRatio?: string | undefined;
                }): _66.Params;
            };
            GenesisState: {
                encode(message: _65.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.GenesisState;
                fromPartial(object: {
                    startingProposalId?: string | number | import("long").Long | undefined;
                    deposits?: {
                        proposalId?: string | number | import("long").Long | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    votes?: {
                        proposalId?: string | number | import("long").Long | undefined;
                        voter?: string | undefined;
                        options?: {
                            option?: _66.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                        metadata?: string | undefined;
                    }[] | undefined;
                    proposals?: {
                        id?: string | number | import("long").Long | undefined;
                        messages?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        }[] | undefined;
                        status?: _66.ProposalStatus | undefined;
                        finalTallyResult?: {
                            yesCount?: string | undefined;
                            abstainCount?: string | undefined;
                            noCount?: string | undefined;
                            noWithVetoCount?: string | undefined;
                        } | undefined;
                        submitTime?: Date | undefined;
                        depositEndTime?: Date | undefined;
                        totalDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        votingStartTime?: Date | undefined;
                        votingEndTime?: Date | undefined;
                        metadata?: string | undefined;
                        title?: string | undefined;
                        summary?: string | undefined;
                        proposer?: string | undefined;
                        expedited?: boolean | undefined;
                        failedReason?: string | undefined;
                    }[] | undefined;
                    depositParams?: {
                        minDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    tallyParams?: {
                        quorum?: string | undefined;
                        threshold?: string | undefined;
                        vetoThreshold?: string | undefined;
                    } | undefined;
                    params?: {
                        minDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        votingPeriod?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        quorum?: string | undefined;
                        threshold?: string | undefined;
                        vetoThreshold?: string | undefined;
                        minInitialDepositRatio?: string | undefined;
                        proposalCancelRatio?: string | undefined;
                        proposalCancelDest?: string | undefined;
                        expeditedVotingPeriod?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        expeditedThreshold?: string | undefined;
                        expeditedMinDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        burnVoteQuorum?: boolean | undefined;
                        burnProposalDepositPrevote?: boolean | undefined;
                        burnVoteVeto?: boolean | undefined;
                        minDepositRatio?: string | undefined;
                    } | undefined;
                    constitution?: string | undefined;
                }): _65.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _321.MsgClientImpl;
            QueryClientImpl: typeof _301.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _71.QueryProposalRequest): Promise<_71.QueryProposalResponse>;
                proposals(request: _71.QueryProposalsRequest): Promise<_71.QueryProposalsResponse>;
                vote(request: _71.QueryVoteRequest): Promise<_71.QueryVoteResponse>;
                votes(request: _71.QueryVotesRequest): Promise<_71.QueryVotesResponse>;
                params(request: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                deposit(request: _71.QueryDepositRequest): Promise<_71.QueryDepositResponse>;
                deposits(request: _71.QueryDepositsRequest): Promise<_71.QueryDepositsResponse>;
                tallyResult(request: _71.QueryTallyResultRequest): Promise<_71.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _280.LCDQueryClient;
            MsgSubmitProposal: {
                encode(message: _72.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _72.MsgSubmitProposal;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    initialDeposit?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    proposer?: string | undefined;
                }): _72.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _72.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _72.MsgSubmitProposalResponse;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                }): _72.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _72.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _72.MsgVote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    voter?: string | undefined;
                    option?: _70.VoteOption | undefined;
                }): _72.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _72.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _72.MsgVoteResponse;
                fromPartial(_: {}): _72.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _72.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _72.MsgVoteWeighted;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    voter?: string | undefined;
                    options?: {
                        option?: _70.VoteOption | undefined;
                        weight?: string | undefined;
                    }[] | undefined;
                }): _72.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _72.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _72.MsgVoteWeightedResponse;
                fromPartial(_: {}): _72.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _72.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _72.MsgDeposit;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    depositor?: string | undefined;
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _72.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _72.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _72.MsgDepositResponse;
                fromPartial(_: {}): _72.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _71.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.QueryProposalRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                }): _71.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _71.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.QueryProposalResponse;
                fromPartial(object: {
                    proposal?: {
                        proposalId?: string | number | import("long").Long | undefined;
                        content?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: _70.ProposalStatus | undefined;
                        finalTallyResult?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            noWithVeto?: string | undefined;
                        } | undefined;
                        submitTime?: Date | undefined;
                        depositEndTime?: Date | undefined;
                        totalDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        votingStartTime?: Date | undefined;
                        votingEndTime?: Date | undefined;
                    } | undefined;
                }): _71.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _71.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.QueryProposalsRequest;
                fromPartial(object: {
                    proposalStatus?: _70.ProposalStatus | undefined;
                    voter?: string | undefined;
                    depositor?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _71.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _71.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.QueryProposalsResponse;
                fromPartial(object: {
                    proposals?: {
                        proposalId?: string | number | import("long").Long | undefined;
                        content?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: _70.ProposalStatus | undefined;
                        finalTallyResult?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            noWithVeto?: string | undefined;
                        } | undefined;
                        submitTime?: Date | undefined;
                        depositEndTime?: Date | undefined;
                        totalDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        votingStartTime?: Date | undefined;
                        votingEndTime?: Date | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _71.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _71.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.QueryVoteRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    voter?: string | undefined;
                }): _71.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _71.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.QueryVoteResponse;
                fromPartial(object: {
                    vote?: {
                        proposalId?: string | number | import("long").Long | undefined;
                        voter?: string | undefined;
                        option?: _70.VoteOption | undefined;
                        options?: {
                            option?: _70.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }): _71.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _71.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.QueryVotesRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _71.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _71.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.QueryVotesResponse;
                fromPartial(object: {
                    votes?: {
                        proposalId?: string | number | import("long").Long | undefined;
                        voter?: string | undefined;
                        option?: _70.VoteOption | undefined;
                        options?: {
                            option?: _70.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _71.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _71.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.QueryParamsRequest;
                fromPartial(object: {
                    paramsType?: string | undefined;
                }): _71.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _71.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.QueryParamsResponse;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    depositParams?: {
                        minDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    tallyParams?: {
                        quorum?: Uint8Array | undefined;
                        threshold?: Uint8Array | undefined;
                        vetoThreshold?: Uint8Array | undefined;
                    } | undefined;
                }): _71.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _71.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.QueryDepositRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    depositor?: string | undefined;
                }): _71.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _71.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.QueryDepositResponse;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: string | number | import("long").Long | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }): _71.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _71.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.QueryDepositsRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _71.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _71.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.QueryDepositsResponse;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: string | number | import("long").Long | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _71.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _71.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.QueryTallyResultRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                }): _71.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _71.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.QueryTallyResultResponse;
                fromPartial(object: {
                    tally?: {
                        yes?: string | undefined;
                        abstain?: string | undefined;
                        no?: string | undefined;
                        noWithVeto?: string | undefined;
                    } | undefined;
                }): _71.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _70.VoteOption;
            voteOptionToJSON(object: _70.VoteOption): string;
            proposalStatusFromJSON(object: any): _70.ProposalStatus;
            proposalStatusToJSON(object: _70.ProposalStatus): string;
            VoteOption: typeof _70.VoteOption;
            VoteOptionSDKType: typeof _70.VoteOption;
            ProposalStatus: typeof _70.ProposalStatus;
            ProposalStatusSDKType: typeof _70.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _70.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _70.WeightedVoteOption;
                fromPartial(object: {
                    option?: _70.VoteOption | undefined;
                    weight?: string | undefined;
                }): _70.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _70.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _70.TextProposal;
                fromPartial(object: {
                    title?: string | undefined;
                    description?: string | undefined;
                }): _70.TextProposal;
            };
            Deposit: {
                encode(message: _70.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _70.Deposit;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    depositor?: string | undefined;
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _70.Deposit;
            };
            Proposal: {
                encode(message: _70.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _70.Proposal;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    content?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    status?: _70.ProposalStatus | undefined;
                    finalTallyResult?: {
                        yes?: string | undefined;
                        abstain?: string | undefined;
                        no?: string | undefined;
                        noWithVeto?: string | undefined;
                    } | undefined;
                    submitTime?: Date | undefined;
                    depositEndTime?: Date | undefined;
                    totalDeposit?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    votingStartTime?: Date | undefined;
                    votingEndTime?: Date | undefined;
                }): _70.Proposal;
            };
            TallyResult: {
                encode(message: _70.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _70.TallyResult;
                fromPartial(object: {
                    yes?: string | undefined;
                    abstain?: string | undefined;
                    no?: string | undefined;
                    noWithVeto?: string | undefined;
                }): _70.TallyResult;
            };
            Vote: {
                encode(message: _70.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _70.Vote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    voter?: string | undefined;
                    option?: _70.VoteOption | undefined;
                    options?: {
                        option?: _70.VoteOption | undefined;
                        weight?: string | undefined;
                    }[] | undefined;
                }): _70.Vote;
            };
            DepositParams: {
                encode(message: _70.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _70.DepositParams;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    maxDepositPeriod?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                }): _70.DepositParams;
            };
            VotingParams: {
                encode(message: _70.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _70.VotingParams;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                }): _70.VotingParams;
            };
            TallyParams: {
                encode(message: _70.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _70.TallyParams;
                fromPartial(object: {
                    quorum?: Uint8Array | undefined;
                    threshold?: Uint8Array | undefined;
                    vetoThreshold?: Uint8Array | undefined;
                }): _70.TallyParams;
            };
            GenesisState: {
                encode(message: _69.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _69.GenesisState;
                fromPartial(object: {
                    startingProposalId?: string | number | import("long").Long | undefined;
                    deposits?: {
                        proposalId?: string | number | import("long").Long | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    votes?: {
                        proposalId?: string | number | import("long").Long | undefined;
                        voter?: string | undefined;
                        option?: _70.VoteOption | undefined;
                        options?: {
                            option?: _70.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    proposals?: {
                        proposalId?: string | number | import("long").Long | undefined;
                        content?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: _70.ProposalStatus | undefined;
                        finalTallyResult?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            noWithVeto?: string | undefined;
                        } | undefined;
                        submitTime?: Date | undefined;
                        depositEndTime?: Date | undefined;
                        totalDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        votingStartTime?: Date | undefined;
                        votingEndTime?: Date | undefined;
                    }[] | undefined;
                    depositParams?: {
                        minDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    tallyParams?: {
                        quorum?: Uint8Array | undefined;
                        threshold?: Uint8Array | undefined;
                        vetoThreshold?: Uint8Array | undefined;
                    } | undefined;
                }): _69.GenesisState;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _73.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _73.Module;
                    fromPartial(object: {
                        maxExecutionPeriod?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        maxMetadataLen?: string | number | import("long").Long | undefined;
                    }): _73.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _322.MsgClientImpl;
            QueryClientImpl: typeof _302.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _76.QueryGroupInfoRequest): Promise<_76.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _76.QueryGroupPolicyInfoRequest): Promise<_76.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _76.QueryGroupMembersRequest): Promise<_76.QueryGroupMembersResponse>;
                groupsByAdmin(request: _76.QueryGroupsByAdminRequest): Promise<_76.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _76.QueryGroupPoliciesByGroupRequest): Promise<_76.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _76.QueryGroupPoliciesByAdminRequest): Promise<_76.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _76.QueryProposalRequest): Promise<_76.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _76.QueryProposalsByGroupPolicyRequest): Promise<_76.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _76.QueryVoteByProposalVoterRequest): Promise<_76.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _76.QueryVotesByProposalRequest): Promise<_76.QueryVotesByProposalResponse>;
                votesByVoter(request: _76.QueryVotesByVoterRequest): Promise<_76.QueryVotesByVoterResponse>;
                groupsByMember(request: _76.QueryGroupsByMemberRequest): Promise<_76.QueryGroupsByMemberResponse>;
                tallyResult(request: _76.QueryTallyResultRequest): Promise<_76.QueryTallyResultResponse>;
                groups(request?: _76.QueryGroupsRequest | undefined): Promise<_76.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _281.LCDQueryClient;
            voteOptionFromJSON(object: any): _78.VoteOption;
            voteOptionToJSON(object: _78.VoteOption): string;
            proposalStatusFromJSON(object: any): _78.ProposalStatus;
            proposalStatusToJSON(object: _78.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _78.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _78.ProposalExecutorResult): string;
            VoteOption: typeof _78.VoteOption;
            VoteOptionSDKType: typeof _78.VoteOption;
            ProposalStatus: typeof _78.ProposalStatus;
            ProposalStatusSDKType: typeof _78.ProposalStatus;
            ProposalExecutorResult: typeof _78.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _78.ProposalExecutorResult;
            Member: {
                encode(message: _78.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _78.Member;
                fromPartial(object: {
                    address?: string | undefined;
                    weight?: string | undefined;
                    metadata?: string | undefined;
                    addedAt?: Date | undefined;
                }): _78.Member;
            };
            MemberRequest: {
                encode(message: _78.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _78.MemberRequest;
                fromPartial(object: {
                    address?: string | undefined;
                    weight?: string | undefined;
                    metadata?: string | undefined;
                }): _78.MemberRequest;
            };
            ThresholdDecisionPolicy: {
                encode(message: _78.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _78.ThresholdDecisionPolicy;
                fromPartial(object: {
                    threshold?: string | undefined;
                    windows?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        minExecutionPeriod?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                }): _78.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _78.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _78.PercentageDecisionPolicy;
                fromPartial(object: {
                    percentage?: string | undefined;
                    windows?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        minExecutionPeriod?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                }): _78.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _78.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _78.DecisionPolicyWindows;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    minExecutionPeriod?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                }): _78.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _78.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _78.GroupInfo;
                fromPartial(object: {
                    id?: string | number | import("long").Long | undefined;
                    admin?: string | undefined;
                    metadata?: string | undefined;
                    version?: string | number | import("long").Long | undefined;
                    totalWeight?: string | undefined;
                    createdAt?: Date | undefined;
                }): _78.GroupInfo;
            };
            GroupMember: {
                encode(message: _78.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _78.GroupMember;
                fromPartial(object: {
                    groupId?: string | number | import("long").Long | undefined;
                    member?: {
                        address?: string | undefined;
                        weight?: string | undefined;
                        metadata?: string | undefined;
                        addedAt?: Date | undefined;
                    } | undefined;
                }): _78.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _78.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _78.GroupPolicyInfo;
                fromPartial(object: {
                    address?: string | undefined;
                    groupId?: string | number | import("long").Long | undefined;
                    admin?: string | undefined;
                    metadata?: string | undefined;
                    version?: string | number | import("long").Long | undefined;
                    decisionPolicy?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    createdAt?: Date | undefined;
                }): _78.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _78.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _78.Proposal;
                fromPartial(object: {
                    id?: string | number | import("long").Long | undefined;
                    groupPolicyAddress?: string | undefined;
                    metadata?: string | undefined;
                    proposers?: string[] | undefined;
                    submitTime?: Date | undefined;
                    groupVersion?: string | number | import("long").Long | undefined;
                    groupPolicyVersion?: string | number | import("long").Long | undefined;
                    status?: _78.ProposalStatus | undefined;
                    finalTallyResult?: {
                        yesCount?: string | undefined;
                        abstainCount?: string | undefined;
                        noCount?: string | undefined;
                        noWithVetoCount?: string | undefined;
                    } | undefined;
                    votingPeriodEnd?: Date | undefined;
                    executorResult?: _78.ProposalExecutorResult | undefined;
                    messages?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    }[] | undefined;
                    title?: string | undefined;
                    summary?: string | undefined;
                }): _78.Proposal;
            };
            TallyResult: {
                encode(message: _78.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _78.TallyResult;
                fromPartial(object: {
                    yesCount?: string | undefined;
                    abstainCount?: string | undefined;
                    noCount?: string | undefined;
                    noWithVetoCount?: string | undefined;
                }): _78.TallyResult;
            };
            Vote: {
                encode(message: _78.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _78.Vote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    voter?: string | undefined;
                    option?: _78.VoteOption | undefined;
                    metadata?: string | undefined;
                    submitTime?: Date | undefined;
                }): _78.Vote;
            };
            execFromJSON(object: any): _77.Exec;
            execToJSON(object: _77.Exec): string;
            Exec: typeof _77.Exec;
            ExecSDKType: typeof _77.Exec;
            MsgCreateGroup: {
                encode(message: _77.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgCreateGroup;
                fromPartial(object: {
                    admin?: string | undefined;
                    members?: {
                        address?: string | undefined;
                        weight?: string | undefined;
                        metadata?: string | undefined;
                    }[] | undefined;
                    metadata?: string | undefined;
                }): _77.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _77.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgCreateGroupResponse;
                fromPartial(object: {
                    groupId?: string | number | import("long").Long | undefined;
                }): _77.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _77.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgUpdateGroupMembers;
                fromPartial(object: {
                    admin?: string | undefined;
                    groupId?: string | number | import("long").Long | undefined;
                    memberUpdates?: {
                        address?: string | undefined;
                        weight?: string | undefined;
                        metadata?: string | undefined;
                    }[] | undefined;
                }): _77.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _77.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgUpdateGroupMembersResponse;
                fromPartial(_: {}): _77.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _77.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgUpdateGroupAdmin;
                fromPartial(object: {
                    admin?: string | undefined;
                    groupId?: string | number | import("long").Long | undefined;
                    newAdmin?: string | undefined;
                }): _77.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _77.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgUpdateGroupAdminResponse;
                fromPartial(_: {}): _77.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _77.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgUpdateGroupMetadata;
                fromPartial(object: {
                    admin?: string | undefined;
                    groupId?: string | number | import("long").Long | undefined;
                    metadata?: string | undefined;
                }): _77.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _77.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgUpdateGroupMetadataResponse;
                fromPartial(_: {}): _77.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _77.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgCreateGroupPolicy;
                fromPartial(object: {
                    admin?: string | undefined;
                    groupId?: string | number | import("long").Long | undefined;
                    metadata?: string | undefined;
                    decisionPolicy?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }): _77.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _77.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgCreateGroupPolicyResponse;
                fromPartial(object: {
                    address?: string | undefined;
                }): _77.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _77.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: {
                    admin?: string | undefined;
                    groupPolicyAddress?: string | undefined;
                    newAdmin?: string | undefined;
                }): _77.MsgUpdateGroupPolicyAdmin;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _77.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: {}): _77.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _77.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgCreateGroupWithPolicy;
                fromPartial(object: {
                    admin?: string | undefined;
                    members?: {
                        address?: string | undefined;
                        weight?: string | undefined;
                        metadata?: string | undefined;
                    }[] | undefined;
                    groupMetadata?: string | undefined;
                    groupPolicyMetadata?: string | undefined;
                    groupPolicyAsAdmin?: boolean | undefined;
                    decisionPolicy?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }): _77.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _77.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: {
                    groupId?: string | number | import("long").Long | undefined;
                    groupPolicyAddress?: string | undefined;
                }): _77.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _77.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: {
                    admin?: string | undefined;
                    groupPolicyAddress?: string | undefined;
                    decisionPolicy?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }): _77.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _77.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: {}): _77.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _77.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: {
                    admin?: string | undefined;
                    groupPolicyAddress?: string | undefined;
                    metadata?: string | undefined;
                }): _77.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _77.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: {}): _77.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _77.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgSubmitProposal;
                fromPartial(object: {
                    groupPolicyAddress?: string | undefined;
                    proposers?: string[] | undefined;
                    metadata?: string | undefined;
                    messages?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    }[] | undefined;
                    exec?: _77.Exec | undefined;
                    title?: string | undefined;
                    summary?: string | undefined;
                }): _77.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _77.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgSubmitProposalResponse;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                }): _77.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _77.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgWithdrawProposal;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    address?: string | undefined;
                }): _77.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _77.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgWithdrawProposalResponse;
                fromPartial(_: {}): _77.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _77.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgVote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    voter?: string | undefined;
                    option?: _78.VoteOption | undefined;
                    metadata?: string | undefined;
                    exec?: _77.Exec | undefined;
                }): _77.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _77.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgVoteResponse;
                fromPartial(_: {}): _77.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _77.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgExec;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    executor?: string | undefined;
                }): _77.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _77.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgExecResponse;
                fromPartial(object: {
                    result?: _78.ProposalExecutorResult | undefined;
                }): _77.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _77.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgLeaveGroup;
                fromPartial(object: {
                    address?: string | undefined;
                    groupId?: string | number | import("long").Long | undefined;
                }): _77.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _77.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.MsgLeaveGroupResponse;
                fromPartial(_: {}): _77.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _76.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryGroupInfoRequest;
                fromPartial(object: {
                    groupId?: string | number | import("long").Long | undefined;
                }): _76.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _76.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryGroupInfoResponse;
                fromPartial(object: {
                    info?: {
                        id?: string | number | import("long").Long | undefined;
                        admin?: string | undefined;
                        metadata?: string | undefined;
                        version?: string | number | import("long").Long | undefined;
                        totalWeight?: string | undefined;
                        createdAt?: Date | undefined;
                    } | undefined;
                }): _76.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _76.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryGroupPolicyInfoRequest;
                fromPartial(object: {
                    address?: string | undefined;
                }): _76.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _76.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryGroupPolicyInfoResponse;
                fromPartial(object: {
                    info?: {
                        address?: string | undefined;
                        groupId?: string | number | import("long").Long | undefined;
                        admin?: string | undefined;
                        metadata?: string | undefined;
                        version?: string | number | import("long").Long | undefined;
                        decisionPolicy?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        createdAt?: Date | undefined;
                    } | undefined;
                }): _76.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _76.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryGroupMembersRequest;
                fromPartial(object: {
                    groupId?: string | number | import("long").Long | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _76.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _76.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryGroupMembersResponse;
                fromPartial(object: {
                    members?: {
                        groupId?: string | number | import("long").Long | undefined;
                        member?: {
                            address?: string | undefined;
                            weight?: string | undefined;
                            metadata?: string | undefined;
                            addedAt?: Date | undefined;
                        } | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _76.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _76.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryGroupsByAdminRequest;
                fromPartial(object: {
                    admin?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _76.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _76.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryGroupsByAdminResponse;
                fromPartial(object: {
                    groups?: {
                        id?: string | number | import("long").Long | undefined;
                        admin?: string | undefined;
                        metadata?: string | undefined;
                        version?: string | number | import("long").Long | undefined;
                        totalWeight?: string | undefined;
                        createdAt?: Date | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _76.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _76.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: {
                    groupId?: string | number | import("long").Long | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _76.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _76.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: {
                    groupPolicies?: {
                        address?: string | undefined;
                        groupId?: string | number | import("long").Long | undefined;
                        admin?: string | undefined;
                        metadata?: string | undefined;
                        version?: string | number | import("long").Long | undefined;
                        decisionPolicy?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        createdAt?: Date | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _76.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _76.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: {
                    admin?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _76.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _76.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: {
                    groupPolicies?: {
                        address?: string | undefined;
                        groupId?: string | number | import("long").Long | undefined;
                        admin?: string | undefined;
                        metadata?: string | undefined;
                        version?: string | number | import("long").Long | undefined;
                        decisionPolicy?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        createdAt?: Date | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _76.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _76.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryProposalRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                }): _76.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _76.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryProposalResponse;
                fromPartial(object: {
                    proposal?: {
                        id?: string | number | import("long").Long | undefined;
                        groupPolicyAddress?: string | undefined;
                        metadata?: string | undefined;
                        proposers?: string[] | undefined;
                        submitTime?: Date | undefined;
                        groupVersion?: string | number | import("long").Long | undefined;
                        groupPolicyVersion?: string | number | import("long").Long | undefined;
                        status?: _78.ProposalStatus | undefined;
                        finalTallyResult?: {
                            yesCount?: string | undefined;
                            abstainCount?: string | undefined;
                            noCount?: string | undefined;
                            noWithVetoCount?: string | undefined;
                        } | undefined;
                        votingPeriodEnd?: Date | undefined;
                        executorResult?: _78.ProposalExecutorResult | undefined;
                        messages?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        }[] | undefined;
                        title?: string | undefined;
                        summary?: string | undefined;
                    } | undefined;
                }): _76.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _76.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: {
                    address?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _76.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _76.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: {
                    proposals?: {
                        id?: string | number | import("long").Long | undefined;
                        groupPolicyAddress?: string | undefined;
                        metadata?: string | undefined;
                        proposers?: string[] | undefined;
                        submitTime?: Date | undefined;
                        groupVersion?: string | number | import("long").Long | undefined;
                        groupPolicyVersion?: string | number | import("long").Long | undefined;
                        status?: _78.ProposalStatus | undefined;
                        finalTallyResult?: {
                            yesCount?: string | undefined;
                            abstainCount?: string | undefined;
                            noCount?: string | undefined;
                            noWithVetoCount?: string | undefined;
                        } | undefined;
                        votingPeriodEnd?: Date | undefined;
                        executorResult?: _78.ProposalExecutorResult | undefined;
                        messages?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        }[] | undefined;
                        title?: string | undefined;
                        summary?: string | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _76.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _76.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryVoteByProposalVoterRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    voter?: string | undefined;
                }): _76.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _76.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryVoteByProposalVoterResponse;
                fromPartial(object: {
                    vote?: {
                        proposalId?: string | number | import("long").Long | undefined;
                        voter?: string | undefined;
                        option?: _78.VoteOption | undefined;
                        metadata?: string | undefined;
                        submitTime?: Date | undefined;
                    } | undefined;
                }): _76.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _76.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryVotesByProposalRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _76.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _76.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryVotesByProposalResponse;
                fromPartial(object: {
                    votes?: {
                        proposalId?: string | number | import("long").Long | undefined;
                        voter?: string | undefined;
                        option?: _78.VoteOption | undefined;
                        metadata?: string | undefined;
                        submitTime?: Date | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _76.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _76.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryVotesByVoterRequest;
                fromPartial(object: {
                    voter?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _76.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _76.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryVotesByVoterResponse;
                fromPartial(object: {
                    votes?: {
                        proposalId?: string | number | import("long").Long | undefined;
                        voter?: string | undefined;
                        option?: _78.VoteOption | undefined;
                        metadata?: string | undefined;
                        submitTime?: Date | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _76.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _76.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryGroupsByMemberRequest;
                fromPartial(object: {
                    address?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _76.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _76.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryGroupsByMemberResponse;
                fromPartial(object: {
                    groups?: {
                        id?: string | number | import("long").Long | undefined;
                        admin?: string | undefined;
                        metadata?: string | undefined;
                        version?: string | number | import("long").Long | undefined;
                        totalWeight?: string | undefined;
                        createdAt?: Date | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _76.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _76.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryTallyResultRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                }): _76.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _76.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryTallyResultResponse;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string | undefined;
                        abstainCount?: string | undefined;
                        noCount?: string | undefined;
                        noWithVetoCount?: string | undefined;
                    } | undefined;
                }): _76.QueryTallyResultResponse;
            };
            QueryGroupsRequest: {
                encode(message: _76.QueryGroupsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryGroupsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _76.QueryGroupsRequest;
            };
            QueryGroupsResponse: {
                encode(message: _76.QueryGroupsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.QueryGroupsResponse;
                fromPartial(object: {
                    groups?: {
                        id?: string | number | import("long").Long | undefined;
                        admin?: string | undefined;
                        metadata?: string | undefined;
                        version?: string | number | import("long").Long | undefined;
                        totalWeight?: string | undefined;
                        createdAt?: Date | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _76.QueryGroupsResponse;
            };
            GenesisState: {
                encode(message: _75.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _75.GenesisState;
                fromPartial(object: {
                    groupSeq?: string | number | import("long").Long | undefined;
                    groups?: {
                        id?: string | number | import("long").Long | undefined;
                        admin?: string | undefined;
                        metadata?: string | undefined;
                        version?: string | number | import("long").Long | undefined;
                        totalWeight?: string | undefined;
                        createdAt?: Date | undefined;
                    }[] | undefined;
                    groupMembers?: {
                        groupId?: string | number | import("long").Long | undefined;
                        member?: {
                            address?: string | undefined;
                            weight?: string | undefined;
                            metadata?: string | undefined;
                            addedAt?: Date | undefined;
                        } | undefined;
                    }[] | undefined;
                    groupPolicySeq?: string | number | import("long").Long | undefined;
                    groupPolicies?: {
                        address?: string | undefined;
                        groupId?: string | number | import("long").Long | undefined;
                        admin?: string | undefined;
                        metadata?: string | undefined;
                        version?: string | number | import("long").Long | undefined;
                        decisionPolicy?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        createdAt?: Date | undefined;
                    }[] | undefined;
                    proposalSeq?: string | number | import("long").Long | undefined;
                    proposals?: {
                        id?: string | number | import("long").Long | undefined;
                        groupPolicyAddress?: string | undefined;
                        metadata?: string | undefined;
                        proposers?: string[] | undefined;
                        submitTime?: Date | undefined;
                        groupVersion?: string | number | import("long").Long | undefined;
                        groupPolicyVersion?: string | number | import("long").Long | undefined;
                        status?: _78.ProposalStatus | undefined;
                        finalTallyResult?: {
                            yesCount?: string | undefined;
                            abstainCount?: string | undefined;
                            noCount?: string | undefined;
                            noWithVetoCount?: string | undefined;
                        } | undefined;
                        votingPeriodEnd?: Date | undefined;
                        executorResult?: _78.ProposalExecutorResult | undefined;
                        messages?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        }[] | undefined;
                        title?: string | undefined;
                        summary?: string | undefined;
                    }[] | undefined;
                    votes?: {
                        proposalId?: string | number | import("long").Long | undefined;
                        voter?: string | undefined;
                        option?: _78.VoteOption | undefined;
                        metadata?: string | undefined;
                        submitTime?: Date | undefined;
                    }[] | undefined;
                }): _75.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _74.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.EventCreateGroup;
                fromPartial(object: {
                    groupId?: string | number | import("long").Long | undefined;
                }): _74.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _74.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.EventUpdateGroup;
                fromPartial(object: {
                    groupId?: string | number | import("long").Long | undefined;
                }): _74.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _74.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.EventCreateGroupPolicy;
                fromPartial(object: {
                    address?: string | undefined;
                }): _74.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _74.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.EventUpdateGroupPolicy;
                fromPartial(object: {
                    address?: string | undefined;
                }): _74.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _74.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.EventSubmitProposal;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                }): _74.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _74.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.EventWithdrawProposal;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                }): _74.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _74.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.EventVote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                }): _74.EventVote;
            };
            EventExec: {
                encode(message: _74.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.EventExec;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    result?: _78.ProposalExecutorResult | undefined;
                    logs?: string | undefined;
                }): _74.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _74.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.EventLeaveGroup;
                fromPartial(object: {
                    groupId?: string | number | import("long").Long | undefined;
                    address?: string | undefined;
                }): _74.EventLeaveGroup;
            };
            EventProposalPruned: {
                encode(message: _74.EventProposalPruned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.EventProposalPruned;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long | undefined;
                    status?: _78.ProposalStatus | undefined;
                    tallyResult?: {
                        yesCount?: string | undefined;
                        abstainCount?: string | undefined;
                        noCount?: string | undefined;
                        noWithVetoCount?: string | undefined;
                    } | undefined;
                }): _74.EventProposalPruned;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _79.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _79.Module;
                    fromPartial(object: {
                        feeCollectorName?: string | undefined;
                        authority?: string | undefined;
                    }): _79.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _323.MsgClientImpl;
            QueryClientImpl: typeof _303.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _82.QueryParamsRequest | undefined): Promise<_82.QueryParamsResponse>;
                inflation(request?: _82.QueryInflationRequest | undefined): Promise<_82.QueryInflationResponse>;
                annualProvisions(request?: _82.QueryAnnualProvisionsRequest | undefined): Promise<_82.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _282.LCDQueryClient;
            MsgUpdateParams: {
                encode(message: _83.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _83.MsgUpdateParams;
                fromPartial(object: {
                    authority?: string | undefined;
                    params?: {
                        mintDenom?: string | undefined;
                        inflationRateChange?: string | undefined;
                        inflationMax?: string | undefined;
                        inflationMin?: string | undefined;
                        goalBonded?: string | undefined;
                        blocksPerYear?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _83.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _83.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _83.MsgUpdateParamsResponse;
                fromPartial(_: {}): _83.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _82.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _82.QueryParamsRequest;
                fromPartial(_: {}): _82.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _82.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _82.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string | undefined;
                        inflationRateChange?: string | undefined;
                        inflationMax?: string | undefined;
                        inflationMin?: string | undefined;
                        goalBonded?: string | undefined;
                        blocksPerYear?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _82.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _82.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _82.QueryInflationRequest;
                fromPartial(_: {}): _82.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _82.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _82.QueryInflationResponse;
                fromPartial(object: {
                    inflation?: Uint8Array | undefined;
                }): _82.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _82.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _82.QueryAnnualProvisionsRequest;
                fromPartial(_: {}): _82.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _82.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _82.QueryAnnualProvisionsResponse;
                fromPartial(object: {
                    annualProvisions?: Uint8Array | undefined;
                }): _82.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _81.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _81.Minter;
                fromPartial(object: {
                    inflation?: string | undefined;
                    annualProvisions?: string | undefined;
                }): _81.Minter;
            };
            Params: {
                encode(message: _81.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _81.Params;
                fromPartial(object: {
                    mintDenom?: string | undefined;
                    inflationRateChange?: string | undefined;
                    inflationMax?: string | undefined;
                    inflationMin?: string | undefined;
                    goalBonded?: string | undefined;
                    blocksPerYear?: string | number | import("long").Long | undefined;
                }): _81.Params;
            };
            GenesisState: {
                encode(message: _80.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _80.GenesisState;
                fromPartial(object: {
                    minter?: {
                        inflation?: string | undefined;
                        annualProvisions?: string | undefined;
                    } | undefined;
                    params?: {
                        mintDenom?: string | undefined;
                        inflationRateChange?: string | undefined;
                        inflationMax?: string | undefined;
                        inflationMin?: string | undefined;
                        goalBonded?: string | undefined;
                        blocksPerYear?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _80.GenesisState;
            };
        };
    }
    namespace msg {
        namespace textual {
            const v1: {};
        }
        const v1: {};
    }
    namespace nft {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _86.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _86.Module;
                    fromPartial(_: {}): _86.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _324.MsgClientImpl;
            QueryClientImpl: typeof _304.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _90.QueryBalanceRequest): Promise<_90.QueryBalanceResponse>;
                owner(request: _90.QueryOwnerRequest): Promise<_90.QueryOwnerResponse>;
                supply(request: _90.QuerySupplyRequest): Promise<_90.QuerySupplyResponse>;
                nFTs(request: _90.QueryNFTsRequest): Promise<_90.QueryNFTsResponse>;
                nFT(request: _90.QueryNFTRequest): Promise<_90.QueryNFTResponse>;
                class(request: _90.QueryClassRequest): Promise<_90.QueryClassResponse>;
                classes(request?: _90.QueryClassesRequest | undefined): Promise<_90.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _283.LCDQueryClient;
            MsgSend: {
                encode(message: _91.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.MsgSend;
                fromPartial(object: {
                    classId?: string | undefined;
                    id?: string | undefined;
                    sender?: string | undefined;
                    receiver?: string | undefined;
                }): _91.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _91.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.MsgSendResponse;
                fromPartial(_: {}): _91.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _90.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.QueryBalanceRequest;
                fromPartial(object: {
                    classId?: string | undefined;
                    owner?: string | undefined;
                }): _90.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _90.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.QueryBalanceResponse;
                fromPartial(object: {
                    amount?: string | number | import("long").Long | undefined;
                }): _90.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _90.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.QueryOwnerRequest;
                fromPartial(object: {
                    classId?: string | undefined;
                    id?: string | undefined;
                }): _90.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _90.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.QueryOwnerResponse;
                fromPartial(object: {
                    owner?: string | undefined;
                }): _90.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _90.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.QuerySupplyRequest;
                fromPartial(object: {
                    classId?: string | undefined;
                }): _90.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _90.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.QuerySupplyResponse;
                fromPartial(object: {
                    amount?: string | number | import("long").Long | undefined;
                }): _90.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _90.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.QueryNFTsRequest;
                fromPartial(object: {
                    classId?: string | undefined;
                    owner?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _90.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _90.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.QueryNFTsResponse;
                fromPartial(object: {
                    nfts?: {
                        classId?: string | undefined;
                        id?: string | undefined;
                        uri?: string | undefined;
                        uriHash?: string | undefined;
                        data?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _90.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _90.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.QueryNFTRequest;
                fromPartial(object: {
                    classId?: string | undefined;
                    id?: string | undefined;
                }): _90.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _90.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.QueryNFTResponse;
                fromPartial(object: {
                    nft?: {
                        classId?: string | undefined;
                        id?: string | undefined;
                        uri?: string | undefined;
                        uriHash?: string | undefined;
                        data?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                }): _90.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _90.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.QueryClassRequest;
                fromPartial(object: {
                    classId?: string | undefined;
                }): _90.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _90.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.QueryClassResponse;
                fromPartial(object: {
                    class?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        description?: string | undefined;
                        uri?: string | undefined;
                        uriHash?: string | undefined;
                        data?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                }): _90.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _90.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.QueryClassesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _90.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _90.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.QueryClassesResponse;
                fromPartial(object: {
                    classes?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        description?: string | undefined;
                        uri?: string | undefined;
                        uriHash?: string | undefined;
                        data?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _90.QueryClassesResponse;
            };
            Class: {
                encode(message: _89.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.Class;
                fromPartial(object: {
                    id?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    description?: string | undefined;
                    uri?: string | undefined;
                    uriHash?: string | undefined;
                    data?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }): _89.Class;
            };
            NFT: {
                encode(message: _89.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.NFT;
                fromPartial(object: {
                    classId?: string | undefined;
                    id?: string | undefined;
                    uri?: string | undefined;
                    uriHash?: string | undefined;
                    data?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }): _89.NFT;
            };
            GenesisState: {
                encode(message: _88.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.GenesisState;
                fromPartial(object: {
                    classes?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        description?: string | undefined;
                        uri?: string | undefined;
                        uriHash?: string | undefined;
                        data?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                    }[] | undefined;
                    entries?: {
                        owner?: string | undefined;
                        nfts?: {
                            classId?: string | undefined;
                            id?: string | undefined;
                            uri?: string | undefined;
                            uriHash?: string | undefined;
                            data?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            } | undefined;
                        }[] | undefined;
                    }[] | undefined;
                }): _88.GenesisState;
            };
            Entry: {
                encode(message: _88.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.Entry;
                fromPartial(object: {
                    owner?: string | undefined;
                    nfts?: {
                        classId?: string | undefined;
                        id?: string | undefined;
                        uri?: string | undefined;
                        uriHash?: string | undefined;
                        data?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                    }[] | undefined;
                }): _88.Entry;
            };
            EventSend: {
                encode(message: _87.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.EventSend;
                fromPartial(object: {
                    classId?: string | undefined;
                    id?: string | undefined;
                    sender?: string | undefined;
                    receiver?: string | undefined;
                }): _87.EventSend;
            };
            EventMint: {
                encode(message: _87.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.EventMint;
                fromPartial(object: {
                    classId?: string | undefined;
                    id?: string | undefined;
                    owner?: string | undefined;
                }): _87.EventMint;
            };
            EventBurn: {
                encode(message: _87.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.EventBurn;
                fromPartial(object: {
                    classId?: string | undefined;
                    id?: string | undefined;
                    owner?: string | undefined;
                }): _87.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _92.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.Module;
                    fromPartial(_: {}): _92.Module;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _305.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _93.GetRequest): Promise<_93.GetResponse>;
                    list(request: _93.ListRequest): Promise<_93.ListResponse>;
                };
                GetRequest: {
                    encode(message: _93.GetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.GetRequest;
                    fromPartial(object: {
                        messageName?: string | undefined;
                        index?: string | undefined;
                        values?: {
                            uint?: string | number | import("long").Long | undefined;
                            int?: string | number | import("long").Long | undefined;
                            str?: string | undefined;
                            bytes?: Uint8Array | undefined;
                            enum?: string | undefined;
                            bool?: boolean | undefined;
                            timestamp?: Date | undefined;
                            duration?: {
                                seconds?: string | number | import("long").Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        }[] | undefined;
                    }): _93.GetRequest;
                };
                GetResponse: {
                    encode(message: _93.GetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.GetResponse;
                    fromPartial(object: {
                        result?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                    }): _93.GetResponse;
                };
                ListRequest: {
                    encode(message: _93.ListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.ListRequest;
                    fromPartial(object: {
                        messageName?: string | undefined;
                        index?: string | undefined;
                        prefix?: {
                            values?: {
                                uint?: string | number | import("long").Long | undefined;
                                int?: string | number | import("long").Long | undefined;
                                str?: string | undefined;
                                bytes?: Uint8Array | undefined;
                                enum?: string | undefined;
                                bool?: boolean | undefined;
                                timestamp?: Date | undefined;
                                duration?: {
                                    seconds?: string | number | import("long").Long | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                            }[] | undefined;
                        } | undefined;
                        range?: {
                            start?: {
                                uint?: string | number | import("long").Long | undefined;
                                int?: string | number | import("long").Long | undefined;
                                str?: string | undefined;
                                bytes?: Uint8Array | undefined;
                                enum?: string | undefined;
                                bool?: boolean | undefined;
                                timestamp?: Date | undefined;
                                duration?: {
                                    seconds?: string | number | import("long").Long | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                            }[] | undefined;
                            end?: {
                                uint?: string | number | import("long").Long | undefined;
                                int?: string | number | import("long").Long | undefined;
                                str?: string | undefined;
                                bytes?: Uint8Array | undefined;
                                enum?: string | undefined;
                                bool?: boolean | undefined;
                                timestamp?: Date | undefined;
                                duration?: {
                                    seconds?: string | number | import("long").Long | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                            }[] | undefined;
                        } | undefined;
                        pagination?: {
                            key?: Uint8Array | undefined;
                            offset?: string | number | import("long").Long | undefined;
                            limit?: string | number | import("long").Long | undefined;
                            countTotal?: boolean | undefined;
                            reverse?: boolean | undefined;
                        } | undefined;
                    }): _93.ListRequest;
                };
                ListRequest_Prefix: {
                    encode(message: _93.ListRequest_Prefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.ListRequest_Prefix;
                    fromPartial(object: {
                        values?: {
                            uint?: string | number | import("long").Long | undefined;
                            int?: string | number | import("long").Long | undefined;
                            str?: string | undefined;
                            bytes?: Uint8Array | undefined;
                            enum?: string | undefined;
                            bool?: boolean | undefined;
                            timestamp?: Date | undefined;
                            duration?: {
                                seconds?: string | number | import("long").Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        }[] | undefined;
                    }): _93.ListRequest_Prefix;
                };
                ListRequest_Range: {
                    encode(message: _93.ListRequest_Range, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.ListRequest_Range;
                    fromPartial(object: {
                        start?: {
                            uint?: string | number | import("long").Long | undefined;
                            int?: string | number | import("long").Long | undefined;
                            str?: string | undefined;
                            bytes?: Uint8Array | undefined;
                            enum?: string | undefined;
                            bool?: boolean | undefined;
                            timestamp?: Date | undefined;
                            duration?: {
                                seconds?: string | number | import("long").Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        }[] | undefined;
                        end?: {
                            uint?: string | number | import("long").Long | undefined;
                            int?: string | number | import("long").Long | undefined;
                            str?: string | undefined;
                            bytes?: Uint8Array | undefined;
                            enum?: string | undefined;
                            bool?: boolean | undefined;
                            timestamp?: Date | undefined;
                            duration?: {
                                seconds?: string | number | import("long").Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        }[] | undefined;
                    }): _93.ListRequest_Range;
                };
                ListResponse: {
                    encode(message: _93.ListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.ListResponse;
                    fromPartial(object: {
                        results?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        }[] | undefined;
                        pagination?: {
                            nextKey?: Uint8Array | undefined;
                            total?: string | number | import("long").Long | undefined;
                        } | undefined;
                    }): _93.ListResponse;
                };
                IndexValue: {
                    encode(message: _93.IndexValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.IndexValue;
                    fromPartial(object: {
                        uint?: string | number | import("long").Long | undefined;
                        int?: string | number | import("long").Long | undefined;
                        str?: string | undefined;
                        bytes?: Uint8Array | undefined;
                        enum?: string | undefined;
                        bool?: boolean | undefined;
                        timestamp?: Date | undefined;
                        duration?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    }): _93.IndexValue;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _94.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _94.TableDescriptor;
                fromPartial(object: {
                    primaryKey?: {
                        fields?: string | undefined;
                        autoIncrement?: boolean | undefined;
                    } | undefined;
                    index?: {
                        fields?: string | undefined;
                        id?: number | undefined;
                        unique?: boolean | undefined;
                    }[] | undefined;
                    id?: number | undefined;
                }): _94.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _94.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _94.PrimaryKeyDescriptor;
                fromPartial(object: {
                    fields?: string | undefined;
                    autoIncrement?: boolean | undefined;
                }): _94.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _94.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _94.SecondaryIndexDescriptor;
                fromPartial(object: {
                    fields?: string | undefined;
                    id?: number | undefined;
                    unique?: boolean | undefined;
                }): _94.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _94.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _94.SingletonDescriptor;
                fromPartial(object: {
                    id?: number | undefined;
                }): _94.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _95.StorageType;
            storageTypeToJSON(object: _95.StorageType): string;
            StorageType: typeof _95.StorageType;
            StorageTypeSDKType: typeof _95.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _95.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _95.ModuleSchemaDescriptor;
                fromPartial(object: {
                    schemaFile?: {
                        id?: number | undefined;
                        protoFileName?: string | undefined;
                        storageType?: _95.StorageType | undefined;
                    }[] | undefined;
                    prefix?: Uint8Array | undefined;
                }): _95.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _95.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _95.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: {
                    id?: number | undefined;
                    protoFileName?: string | undefined;
                    storageType?: _95.StorageType | undefined;
                }): _95.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _96.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _96.Module;
                    fromPartial(_: {}): _96.Module;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _306.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                subspaces(request?: _98.QuerySubspacesRequest | undefined): Promise<_98.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _284.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _98.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _98.QueryParamsRequest;
                fromPartial(object: {
                    subspace?: string | undefined;
                    key?: string | undefined;
                }): _98.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _98.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _98.QueryParamsResponse;
                fromPartial(object: {
                    param?: {
                        subspace?: string | undefined;
                        key?: string | undefined;
                        value?: string | undefined;
                    } | undefined;
                }): _98.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _98.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _98.QuerySubspacesRequest;
                fromPartial(_: {}): _98.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _98.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _98.QuerySubspacesResponse;
                fromPartial(object: {
                    subspaces?: {
                        subspace?: string | undefined;
                        keys?: string[] | undefined;
                    }[] | undefined;
                }): _98.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _98.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _98.Subspace;
                fromPartial(object: {
                    subspace?: string | undefined;
                    keys?: string[] | undefined;
                }): _98.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _97.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _97.ParameterChangeProposal;
                fromPartial(object: {
                    title?: string | undefined;
                    description?: string | undefined;
                    changes?: {
                        subspace?: string | undefined;
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }): _97.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _97.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _97.ParamChange;
                fromPartial(object: {
                    subspace?: string | undefined;
                    key?: string | undefined;
                    value?: string | undefined;
                }): _97.ParamChange;
            };
        };
    }
    namespace query {
        const v1: {};
    }
    namespace reflection {
        const v1: {
            FileDescriptorsRequest: {
                encode(_: _100.FileDescriptorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.FileDescriptorsRequest;
                fromPartial(_: {}): _100.FileDescriptorsRequest;
            };
            FileDescriptorsResponse: {
                encode(message: _100.FileDescriptorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.FileDescriptorsResponse;
                fromPartial(object: {
                    files?: {
                        name?: string | undefined;
                        package?: string | undefined;
                        dependency?: string[] | undefined;
                        publicDependency?: number[] | undefined;
                        weakDependency?: number[] | undefined;
                        messageType?: {
                            name?: string | undefined;
                            field?: {
                                name?: string | undefined;
                                number?: number | undefined;
                                label?: import("@dydxprotocol/v4-proto/src/codegen/google/protobuf/descriptor").FieldDescriptorProto_Label | undefined;
                                type?: import("@dydxprotocol/v4-proto/src/codegen/google/protobuf/descriptor").FieldDescriptorProto_Type | undefined;
                                typeName?: string | undefined;
                                extendee?: string | undefined;
                                defaultValue?: string | undefined;
                                oneofIndex?: number | undefined;
                                jsonName?: string | undefined;
                                options?: {
                                    ctype?: import("@dydxprotocol/v4-proto/src/codegen/google/protobuf/descriptor").FieldOptions_CType | undefined;
                                    packed?: boolean | undefined;
                                    jstype?: import("@dydxprotocol/v4-proto/src/codegen/google/protobuf/descriptor").FieldOptions_JSType | undefined;
                                    lazy?: boolean | undefined;
                                    deprecated?: boolean | undefined;
                                    weak?: boolean | undefined;
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string | undefined;
                                            isExtension?: boolean | undefined;
                                        }[] | undefined;
                                        identifierValue?: string | undefined;
                                        positiveIntValue?: string | number | import("long").Long | undefined;
                                        negativeIntValue?: string | number | import("long").Long | undefined;
                                        doubleValue?: number | undefined;
                                        stringValue?: Uint8Array | undefined;
                                        aggregateValue?: string | undefined;
                                    }[] | undefined;
                                } | undefined;
                            }[] | undefined;
                            extension?: {
                                name?: string | undefined;
                                number?: number | undefined;
                                label?: import("@dydxprotocol/v4-proto/src/codegen/google/protobuf/descriptor").FieldDescriptorProto_Label | undefined;
                                type?: import("@dydxprotocol/v4-proto/src/codegen/google/protobuf/descriptor").FieldDescriptorProto_Type | undefined;
                                typeName?: string | undefined;
                                extendee?: string | undefined;
                                defaultValue?: string | undefined;
                                oneofIndex?: number | undefined;
                                jsonName?: string | undefined;
                                options?: {
                                    ctype?: import("@dydxprotocol/v4-proto/src/codegen/google/protobuf/descriptor").FieldOptions_CType | undefined;
                                    packed?: boolean | undefined;
                                    jstype?: import("@dydxprotocol/v4-proto/src/codegen/google/protobuf/descriptor").FieldOptions_JSType | undefined;
                                    lazy?: boolean | undefined;
                                    deprecated?: boolean | undefined;
                                    weak?: boolean | undefined;
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string | undefined;
                                            isExtension?: boolean | undefined;
                                        }[] | undefined;
                                        identifierValue?: string | undefined;
                                        positiveIntValue?: string | number | import("long").Long | undefined;
                                        negativeIntValue?: string | number | import("long").Long | undefined;
                                        doubleValue?: number | undefined;
                                        stringValue?: Uint8Array | undefined;
                                        aggregateValue?: string | undefined;
                                    }[] | undefined;
                                } | undefined;
                            }[] | undefined;
                            nestedType?: any[] | undefined;
                            enumType?: {
                                name?: string | undefined;
                                value?: {
                                    name?: string | undefined;
                                    number?: number | undefined;
                                    options?: {
                                        deprecated?: boolean | undefined;
                                        uninterpretedOption?: {
                                            name?: {
                                                namePart?: string | undefined;
                                                isExtension?: boolean | undefined;
                                            }[] | undefined;
                                            identifierValue?: string | undefined;
                                            positiveIntValue?: string | number | import("long").Long | undefined;
                                            negativeIntValue?: string | number | import("long").Long | undefined;
                                            doubleValue?: number | undefined;
                                            stringValue?: Uint8Array | undefined;
                                            aggregateValue?: string | undefined;
                                        }[] | undefined;
                                    } | undefined;
                                }[] | undefined;
                                options?: {
                                    allowAlias?: boolean | undefined;
                                    deprecated?: boolean | undefined;
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string | undefined;
                                            isExtension?: boolean | undefined;
                                        }[] | undefined;
                                        identifierValue?: string | undefined;
                                        positiveIntValue?: string | number | import("long").Long | undefined;
                                        negativeIntValue?: string | number | import("long").Long | undefined;
                                        doubleValue?: number | undefined;
                                        stringValue?: Uint8Array | undefined;
                                        aggregateValue?: string | undefined;
                                    }[] | undefined;
                                } | undefined;
                                reservedRange?: {
                                    start?: number | undefined;
                                    end?: number | undefined;
                                }[] | undefined;
                                reservedName?: string[] | undefined;
                            }[] | undefined;
                            extensionRange?: {
                                start?: number | undefined;
                                end?: number | undefined;
                                options?: {
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string | undefined;
                                            isExtension?: boolean | undefined;
                                        }[] | undefined;
                                        identifierValue?: string | undefined;
                                        positiveIntValue?: string | number | import("long").Long | undefined;
                                        negativeIntValue?: string | number | import("long").Long | undefined;
                                        doubleValue?: number | undefined;
                                        stringValue?: Uint8Array | undefined;
                                        aggregateValue?: string | undefined;
                                    }[] | undefined;
                                } | undefined;
                            }[] | undefined;
                            oneofDecl?: {
                                name?: string | undefined;
                                options?: {
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string | undefined;
                                            isExtension?: boolean | undefined;
                                        }[] | undefined;
                                        identifierValue?: string | undefined;
                                        positiveIntValue?: string | number | import("long").Long | undefined;
                                        negativeIntValue?: string | number | import("long").Long | undefined;
                                        doubleValue?: number | undefined;
                                        stringValue?: Uint8Array | undefined;
                                        aggregateValue?: string | undefined;
                                    }[] | undefined;
                                } | undefined;
                            }[] | undefined;
                            options?: {
                                messageSetWireFormat?: boolean | undefined;
                                noStandardDescriptorAccessor?: boolean | undefined;
                                deprecated?: boolean | undefined;
                                mapEntry?: boolean | undefined;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string | undefined;
                                        isExtension?: boolean | undefined;
                                    }[] | undefined;
                                    identifierValue?: string | undefined;
                                    positiveIntValue?: string | number | import("long").Long | undefined;
                                    negativeIntValue?: string | number | import("long").Long | undefined;
                                    doubleValue?: number | undefined;
                                    stringValue?: Uint8Array | undefined;
                                    aggregateValue?: string | undefined;
                                }[] | undefined;
                            } | undefined;
                            reservedRange?: {
                                start?: number | undefined;
                                end?: number | undefined;
                            }[] | undefined;
                            reservedName?: string[] | undefined;
                        }[] | undefined;
                        enumType?: {
                            name?: string | undefined;
                            value?: {
                                name?: string | undefined;
                                number?: number | undefined;
                                options?: {
                                    deprecated?: boolean | undefined;
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string | undefined;
                                            isExtension?: boolean | undefined;
                                        }[] | undefined;
                                        identifierValue?: string | undefined;
                                        positiveIntValue?: string | number | import("long").Long | undefined;
                                        negativeIntValue?: string | number | import("long").Long | undefined;
                                        doubleValue?: number | undefined;
                                        stringValue?: Uint8Array | undefined;
                                        aggregateValue?: string | undefined;
                                    }[] | undefined;
                                } | undefined;
                            }[] | undefined;
                            options?: {
                                allowAlias?: boolean | undefined;
                                deprecated?: boolean | undefined;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string | undefined;
                                        isExtension?: boolean | undefined;
                                    }[] | undefined;
                                    identifierValue?: string | undefined;
                                    positiveIntValue?: string | number | import("long").Long | undefined;
                                    negativeIntValue?: string | number | import("long").Long | undefined;
                                    doubleValue?: number | undefined;
                                    stringValue?: Uint8Array | undefined;
                                    aggregateValue?: string | undefined;
                                }[] | undefined;
                            } | undefined;
                            reservedRange?: {
                                start?: number | undefined;
                                end?: number | undefined;
                            }[] | undefined;
                            reservedName?: string[] | undefined;
                        }[] | undefined;
                        service?: {
                            name?: string | undefined;
                            method?: {
                                name?: string | undefined;
                                inputType?: string | undefined;
                                outputType?: string | undefined;
                                options?: {
                                    deprecated?: boolean | undefined;
                                    idempotencyLevel?: import("@dydxprotocol/v4-proto/src/codegen/google/protobuf/descriptor").MethodOptions_IdempotencyLevel | undefined;
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string | undefined;
                                            isExtension?: boolean | undefined;
                                        }[] | undefined;
                                        identifierValue?: string | undefined;
                                        positiveIntValue?: string | number | import("long").Long | undefined;
                                        negativeIntValue?: string | number | import("long").Long | undefined;
                                        doubleValue?: number | undefined;
                                        stringValue?: Uint8Array | undefined;
                                        aggregateValue?: string | undefined;
                                    }[] | undefined;
                                } | undefined;
                                clientStreaming?: boolean | undefined;
                                serverStreaming?: boolean | undefined;
                            }[] | undefined;
                            options?: {
                                deprecated?: boolean | undefined;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string | undefined;
                                        isExtension?: boolean | undefined;
                                    }[] | undefined;
                                    identifierValue?: string | undefined;
                                    positiveIntValue?: string | number | import("long").Long | undefined;
                                    negativeIntValue?: string | number | import("long").Long | undefined;
                                    doubleValue?: number | undefined;
                                    stringValue?: Uint8Array | undefined;
                                    aggregateValue?: string | undefined;
                                }[] | undefined;
                            } | undefined;
                        }[] | undefined;
                        extension?: {
                            name?: string | undefined;
                            number?: number | undefined;
                            label?: import("@dydxprotocol/v4-proto/src/codegen/google/protobuf/descriptor").FieldDescriptorProto_Label | undefined;
                            type?: import("@dydxprotocol/v4-proto/src/codegen/google/protobuf/descriptor").FieldDescriptorProto_Type | undefined;
                            typeName?: string | undefined;
                            extendee?: string | undefined;
                            defaultValue?: string | undefined;
                            oneofIndex?: number | undefined;
                            jsonName?: string | undefined;
                            options?: {
                                ctype?: import("@dydxprotocol/v4-proto/src/codegen/google/protobuf/descriptor").FieldOptions_CType | undefined;
                                packed?: boolean | undefined;
                                jstype?: import("@dydxprotocol/v4-proto/src/codegen/google/protobuf/descriptor").FieldOptions_JSType | undefined;
                                lazy?: boolean | undefined;
                                deprecated?: boolean | undefined;
                                weak?: boolean | undefined;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string | undefined;
                                        isExtension?: boolean | undefined;
                                    }[] | undefined;
                                    identifierValue?: string | undefined;
                                    positiveIntValue?: string | number | import("long").Long | undefined;
                                    negativeIntValue?: string | number | import("long").Long | undefined;
                                    doubleValue?: number | undefined;
                                    stringValue?: Uint8Array | undefined;
                                    aggregateValue?: string | undefined;
                                }[] | undefined;
                            } | undefined;
                        }[] | undefined;
                        options?: {
                            javaPackage?: string | undefined;
                            javaOuterClassname?: string | undefined;
                            javaMultipleFiles?: boolean | undefined;
                            javaGenerateEqualsAndHash?: boolean | undefined;
                            javaStringCheckUtf8?: boolean | undefined;
                            optimizeFor?: import("@dydxprotocol/v4-proto/src/codegen/google/protobuf/descriptor").FileOptions_OptimizeMode | undefined;
                            goPackage?: string | undefined;
                            ccGenericServices?: boolean | undefined;
                            javaGenericServices?: boolean | undefined;
                            pyGenericServices?: boolean | undefined;
                            phpGenericServices?: boolean | undefined;
                            deprecated?: boolean | undefined;
                            ccEnableArenas?: boolean | undefined;
                            objcClassPrefix?: string | undefined;
                            csharpNamespace?: string | undefined;
                            swiftPrefix?: string | undefined;
                            phpClassPrefix?: string | undefined;
                            phpNamespace?: string | undefined;
                            phpMetadataNamespace?: string | undefined;
                            rubyPackage?: string | undefined;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string | undefined;
                                    isExtension?: boolean | undefined;
                                }[] | undefined;
                                identifierValue?: string | undefined;
                                positiveIntValue?: string | number | import("long").Long | undefined;
                                negativeIntValue?: string | number | import("long").Long | undefined;
                                doubleValue?: number | undefined;
                                stringValue?: Uint8Array | undefined;
                                aggregateValue?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        sourceCodeInfo?: {
                            location?: {
                                path?: number[] | undefined;
                                span?: number[] | undefined;
                                leadingComments?: string | undefined;
                                trailingComments?: string | undefined;
                                leadingDetachedComments?: string[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        syntax?: string | undefined;
                    }[] | undefined;
                }): _100.FileDescriptorsResponse;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _101.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.Module;
                    fromPartial(object: {
                        authority?: string | undefined;
                    }): _101.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _325.MsgClientImpl;
            QueryClientImpl: typeof _307.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _103.QueryParamsRequest | undefined): Promise<_103.QueryParamsResponse>;
                signingInfo(request: _103.QuerySigningInfoRequest): Promise<_103.QuerySigningInfoResponse>;
                signingInfos(request?: _103.QuerySigningInfosRequest | undefined): Promise<_103.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _285.LCDQueryClient;
            MsgUnjail: {
                encode(message: _105.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.MsgUnjail;
                fromPartial(object: {
                    validatorAddr?: string | undefined;
                }): _105.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _105.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.MsgUnjailResponse;
                fromPartial(_: {}): _105.MsgUnjailResponse;
            };
            MsgUpdateParams: {
                encode(message: _105.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.MsgUpdateParams;
                fromPartial(object: {
                    authority?: string | undefined;
                    params?: {
                        signedBlocksWindow?: string | number | import("long").Long | undefined;
                        minSignedPerWindow?: Uint8Array | undefined;
                        downtimeJailDuration?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        slashFractionDoubleSign?: Uint8Array | undefined;
                        slashFractionDowntime?: Uint8Array | undefined;
                    } | undefined;
                }): _105.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _105.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.MsgUpdateParamsResponse;
                fromPartial(_: {}): _105.MsgUpdateParamsResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _104.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _104.ValidatorSigningInfo;
                fromPartial(object: {
                    address?: string | undefined;
                    startHeight?: string | number | import("long").Long | undefined;
                    indexOffset?: string | number | import("long").Long | undefined;
                    jailedUntil?: Date | undefined;
                    tombstoned?: boolean | undefined;
                    missedBlocksCounter?: string | number | import("long").Long | undefined;
                }): _104.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _104.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _104.Params;
                fromPartial(object: {
                    signedBlocksWindow?: string | number | import("long").Long | undefined;
                    minSignedPerWindow?: Uint8Array | undefined;
                    downtimeJailDuration?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    slashFractionDoubleSign?: Uint8Array | undefined;
                    slashFractionDowntime?: Uint8Array | undefined;
                }): _104.Params;
            };
            QueryParamsRequest: {
                encode(_: _103.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _103.QueryParamsRequest;
                fromPartial(_: {}): _103.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _103.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _103.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        signedBlocksWindow?: string | number | import("long").Long | undefined;
                        minSignedPerWindow?: Uint8Array | undefined;
                        downtimeJailDuration?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        slashFractionDoubleSign?: Uint8Array | undefined;
                        slashFractionDowntime?: Uint8Array | undefined;
                    } | undefined;
                }): _103.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _103.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _103.QuerySigningInfoRequest;
                fromPartial(object: {
                    consAddress?: string | undefined;
                }): _103.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _103.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _103.QuerySigningInfoResponse;
                fromPartial(object: {
                    valSigningInfo?: {
                        address?: string | undefined;
                        startHeight?: string | number | import("long").Long | undefined;
                        indexOffset?: string | number | import("long").Long | undefined;
                        jailedUntil?: Date | undefined;
                        tombstoned?: boolean | undefined;
                        missedBlocksCounter?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _103.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _103.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _103.QuerySigningInfosRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _103.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _103.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _103.QuerySigningInfosResponse;
                fromPartial(object: {
                    info?: {
                        address?: string | undefined;
                        startHeight?: string | number | import("long").Long | undefined;
                        indexOffset?: string | number | import("long").Long | undefined;
                        jailedUntil?: Date | undefined;
                        tombstoned?: boolean | undefined;
                        missedBlocksCounter?: string | number | import("long").Long | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _103.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _102.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _102.GenesisState;
                fromPartial(object: {
                    params?: {
                        signedBlocksWindow?: string | number | import("long").Long | undefined;
                        minSignedPerWindow?: Uint8Array | undefined;
                        downtimeJailDuration?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        slashFractionDoubleSign?: Uint8Array | undefined;
                        slashFractionDowntime?: Uint8Array | undefined;
                    } | undefined;
                    signingInfos?: {
                        address?: string | undefined;
                        validatorSigningInfo?: {
                            address?: string | undefined;
                            startHeight?: string | number | import("long").Long | undefined;
                            indexOffset?: string | number | import("long").Long | undefined;
                            jailedUntil?: Date | undefined;
                            tombstoned?: boolean | undefined;
                            missedBlocksCounter?: string | number | import("long").Long | undefined;
                        } | undefined;
                    }[] | undefined;
                    missedBlocks?: {
                        address?: string | undefined;
                        missedBlocks?: {
                            index?: string | number | import("long").Long | undefined;
                            missed?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                }): _102.GenesisState;
            };
            SigningInfo: {
                encode(message: _102.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _102.SigningInfo;
                fromPartial(object: {
                    address?: string | undefined;
                    validatorSigningInfo?: {
                        address?: string | undefined;
                        startHeight?: string | number | import("long").Long | undefined;
                        indexOffset?: string | number | import("long").Long | undefined;
                        jailedUntil?: Date | undefined;
                        tombstoned?: boolean | undefined;
                        missedBlocksCounter?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _102.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _102.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _102.ValidatorMissedBlocks;
                fromPartial(object: {
                    address?: string | undefined;
                    missedBlocks?: {
                        index?: string | number | import("long").Long | undefined;
                        missed?: boolean | undefined;
                    }[] | undefined;
                }): _102.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _102.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _102.MissedBlock;
                fromPartial(object: {
                    index?: string | number | import("long").Long | undefined;
                    missed?: boolean | undefined;
                }): _102.MissedBlock;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _106.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.Module;
                    fromPartial(object: {
                        hooksOrder?: string[] | undefined;
                        authority?: string | undefined;
                        bech32PrefixValidator?: string | undefined;
                        bech32PrefixConsensus?: string | undefined;
                    }): _106.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _326.MsgClientImpl;
            QueryClientImpl: typeof _308.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _109.QueryValidatorsRequest): Promise<_109.QueryValidatorsResponse>;
                validator(request: _109.QueryValidatorRequest): Promise<_109.QueryValidatorResponse>;
                validatorDelegations(request: _109.QueryValidatorDelegationsRequest): Promise<_109.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _109.QueryValidatorUnbondingDelegationsRequest): Promise<_109.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _109.QueryDelegationRequest): Promise<_109.QueryDelegationResponse>;
                unbondingDelegation(request: _109.QueryUnbondingDelegationRequest): Promise<_109.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _109.QueryDelegatorDelegationsRequest): Promise<_109.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _109.QueryDelegatorUnbondingDelegationsRequest): Promise<_109.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _109.QueryRedelegationsRequest): Promise<_109.QueryRedelegationsResponse>;
                delegatorValidators(request: _109.QueryDelegatorValidatorsRequest): Promise<_109.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _109.QueryDelegatorValidatorRequest): Promise<_109.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _109.QueryHistoricalInfoRequest): Promise<_109.QueryHistoricalInfoResponse>;
                pool(request?: _109.QueryPoolRequest | undefined): Promise<_109.QueryPoolResponse>;
                params(request?: _109.QueryParamsRequest | undefined): Promise<_109.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _286.LCDQueryClient;
            MsgCreateValidator: {
                encode(message: _111.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.MsgCreateValidator;
                fromPartial(object: {
                    description?: {
                        moniker?: string | undefined;
                        identity?: string | undefined;
                        website?: string | undefined;
                        securityContact?: string | undefined;
                        details?: string | undefined;
                    } | undefined;
                    commission?: {
                        rate?: string | undefined;
                        maxRate?: string | undefined;
                        maxChangeRate?: string | undefined;
                    } | undefined;
                    minSelfDelegation?: string | undefined;
                    delegatorAddress?: string | undefined;
                    validatorAddress?: string | undefined;
                    pubkey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    value?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }): _111.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _111.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.MsgCreateValidatorResponse;
                fromPartial(_: {}): _111.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _111.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.MsgEditValidator;
                fromPartial(object: {
                    description?: {
                        moniker?: string | undefined;
                        identity?: string | undefined;
                        website?: string | undefined;
                        securityContact?: string | undefined;
                        details?: string | undefined;
                    } | undefined;
                    validatorAddress?: string | undefined;
                    commissionRate?: string | undefined;
                    minSelfDelegation?: string | undefined;
                }): _111.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _111.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.MsgEditValidatorResponse;
                fromPartial(_: {}): _111.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _111.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.MsgDelegate;
                fromPartial(object: {
                    delegatorAddress?: string | undefined;
                    validatorAddress?: string | undefined;
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }): _111.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _111.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.MsgDelegateResponse;
                fromPartial(_: {}): _111.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _111.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.MsgBeginRedelegate;
                fromPartial(object: {
                    delegatorAddress?: string | undefined;
                    validatorSrcAddress?: string | undefined;
                    validatorDstAddress?: string | undefined;
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }): _111.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _111.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.MsgBeginRedelegateResponse;
                fromPartial(object: {
                    completionTime?: Date | undefined;
                }): _111.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _111.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.MsgUndelegate;
                fromPartial(object: {
                    delegatorAddress?: string | undefined;
                    validatorAddress?: string | undefined;
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }): _111.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _111.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.MsgUndelegateResponse;
                fromPartial(object: {
                    completionTime?: Date | undefined;
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }): _111.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _111.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.MsgCancelUnbondingDelegation;
                fromPartial(object: {
                    delegatorAddress?: string | undefined;
                    validatorAddress?: string | undefined;
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    creationHeight?: string | number | import("long").Long | undefined;
                }): _111.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _111.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: {}): _111.MsgCancelUnbondingDelegationResponse;
            };
            MsgUpdateParams: {
                encode(message: _111.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.MsgUpdateParams;
                fromPartial(object: {
                    authority?: string | undefined;
                    params?: {
                        unbondingTime?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        maxValidators?: number | undefined;
                        maxEntries?: number | undefined;
                        historicalEntries?: number | undefined;
                        bondDenom?: string | undefined;
                        minCommissionRate?: string | undefined;
                    } | undefined;
                }): _111.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _111.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.MsgUpdateParamsResponse;
                fromPartial(_: {}): _111.MsgUpdateParamsResponse;
            };
            bondStatusFromJSON(object: any): _110.BondStatus;
            bondStatusToJSON(object: _110.BondStatus): string;
            infractionFromJSON(object: any): _110.Infraction;
            infractionToJSON(object: _110.Infraction): string;
            BondStatus: typeof _110.BondStatus;
            BondStatusSDKType: typeof _110.BondStatus;
            Infraction: typeof _110.Infraction;
            InfractionSDKType: typeof _110.Infraction;
            HistoricalInfo: {
                encode(message: _110.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.HistoricalInfo;
                fromPartial(object: {
                    header?: {
                        version?: {
                            block?: string | number | import("long").Long | undefined;
                            app?: string | number | import("long").Long | undefined;
                        } | undefined;
                        chainId?: string | undefined;
                        height?: string | number | import("long").Long | undefined;
                        time?: Date | undefined;
                        lastBlockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        lastCommitHash?: Uint8Array | undefined;
                        dataHash?: Uint8Array | undefined;
                        validatorsHash?: Uint8Array | undefined;
                        nextValidatorsHash?: Uint8Array | undefined;
                        consensusHash?: Uint8Array | undefined;
                        appHash?: Uint8Array | undefined;
                        lastResultsHash?: Uint8Array | undefined;
                        evidenceHash?: Uint8Array | undefined;
                        proposerAddress?: Uint8Array | undefined;
                    } | undefined;
                    valset?: {
                        operatorAddress?: string | undefined;
                        consensusPubkey?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        jailed?: boolean | undefined;
                        status?: _110.BondStatus | undefined;
                        tokens?: string | undefined;
                        delegatorShares?: string | undefined;
                        description?: {
                            moniker?: string | undefined;
                            identity?: string | undefined;
                            website?: string | undefined;
                            securityContact?: string | undefined;
                            details?: string | undefined;
                        } | undefined;
                        unbondingHeight?: string | number | import("long").Long | undefined;
                        unbondingTime?: Date | undefined;
                        commission?: {
                            commissionRates?: {
                                rate?: string | undefined;
                                maxRate?: string | undefined;
                                maxChangeRate?: string | undefined;
                            } | undefined;
                            updateTime?: Date | undefined;
                        } | undefined;
                        minSelfDelegation?: string | undefined;
                        unbondingOnHoldRefCount?: string | number | import("long").Long | undefined;
                        unbondingIds?: (string | number | import("long").Long)[] | undefined;
                    }[] | undefined;
                }): _110.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _110.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.CommissionRates;
                fromPartial(object: {
                    rate?: string | undefined;
                    maxRate?: string | undefined;
                    maxChangeRate?: string | undefined;
                }): _110.CommissionRates;
            };
            Commission: {
                encode(message: _110.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.Commission;
                fromPartial(object: {
                    commissionRates?: {
                        rate?: string | undefined;
                        maxRate?: string | undefined;
                        maxChangeRate?: string | undefined;
                    } | undefined;
                    updateTime?: Date | undefined;
                }): _110.Commission;
            };
            Description: {
                encode(message: _110.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.Description;
                fromPartial(object: {
                    moniker?: string | undefined;
                    identity?: string | undefined;
                    website?: string | undefined;
                    securityContact?: string | undefined;
                    details?: string | undefined;
                }): _110.Description;
            };
            Validator: {
                encode(message: _110.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.Validator;
                fromPartial(object: {
                    operatorAddress?: string | undefined;
                    consensusPubkey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    jailed?: boolean | undefined;
                    status?: _110.BondStatus | undefined;
                    tokens?: string | undefined;
                    delegatorShares?: string | undefined;
                    description?: {
                        moniker?: string | undefined;
                        identity?: string | undefined;
                        website?: string | undefined;
                        securityContact?: string | undefined;
                        details?: string | undefined;
                    } | undefined;
                    unbondingHeight?: string | number | import("long").Long | undefined;
                    unbondingTime?: Date | undefined;
                    commission?: {
                        commissionRates?: {
                            rate?: string | undefined;
                            maxRate?: string | undefined;
                            maxChangeRate?: string | undefined;
                        } | undefined;
                        updateTime?: Date | undefined;
                    } | undefined;
                    minSelfDelegation?: string | undefined;
                    unbondingOnHoldRefCount?: string | number | import("long").Long | undefined;
                    unbondingIds?: (string | number | import("long").Long)[] | undefined;
                }): _110.Validator;
            };
            ValAddresses: {
                encode(message: _110.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.ValAddresses;
                fromPartial(object: {
                    addresses?: string[] | undefined;
                }): _110.ValAddresses;
            };
            DVPair: {
                encode(message: _110.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.DVPair;
                fromPartial(object: {
                    delegatorAddress?: string | undefined;
                    validatorAddress?: string | undefined;
                }): _110.DVPair;
            };
            DVPairs: {
                encode(message: _110.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.DVPairs;
                fromPartial(object: {
                    pairs?: {
                        delegatorAddress?: string | undefined;
                        validatorAddress?: string | undefined;
                    }[] | undefined;
                }): _110.DVPairs;
            };
            DVVTriplet: {
                encode(message: _110.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.DVVTriplet;
                fromPartial(object: {
                    delegatorAddress?: string | undefined;
                    validatorSrcAddress?: string | undefined;
                    validatorDstAddress?: string | undefined;
                }): _110.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _110.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.DVVTriplets;
                fromPartial(object: {
                    triplets?: {
                        delegatorAddress?: string | undefined;
                        validatorSrcAddress?: string | undefined;
                        validatorDstAddress?: string | undefined;
                    }[] | undefined;
                }): _110.DVVTriplets;
            };
            Delegation: {
                encode(message: _110.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.Delegation;
                fromPartial(object: {
                    delegatorAddress?: string | undefined;
                    validatorAddress?: string | undefined;
                    shares?: string | undefined;
                }): _110.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _110.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.UnbondingDelegation;
                fromPartial(object: {
                    delegatorAddress?: string | undefined;
                    validatorAddress?: string | undefined;
                    entries?: {
                        creationHeight?: string | number | import("long").Long | undefined;
                        completionTime?: Date | undefined;
                        initialBalance?: string | undefined;
                        balance?: string | undefined;
                        unbondingId?: string | number | import("long").Long | undefined;
                        unbondingOnHoldRefCount?: string | number | import("long").Long | undefined;
                    }[] | undefined;
                }): _110.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _110.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.UnbondingDelegationEntry;
                fromPartial(object: {
                    creationHeight?: string | number | import("long").Long | undefined;
                    completionTime?: Date | undefined;
                    initialBalance?: string | undefined;
                    balance?: string | undefined;
                    unbondingId?: string | number | import("long").Long | undefined;
                    unbondingOnHoldRefCount?: string | number | import("long").Long | undefined;
                }): _110.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _110.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.RedelegationEntry;
                fromPartial(object: {
                    creationHeight?: string | number | import("long").Long | undefined;
                    completionTime?: Date | undefined;
                    initialBalance?: string | undefined;
                    sharesDst?: string | undefined;
                    unbondingId?: string | number | import("long").Long | undefined;
                    unbondingOnHoldRefCount?: string | number | import("long").Long | undefined;
                }): _110.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _110.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.Redelegation;
                fromPartial(object: {
                    delegatorAddress?: string | undefined;
                    validatorSrcAddress?: string | undefined;
                    validatorDstAddress?: string | undefined;
                    entries?: {
                        creationHeight?: string | number | import("long").Long | undefined;
                        completionTime?: Date | undefined;
                        initialBalance?: string | undefined;
                        sharesDst?: string | undefined;
                        unbondingId?: string | number | import("long").Long | undefined;
                        unbondingOnHoldRefCount?: string | number | import("long").Long | undefined;
                    }[] | undefined;
                }): _110.Redelegation;
            };
            Params: {
                encode(message: _110.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.Params;
                fromPartial(object: {
                    unbondingTime?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    maxValidators?: number | undefined;
                    maxEntries?: number | undefined;
                    historicalEntries?: number | undefined;
                    bondDenom?: string | undefined;
                    minCommissionRate?: string | undefined;
                }): _110.Params;
            };
            DelegationResponse: {
                encode(message: _110.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.DelegationResponse;
                fromPartial(object: {
                    delegation?: {
                        delegatorAddress?: string | undefined;
                        validatorAddress?: string | undefined;
                        shares?: string | undefined;
                    } | undefined;
                    balance?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }): _110.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _110.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.RedelegationEntryResponse;
                fromPartial(object: {
                    redelegationEntry?: {
                        creationHeight?: string | number | import("long").Long | undefined;
                        completionTime?: Date | undefined;
                        initialBalance?: string | undefined;
                        sharesDst?: string | undefined;
                        unbondingId?: string | number | import("long").Long | undefined;
                        unbondingOnHoldRefCount?: string | number | import("long").Long | undefined;
                    } | undefined;
                    balance?: string | undefined;
                }): _110.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _110.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.RedelegationResponse;
                fromPartial(object: {
                    redelegation?: {
                        delegatorAddress?: string | undefined;
                        validatorSrcAddress?: string | undefined;
                        validatorDstAddress?: string | undefined;
                        entries?: {
                            creationHeight?: string | number | import("long").Long | undefined;
                            completionTime?: Date | undefined;
                            initialBalance?: string | undefined;
                            sharesDst?: string | undefined;
                            unbondingId?: string | number | import("long").Long | undefined;
                            unbondingOnHoldRefCount?: string | number | import("long").Long | undefined;
                        }[] | undefined;
                    } | undefined;
                    entries?: {
                        redelegationEntry?: {
                            creationHeight?: string | number | import("long").Long | undefined;
                            completionTime?: Date | undefined;
                            initialBalance?: string | undefined;
                            sharesDst?: string | undefined;
                            unbondingId?: string | number | import("long").Long | undefined;
                            unbondingOnHoldRefCount?: string | number | import("long").Long | undefined;
                        } | undefined;
                        balance?: string | undefined;
                    }[] | undefined;
                }): _110.RedelegationResponse;
            };
            Pool: {
                encode(message: _110.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.Pool;
                fromPartial(object: {
                    notBondedTokens?: string | undefined;
                    bondedTokens?: string | undefined;
                }): _110.Pool;
            };
            ValidatorUpdates: {
                encode(message: _110.ValidatorUpdates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.ValidatorUpdates;
                fromPartial(object: {
                    updates?: {
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        power?: string | number | import("long").Long | undefined;
                    }[] | undefined;
                }): _110.ValidatorUpdates;
            };
            QueryValidatorsRequest: {
                encode(message: _109.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryValidatorsRequest;
                fromPartial(object: {
                    status?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _109.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _109.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryValidatorsResponse;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string | undefined;
                        consensusPubkey?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        jailed?: boolean | undefined;
                        status?: _110.BondStatus | undefined;
                        tokens?: string | undefined;
                        delegatorShares?: string | undefined;
                        description?: {
                            moniker?: string | undefined;
                            identity?: string | undefined;
                            website?: string | undefined;
                            securityContact?: string | undefined;
                            details?: string | undefined;
                        } | undefined;
                        unbondingHeight?: string | number | import("long").Long | undefined;
                        unbondingTime?: Date | undefined;
                        commission?: {
                            commissionRates?: {
                                rate?: string | undefined;
                                maxRate?: string | undefined;
                                maxChangeRate?: string | undefined;
                            } | undefined;
                            updateTime?: Date | undefined;
                        } | undefined;
                        minSelfDelegation?: string | undefined;
                        unbondingOnHoldRefCount?: string | number | import("long").Long | undefined;
                        unbondingIds?: (string | number | import("long").Long)[] | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _109.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _109.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryValidatorRequest;
                fromPartial(object: {
                    validatorAddr?: string | undefined;
                }): _109.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _109.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryValidatorResponse;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string | undefined;
                        consensusPubkey?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        jailed?: boolean | undefined;
                        status?: _110.BondStatus | undefined;
                        tokens?: string | undefined;
                        delegatorShares?: string | undefined;
                        description?: {
                            moniker?: string | undefined;
                            identity?: string | undefined;
                            website?: string | undefined;
                            securityContact?: string | undefined;
                            details?: string | undefined;
                        } | undefined;
                        unbondingHeight?: string | number | import("long").Long | undefined;
                        unbondingTime?: Date | undefined;
                        commission?: {
                            commissionRates?: {
                                rate?: string | undefined;
                                maxRate?: string | undefined;
                                maxChangeRate?: string | undefined;
                            } | undefined;
                            updateTime?: Date | undefined;
                        } | undefined;
                        minSelfDelegation?: string | undefined;
                        unbondingOnHoldRefCount?: string | number | import("long").Long | undefined;
                        unbondingIds?: (string | number | import("long").Long)[] | undefined;
                    } | undefined;
                }): _109.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _109.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryValidatorDelegationsRequest;
                fromPartial(object: {
                    validatorAddr?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _109.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _109.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryValidatorDelegationsResponse;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string | undefined;
                            validatorAddress?: string | undefined;
                            shares?: string | undefined;
                        } | undefined;
                        balance?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _109.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _109.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: {
                    validatorAddr?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _109.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _109.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string | undefined;
                        validatorAddress?: string | undefined;
                        entries?: {
                            creationHeight?: string | number | import("long").Long | undefined;
                            completionTime?: Date | undefined;
                            initialBalance?: string | undefined;
                            balance?: string | undefined;
                            unbondingId?: string | number | import("long").Long | undefined;
                            unbondingOnHoldRefCount?: string | number | import("long").Long | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _109.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _109.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryDelegationRequest;
                fromPartial(object: {
                    delegatorAddr?: string | undefined;
                    validatorAddr?: string | undefined;
                }): _109.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _109.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryDelegationResponse;
                fromPartial(object: {
                    delegationResponse?: {
                        delegation?: {
                            delegatorAddress?: string | undefined;
                            validatorAddress?: string | undefined;
                            shares?: string | undefined;
                        } | undefined;
                        balance?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } | undefined;
                    } | undefined;
                }): _109.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _109.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryUnbondingDelegationRequest;
                fromPartial(object: {
                    delegatorAddr?: string | undefined;
                    validatorAddr?: string | undefined;
                }): _109.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _109.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryUnbondingDelegationResponse;
                fromPartial(object: {
                    unbond?: {
                        delegatorAddress?: string | undefined;
                        validatorAddress?: string | undefined;
                        entries?: {
                            creationHeight?: string | number | import("long").Long | undefined;
                            completionTime?: Date | undefined;
                            initialBalance?: string | undefined;
                            balance?: string | undefined;
                            unbondingId?: string | number | import("long").Long | undefined;
                            unbondingOnHoldRefCount?: string | number | import("long").Long | undefined;
                        }[] | undefined;
                    } | undefined;
                }): _109.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _109.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryDelegatorDelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _109.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _109.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryDelegatorDelegationsResponse;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string | undefined;
                            validatorAddress?: string | undefined;
                            shares?: string | undefined;
                        } | undefined;
                        balance?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _109.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _109.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _109.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _109.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string | undefined;
                        validatorAddress?: string | undefined;
                        entries?: {
                            creationHeight?: string | number | import("long").Long | undefined;
                            completionTime?: Date | undefined;
                            initialBalance?: string | undefined;
                            balance?: string | undefined;
                            unbondingId?: string | number | import("long").Long | undefined;
                            unbondingOnHoldRefCount?: string | number | import("long").Long | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _109.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _109.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryRedelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string | undefined;
                    srcValidatorAddr?: string | undefined;
                    dstValidatorAddr?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _109.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _109.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryRedelegationsResponse;
                fromPartial(object: {
                    redelegationResponses?: {
                        redelegation?: {
                            delegatorAddress?: string | undefined;
                            validatorSrcAddress?: string | undefined;
                            validatorDstAddress?: string | undefined;
                            entries?: {
                                creationHeight?: string | number | import("long").Long | undefined;
                                completionTime?: Date | undefined;
                                initialBalance?: string | undefined;
                                sharesDst?: string | undefined;
                                unbondingId?: string | number | import("long").Long | undefined;
                                unbondingOnHoldRefCount?: string | number | import("long").Long | undefined;
                            }[] | undefined;
                        } | undefined;
                        entries?: {
                            redelegationEntry?: {
                                creationHeight?: string | number | import("long").Long | undefined;
                                completionTime?: Date | undefined;
                                initialBalance?: string | undefined;
                                sharesDst?: string | undefined;
                                unbondingId?: string | number | import("long").Long | undefined;
                                unbondingOnHoldRefCount?: string | number | import("long").Long | undefined;
                            } | undefined;
                            balance?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _109.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _109.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryDelegatorValidatorsRequest;
                fromPartial(object: {
                    delegatorAddr?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _109.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _109.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryDelegatorValidatorsResponse;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string | undefined;
                        consensusPubkey?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        jailed?: boolean | undefined;
                        status?: _110.BondStatus | undefined;
                        tokens?: string | undefined;
                        delegatorShares?: string | undefined;
                        description?: {
                            moniker?: string | undefined;
                            identity?: string | undefined;
                            website?: string | undefined;
                            securityContact?: string | undefined;
                            details?: string | undefined;
                        } | undefined;
                        unbondingHeight?: string | number | import("long").Long | undefined;
                        unbondingTime?: Date | undefined;
                        commission?: {
                            commissionRates?: {
                                rate?: string | undefined;
                                maxRate?: string | undefined;
                                maxChangeRate?: string | undefined;
                            } | undefined;
                            updateTime?: Date | undefined;
                        } | undefined;
                        minSelfDelegation?: string | undefined;
                        unbondingOnHoldRefCount?: string | number | import("long").Long | undefined;
                        unbondingIds?: (string | number | import("long").Long)[] | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _109.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _109.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryDelegatorValidatorRequest;
                fromPartial(object: {
                    delegatorAddr?: string | undefined;
                    validatorAddr?: string | undefined;
                }): _109.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _109.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryDelegatorValidatorResponse;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string | undefined;
                        consensusPubkey?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        jailed?: boolean | undefined;
                        status?: _110.BondStatus | undefined;
                        tokens?: string | undefined;
                        delegatorShares?: string | undefined;
                        description?: {
                            moniker?: string | undefined;
                            identity?: string | undefined;
                            website?: string | undefined;
                            securityContact?: string | undefined;
                            details?: string | undefined;
                        } | undefined;
                        unbondingHeight?: string | number | import("long").Long | undefined;
                        unbondingTime?: Date | undefined;
                        commission?: {
                            commissionRates?: {
                                rate?: string | undefined;
                                maxRate?: string | undefined;
                                maxChangeRate?: string | undefined;
                            } | undefined;
                            updateTime?: Date | undefined;
                        } | undefined;
                        minSelfDelegation?: string | undefined;
                        unbondingOnHoldRefCount?: string | number | import("long").Long | undefined;
                        unbondingIds?: (string | number | import("long").Long)[] | undefined;
                    } | undefined;
                }): _109.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _109.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryHistoricalInfoRequest;
                fromPartial(object: {
                    height?: string | number | import("long").Long | undefined;
                }): _109.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _109.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryHistoricalInfoResponse;
                fromPartial(object: {
                    hist?: {
                        header?: {
                            version?: {
                                block?: string | number | import("long").Long | undefined;
                                app?: string | number | import("long").Long | undefined;
                            } | undefined;
                            chainId?: string | undefined;
                            height?: string | number | import("long").Long | undefined;
                            time?: Date | undefined;
                            lastBlockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            lastCommitHash?: Uint8Array | undefined;
                            dataHash?: Uint8Array | undefined;
                            validatorsHash?: Uint8Array | undefined;
                            nextValidatorsHash?: Uint8Array | undefined;
                            consensusHash?: Uint8Array | undefined;
                            appHash?: Uint8Array | undefined;
                            lastResultsHash?: Uint8Array | undefined;
                            evidenceHash?: Uint8Array | undefined;
                            proposerAddress?: Uint8Array | undefined;
                        } | undefined;
                        valset?: {
                            operatorAddress?: string | undefined;
                            consensusPubkey?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            } | undefined;
                            jailed?: boolean | undefined;
                            status?: _110.BondStatus | undefined;
                            tokens?: string | undefined;
                            delegatorShares?: string | undefined;
                            description?: {
                                moniker?: string | undefined;
                                identity?: string | undefined;
                                website?: string | undefined;
                                securityContact?: string | undefined;
                                details?: string | undefined;
                            } | undefined;
                            unbondingHeight?: string | number | import("long").Long | undefined;
                            unbondingTime?: Date | undefined;
                            commission?: {
                                commissionRates?: {
                                    rate?: string | undefined;
                                    maxRate?: string | undefined;
                                    maxChangeRate?: string | undefined;
                                } | undefined;
                                updateTime?: Date | undefined;
                            } | undefined;
                            minSelfDelegation?: string | undefined;
                            unbondingOnHoldRefCount?: string | number | import("long").Long | undefined;
                            unbondingIds?: (string | number | import("long").Long)[] | undefined;
                        }[] | undefined;
                    } | undefined;
                }): _109.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _109.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryPoolRequest;
                fromPartial(_: {}): _109.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _109.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryPoolResponse;
                fromPartial(object: {
                    pool?: {
                        notBondedTokens?: string | undefined;
                        bondedTokens?: string | undefined;
                    } | undefined;
                }): _109.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _109.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryParamsRequest;
                fromPartial(_: {}): _109.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _109.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        maxValidators?: number | undefined;
                        maxEntries?: number | undefined;
                        historicalEntries?: number | undefined;
                        bondDenom?: string | undefined;
                        minCommissionRate?: string | undefined;
                    } | undefined;
                }): _109.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _108.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.GenesisState;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        maxValidators?: number | undefined;
                        maxEntries?: number | undefined;
                        historicalEntries?: number | undefined;
                        bondDenom?: string | undefined;
                        minCommissionRate?: string | undefined;
                    } | undefined;
                    lastTotalPower?: Uint8Array | undefined;
                    lastValidatorPowers?: {
                        address?: string | undefined;
                        power?: string | number | import("long").Long | undefined;
                    }[] | undefined;
                    validators?: {
                        operatorAddress?: string | undefined;
                        consensusPubkey?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        jailed?: boolean | undefined;
                        status?: _110.BondStatus | undefined;
                        tokens?: string | undefined;
                        delegatorShares?: string | undefined;
                        description?: {
                            moniker?: string | undefined;
                            identity?: string | undefined;
                            website?: string | undefined;
                            securityContact?: string | undefined;
                            details?: string | undefined;
                        } | undefined;
                        unbondingHeight?: string | number | import("long").Long | undefined;
                        unbondingTime?: Date | undefined;
                        commission?: {
                            commissionRates?: {
                                rate?: string | undefined;
                                maxRate?: string | undefined;
                                maxChangeRate?: string | undefined;
                            } | undefined;
                            updateTime?: Date | undefined;
                        } | undefined;
                        minSelfDelegation?: string | undefined;
                        unbondingOnHoldRefCount?: string | number | import("long").Long | undefined;
                        unbondingIds?: (string | number | import("long").Long)[] | undefined;
                    }[] | undefined;
                    delegations?: {
                        delegatorAddress?: string | undefined;
                        validatorAddress?: string | undefined;
                        shares?: string | undefined;
                    }[] | undefined;
                    unbondingDelegations?: {
                        delegatorAddress?: string | undefined;
                        validatorAddress?: string | undefined;
                        entries?: {
                            creationHeight?: string | number | import("long").Long | undefined;
                            completionTime?: Date | undefined;
                            initialBalance?: string | undefined;
                            balance?: string | undefined;
                            unbondingId?: string | number | import("long").Long | undefined;
                            unbondingOnHoldRefCount?: string | number | import("long").Long | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    redelegations?: {
                        delegatorAddress?: string | undefined;
                        validatorSrcAddress?: string | undefined;
                        validatorDstAddress?: string | undefined;
                        entries?: {
                            creationHeight?: string | number | import("long").Long | undefined;
                            completionTime?: Date | undefined;
                            initialBalance?: string | undefined;
                            sharesDst?: string | undefined;
                            unbondingId?: string | number | import("long").Long | undefined;
                            unbondingOnHoldRefCount?: string | number | import("long").Long | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    exported?: boolean | undefined;
                }): _108.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _108.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.LastValidatorPower;
                fromPartial(object: {
                    address?: string | undefined;
                    power?: string | number | import("long").Long | undefined;
                }): _108.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _107.AuthorizationType;
            authorizationTypeToJSON(object: _107.AuthorizationType): string;
            AuthorizationType: typeof _107.AuthorizationType;
            AuthorizationTypeSDKType: typeof _107.AuthorizationType;
            StakeAuthorization: {
                encode(message: _107.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.StakeAuthorization;
                fromPartial(object: {
                    maxTokens?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    allowList?: {
                        address?: string[] | undefined;
                    } | undefined;
                    denyList?: {
                        address?: string[] | undefined;
                    } | undefined;
                    authorizationType?: _107.AuthorizationType | undefined;
                }): _107.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _107.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.StakeAuthorization_Validators;
                fromPartial(object: {
                    address?: string[] | undefined;
                }): _107.StakeAuthorization_Validators;
            };
        };
    }
    namespace store {
        namespace internal {
            namespace kv {
                const v1beta1: {
                    Pairs: {
                        encode(message: _112.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.Pairs;
                        fromPartial(object: {
                            pairs?: {
                                key?: Uint8Array | undefined;
                                value?: Uint8Array | undefined;
                            }[] | undefined;
                        }): _112.Pairs;
                    };
                    Pair: {
                        encode(message: _112.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.Pair;
                        fromPartial(object: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                        }): _112.Pair;
                    };
                };
            }
        }
        namespace snapshots {
            const v1: {
                Snapshot: {
                    encode(message: _113.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.Snapshot;
                    fromPartial(object: {
                        height?: string | number | import("long").Long | undefined;
                        format?: number | undefined;
                        chunks?: number | undefined;
                        hash?: Uint8Array | undefined;
                        metadata?: {
                            chunkHashes?: Uint8Array[] | undefined;
                        } | undefined;
                    }): _113.Snapshot;
                };
                Metadata: {
                    encode(message: _113.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.Metadata;
                    fromPartial(object: {
                        chunkHashes?: Uint8Array[] | undefined;
                    }): _113.Metadata;
                };
                SnapshotItem: {
                    encode(message: _113.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.SnapshotItem;
                    fromPartial(object: {
                        store?: {
                            name?: string | undefined;
                        } | undefined;
                        iavl?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            version?: string | number | import("long").Long | undefined;
                            height?: number | undefined;
                        } | undefined;
                        extension?: {
                            name?: string | undefined;
                            format?: number | undefined;
                        } | undefined;
                        extensionPayload?: {
                            payload?: Uint8Array | undefined;
                        } | undefined;
                    }): _113.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _113.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.SnapshotStoreItem;
                    fromPartial(object: {
                        name?: string | undefined;
                    }): _113.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _113.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.SnapshotIAVLItem;
                    fromPartial(object: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        version?: string | number | import("long").Long | undefined;
                        height?: number | undefined;
                    }): _113.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _113.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.SnapshotExtensionMeta;
                    fromPartial(object: {
                        name?: string | undefined;
                        format?: number | undefined;
                    }): _113.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _113.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.SnapshotExtensionPayload;
                    fromPartial(object: {
                        payload?: Uint8Array | undefined;
                    }): _113.SnapshotExtensionPayload;
                };
            };
        }
        namespace streaming {
            const abci: {
                ListenFinalizeBlockRequest: {
                    encode(message: _114.ListenFinalizeBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.ListenFinalizeBlockRequest;
                    fromPartial(object: {
                        req?: {
                            txs?: Uint8Array[] | undefined;
                            decidedLastCommit?: {
                                round?: number | undefined;
                                votes?: {
                                    validator?: {
                                        address?: Uint8Array | undefined;
                                        power?: string | number | import("long").Long | undefined;
                                    } | undefined;
                                    blockIdFlag?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/validator").BlockIDFlag | undefined;
                                }[] | undefined;
                            } | undefined;
                            misbehavior?: {
                                type?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/abci/types").MisbehaviorType | undefined;
                                validator?: {
                                    address?: Uint8Array | undefined;
                                    power?: string | number | import("long").Long | undefined;
                                } | undefined;
                                height?: string | number | import("long").Long | undefined;
                                time?: Date | undefined;
                                totalVotingPower?: string | number | import("long").Long | undefined;
                            }[] | undefined;
                            hash?: Uint8Array | undefined;
                            height?: string | number | import("long").Long | undefined;
                            time?: Date | undefined;
                            nextValidatorsHash?: Uint8Array | undefined;
                            proposerAddress?: Uint8Array | undefined;
                        } | undefined;
                        res?: {
                            events?: {
                                type?: string | undefined;
                                attributes?: {
                                    key?: string | undefined;
                                    value?: string | undefined;
                                    index?: boolean | undefined;
                                }[] | undefined;
                            }[] | undefined;
                            txResults?: {
                                code?: number | undefined;
                                data?: Uint8Array | undefined;
                                log?: string | undefined;
                                info?: string | undefined;
                                gasWanted?: string | number | import("long").Long | undefined;
                                gasUsed?: string | number | import("long").Long | undefined;
                                events?: {
                                    type?: string | undefined;
                                    attributes?: {
                                        key?: string | undefined;
                                        value?: string | undefined;
                                        index?: boolean | undefined;
                                    }[] | undefined;
                                }[] | undefined;
                                codespace?: string | undefined;
                            }[] | undefined;
                            validatorUpdates?: {
                                pubKey?: {
                                    ed25519?: Uint8Array | undefined;
                                    secp256k1?: Uint8Array | undefined;
                                } | undefined;
                                power?: string | number | import("long").Long | undefined;
                            }[] | undefined;
                            consensusParamUpdates?: {
                                block?: {
                                    maxBytes?: string | number | import("long").Long | undefined;
                                    maxGas?: string | number | import("long").Long | undefined;
                                } | undefined;
                                evidence?: {
                                    maxAgeNumBlocks?: string | number | import("long").Long | undefined;
                                    maxAgeDuration?: {
                                        seconds?: string | number | import("long").Long | undefined;
                                        nanos?: number | undefined;
                                    } | undefined;
                                    maxBytes?: string | number | import("long").Long | undefined;
                                } | undefined;
                                validator?: {
                                    pubKeyTypes?: string[] | undefined;
                                } | undefined;
                                version?: {
                                    app?: string | number | import("long").Long | undefined;
                                } | undefined;
                                abci?: {
                                    voteExtensionsEnableHeight?: string | number | import("long").Long | undefined;
                                } | undefined;
                            } | undefined;
                            appHash?: Uint8Array | undefined;
                        } | undefined;
                    }): _114.ListenFinalizeBlockRequest;
                };
                ListenFinalizeBlockResponse: {
                    encode(_: _114.ListenFinalizeBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.ListenFinalizeBlockResponse;
                    fromPartial(_: {}): _114.ListenFinalizeBlockResponse;
                };
                ListenCommitRequest: {
                    encode(message: _114.ListenCommitRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.ListenCommitRequest;
                    fromPartial(object: {
                        blockHeight?: string | number | import("long").Long | undefined;
                        res?: {
                            retainHeight?: string | number | import("long").Long | undefined;
                        } | undefined;
                        changeSet?: {
                            storeKey?: string | undefined;
                            delete?: boolean | undefined;
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                        }[] | undefined;
                    }): _114.ListenCommitRequest;
                };
                ListenCommitResponse: {
                    encode(_: _114.ListenCommitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.ListenCommitResponse;
                    fromPartial(_: {}): _114.ListenCommitResponse;
                };
            };
        }
        const v1beta1: {
            StoreKVPair: {
                encode(message: _116.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.StoreKVPair;
                fromPartial(object: {
                    storeKey?: string | undefined;
                    delete?: boolean | undefined;
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }): _116.StoreKVPair;
            };
            BlockMetadata: {
                encode(message: _116.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.BlockMetadata;
                fromPartial(object: {
                    responseCommit?: {
                        retainHeight?: string | number | import("long").Long | undefined;
                    } | undefined;
                    requestFinalizeBlock?: {
                        txs?: Uint8Array[] | undefined;
                        decidedLastCommit?: {
                            round?: number | undefined;
                            votes?: {
                                validator?: {
                                    address?: Uint8Array | undefined;
                                    power?: string | number | import("long").Long | undefined;
                                } | undefined;
                                blockIdFlag?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/validator").BlockIDFlag | undefined;
                            }[] | undefined;
                        } | undefined;
                        misbehavior?: {
                            type?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/abci/types").MisbehaviorType | undefined;
                            validator?: {
                                address?: Uint8Array | undefined;
                                power?: string | number | import("long").Long | undefined;
                            } | undefined;
                            height?: string | number | import("long").Long | undefined;
                            time?: Date | undefined;
                            totalVotingPower?: string | number | import("long").Long | undefined;
                        }[] | undefined;
                        hash?: Uint8Array | undefined;
                        height?: string | number | import("long").Long | undefined;
                        time?: Date | undefined;
                        nextValidatorsHash?: Uint8Array | undefined;
                        proposerAddress?: Uint8Array | undefined;
                    } | undefined;
                    responseFinalizeBlock?: {
                        events?: {
                            type?: string | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                                index?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        txResults?: {
                            code?: number | undefined;
                            data?: Uint8Array | undefined;
                            log?: string | undefined;
                            info?: string | undefined;
                            gasWanted?: string | number | import("long").Long | undefined;
                            gasUsed?: string | number | import("long").Long | undefined;
                            events?: {
                                type?: string | undefined;
                                attributes?: {
                                    key?: string | undefined;
                                    value?: string | undefined;
                                    index?: boolean | undefined;
                                }[] | undefined;
                            }[] | undefined;
                            codespace?: string | undefined;
                        }[] | undefined;
                        validatorUpdates?: {
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            power?: string | number | import("long").Long | undefined;
                        }[] | undefined;
                        consensusParamUpdates?: {
                            block?: {
                                maxBytes?: string | number | import("long").Long | undefined;
                                maxGas?: string | number | import("long").Long | undefined;
                            } | undefined;
                            evidence?: {
                                maxAgeNumBlocks?: string | number | import("long").Long | undefined;
                                maxAgeDuration?: {
                                    seconds?: string | number | import("long").Long | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                maxBytes?: string | number | import("long").Long | undefined;
                            } | undefined;
                            validator?: {
                                pubKeyTypes?: string[] | undefined;
                            } | undefined;
                            version?: {
                                app?: string | number | import("long").Long | undefined;
                            } | undefined;
                            abci?: {
                                voteExtensionsEnableHeight?: string | number | import("long").Long | undefined;
                            } | undefined;
                        } | undefined;
                        appHash?: Uint8Array | undefined;
                    } | undefined;
                }): _116.BlockMetadata;
            };
            CommitInfo: {
                encode(message: _115.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.CommitInfo;
                fromPartial(object: {
                    version?: string | number | import("long").Long | undefined;
                    storeInfos?: {
                        name?: string | undefined;
                        commitId?: {
                            version?: string | number | import("long").Long | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    }[] | undefined;
                    timestamp?: Date | undefined;
                }): _115.CommitInfo;
            };
            StoreInfo: {
                encode(message: _115.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.StoreInfo;
                fromPartial(object: {
                    name?: string | undefined;
                    commitId?: {
                        version?: string | number | import("long").Long | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                }): _115.StoreInfo;
            };
            CommitID: {
                encode(message: _115.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.CommitID;
                fromPartial(object: {
                    version?: string | number | import("long").Long | undefined;
                    hash?: Uint8Array | undefined;
                }): _115.CommitID;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    encode(message: _117.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.Config;
                    fromPartial(object: {
                        skipAnteHandler?: boolean | undefined;
                        skipPostHandler?: boolean | undefined;
                    }): _117.Config;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _118.SignMode;
                signModeToJSON(object: _118.SignMode): string;
                SignMode: typeof _118.SignMode;
                SignModeSDKType: typeof _118.SignMode;
                SignatureDescriptors: {
                    encode(message: _118.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.SignatureDescriptors;
                    fromPartial(object: {
                        signatures?: {
                            publicKey?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            } | undefined;
                            data?: {
                                single?: {
                                    mode?: _118.SignMode | undefined;
                                    signature?: Uint8Array | undefined;
                                } | undefined;
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    signatures?: any[] | undefined;
                                } | undefined;
                            } | undefined;
                            sequence?: string | number | import("long").Long | undefined;
                        }[] | undefined;
                    }): _118.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _118.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.SignatureDescriptor;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        data?: {
                            single?: {
                                mode?: _118.SignMode | undefined;
                                signature?: Uint8Array | undefined;
                            } | undefined;
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number | undefined;
                                    elems?: Uint8Array | undefined;
                                } | undefined;
                                signatures?: any[] | undefined;
                            } | undefined;
                        } | undefined;
                        sequence?: string | number | import("long").Long | undefined;
                    }): _118.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _118.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.SignatureDescriptor_Data;
                    fromPartial(object: {
                        single?: {
                            mode?: _118.SignMode | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            signatures?: any[] | undefined;
                        } | undefined;
                    }): _118.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _118.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.SignatureDescriptor_Data_Single;
                    fromPartial(object: {
                        mode?: _118.SignMode | undefined;
                        signature?: Uint8Array | undefined;
                    }): _118.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _118.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.SignatureDescriptor_Data_Multi;
                    fromPartial(object: {
                        bitarray?: {
                            extraBitsStored?: number | undefined;
                            elems?: Uint8Array | undefined;
                        } | undefined;
                        signatures?: any[] | undefined;
                    }): _118.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _309.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _119.SimulateRequest): Promise<_119.SimulateResponse>;
                getTx(request: _119.GetTxRequest): Promise<_119.GetTxResponse>;
                broadcastTx(request: _119.BroadcastTxRequest): Promise<_119.BroadcastTxResponse>;
                getTxsEvent(request: _119.GetTxsEventRequest): Promise<_119.GetTxsEventResponse>;
                getBlockWithTxs(request: _119.GetBlockWithTxsRequest): Promise<_119.GetBlockWithTxsResponse>;
                txDecode(request: _119.TxDecodeRequest): Promise<_119.TxDecodeResponse>;
                txEncode(request: _119.TxEncodeRequest): Promise<_119.TxEncodeResponse>;
                txEncodeAmino(request: _119.TxEncodeAminoRequest): Promise<_119.TxEncodeAminoResponse>;
                txDecodeAmino(request: _119.TxDecodeAminoRequest): Promise<_119.TxDecodeAminoResponse>;
            };
            LCDQueryClient: typeof _287.LCDQueryClient;
            Tx: {
                encode(message: _120.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.Tx;
                fromPartial(object: {
                    body?: {
                        messages?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        }[] | undefined;
                        memo?: string | undefined;
                        timeoutHeight?: string | number | import("long").Long | undefined;
                        extensionOptions?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        }[] | undefined;
                        nonCriticalExtensionOptions?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    authInfo?: {
                        signerInfos?: {
                            publicKey?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            } | undefined;
                            modeInfo?: {
                                single?: {
                                    mode?: _118.SignMode | undefined;
                                } | undefined;
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    modeInfos?: any[] | undefined;
                                } | undefined;
                            } | undefined;
                            sequence?: string | number | import("long").Long | undefined;
                        }[] | undefined;
                        fee?: {
                            amount?: {
                                denom?: string | undefined;
                                amount?: string | undefined;
                            }[] | undefined;
                            gasLimit?: string | number | import("long").Long | undefined;
                            payer?: string | undefined;
                            granter?: string | undefined;
                        } | undefined;
                        tip?: {
                            amount?: {
                                denom?: string | undefined;
                                amount?: string | undefined;
                            }[] | undefined;
                            tipper?: string | undefined;
                        } | undefined;
                    } | undefined;
                    signatures?: Uint8Array[] | undefined;
                }): _120.Tx;
            };
            TxRaw: {
                encode(message: _120.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.TxRaw;
                fromPartial(object: {
                    bodyBytes?: Uint8Array | undefined;
                    authInfoBytes?: Uint8Array | undefined;
                    signatures?: Uint8Array[] | undefined;
                }): _120.TxRaw;
            };
            SignDoc: {
                encode(message: _120.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.SignDoc;
                fromPartial(object: {
                    bodyBytes?: Uint8Array | undefined;
                    authInfoBytes?: Uint8Array | undefined;
                    chainId?: string | undefined;
                    accountNumber?: string | number | import("long").Long | undefined;
                }): _120.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _120.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.SignDocDirectAux;
                fromPartial(object: {
                    bodyBytes?: Uint8Array | undefined;
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    chainId?: string | undefined;
                    accountNumber?: string | number | import("long").Long | undefined;
                    sequence?: string | number | import("long").Long | undefined;
                    tip?: {
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        tipper?: string | undefined;
                    } | undefined;
                }): _120.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _120.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.TxBody;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    }[] | undefined;
                    memo?: string | undefined;
                    timeoutHeight?: string | number | import("long").Long | undefined;
                    extensionOptions?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    }[] | undefined;
                    nonCriticalExtensionOptions?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    }[] | undefined;
                }): _120.TxBody;
            };
            AuthInfo: {
                encode(message: _120.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.AuthInfo;
                fromPartial(object: {
                    signerInfos?: {
                        publicKey?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        modeInfo?: {
                            single?: {
                                mode?: _118.SignMode | undefined;
                            } | undefined;
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number | undefined;
                                    elems?: Uint8Array | undefined;
                                } | undefined;
                                modeInfos?: any[] | undefined;
                            } | undefined;
                        } | undefined;
                        sequence?: string | number | import("long").Long | undefined;
                    }[] | undefined;
                    fee?: {
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        gasLimit?: string | number | import("long").Long | undefined;
                        payer?: string | undefined;
                        granter?: string | undefined;
                    } | undefined;
                    tip?: {
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        tipper?: string | undefined;
                    } | undefined;
                }): _120.AuthInfo;
            };
            SignerInfo: {
                encode(message: _120.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.SignerInfo;
                fromPartial(object: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: _118.SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | import("long").Long | undefined;
                }): _120.SignerInfo;
            };
            ModeInfo: {
                encode(message: _120.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.ModeInfo;
                fromPartial(object: {
                    single?: {
                        mode?: _118.SignMode | undefined;
                    } | undefined;
                    multi?: {
                        bitarray?: {
                            extraBitsStored?: number | undefined;
                            elems?: Uint8Array | undefined;
                        } | undefined;
                        modeInfos?: any[] | undefined;
                    } | undefined;
                }): _120.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _120.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.ModeInfo_Single;
                fromPartial(object: {
                    mode?: _118.SignMode | undefined;
                }): _120.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _120.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.ModeInfo_Multi;
                fromPartial(object: {
                    bitarray?: {
                        extraBitsStored?: number | undefined;
                        elems?: Uint8Array | undefined;
                    } | undefined;
                    modeInfos?: any[] | undefined;
                }): _120.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _120.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.Fee;
                fromPartial(object: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | import("long").Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                }): _120.Fee;
            };
            Tip: {
                encode(message: _120.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.Tip;
                fromPartial(object: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                }): _120.Tip;
            };
            AuxSignerData: {
                encode(message: _120.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.AuxSignerData;
                fromPartial(object: {
                    address?: string | undefined;
                    signDoc?: {
                        bodyBytes?: Uint8Array | undefined;
                        publicKey?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        chainId?: string | undefined;
                        accountNumber?: string | number | import("long").Long | undefined;
                        sequence?: string | number | import("long").Long | undefined;
                        tip?: {
                            amount?: {
                                denom?: string | undefined;
                                amount?: string | undefined;
                            }[] | undefined;
                            tipper?: string | undefined;
                        } | undefined;
                    } | undefined;
                    mode?: _118.SignMode | undefined;
                    sig?: Uint8Array | undefined;
                }): _120.AuxSignerData;
            };
            orderByFromJSON(object: any): _119.OrderBy;
            orderByToJSON(object: _119.OrderBy): string;
            broadcastModeFromJSON(object: any): _119.BroadcastMode;
            broadcastModeToJSON(object: _119.BroadcastMode): string;
            OrderBy: typeof _119.OrderBy;
            OrderBySDKType: typeof _119.OrderBy;
            BroadcastMode: typeof _119.BroadcastMode;
            BroadcastModeSDKType: typeof _119.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _119.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.GetTxsEventRequest;
                fromPartial(object: {
                    events?: string[] | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                    orderBy?: _119.OrderBy | undefined;
                    page?: string | number | import("long").Long | undefined;
                    limit?: string | number | import("long").Long | undefined;
                    query?: string | undefined;
                }): _119.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _119.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.GetTxsEventResponse;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            }[] | undefined;
                            memo?: string | undefined;
                            timeoutHeight?: string | number | import("long").Long | undefined;
                            extensionOptions?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            }[] | undefined;
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string | undefined;
                                    value?: Uint8Array | undefined;
                                } | undefined;
                                modeInfo?: {
                                    single?: {
                                        mode?: _118.SignMode | undefined;
                                    } | undefined;
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number | undefined;
                                            elems?: Uint8Array | undefined;
                                        } | undefined;
                                        modeInfos?: any[] | undefined;
                                    } | undefined;
                                } | undefined;
                                sequence?: string | number | import("long").Long | undefined;
                            }[] | undefined;
                            fee?: {
                                amount?: {
                                    denom?: string | undefined;
                                    amount?: string | undefined;
                                }[] | undefined;
                                gasLimit?: string | number | import("long").Long | undefined;
                                payer?: string | undefined;
                                granter?: string | undefined;
                            } | undefined;
                            tip?: {
                                amount?: {
                                    denom?: string | undefined;
                                    amount?: string | undefined;
                                }[] | undefined;
                                tipper?: string | undefined;
                            } | undefined;
                        } | undefined;
                        signatures?: Uint8Array[] | undefined;
                    }[] | undefined;
                    txResponses?: {
                        height?: string | number | import("long").Long | undefined;
                        txhash?: string | undefined;
                        codespace?: string | undefined;
                        code?: number | undefined;
                        data?: string | undefined;
                        rawLog?: string | undefined;
                        logs?: {
                            msgIndex?: number | undefined;
                            log?: string | undefined;
                            events?: {
                                type?: string | undefined;
                                attributes?: {
                                    key?: string | undefined;
                                    value?: string | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        info?: string | undefined;
                        gasWanted?: string | number | import("long").Long | undefined;
                        gasUsed?: string | number | import("long").Long | undefined;
                        tx?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        timestamp?: string | undefined;
                        events?: {
                            type?: string | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                                index?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                    total?: string | number | import("long").Long | undefined;
                }): _119.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _119.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.BroadcastTxRequest;
                fromPartial(object: {
                    txBytes?: Uint8Array | undefined;
                    mode?: _119.BroadcastMode | undefined;
                }): _119.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _119.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.BroadcastTxResponse;
                fromPartial(object: {
                    txResponse?: {
                        height?: string | number | import("long").Long | undefined;
                        txhash?: string | undefined;
                        codespace?: string | undefined;
                        code?: number | undefined;
                        data?: string | undefined;
                        rawLog?: string | undefined;
                        logs?: {
                            msgIndex?: number | undefined;
                            log?: string | undefined;
                            events?: {
                                type?: string | undefined;
                                attributes?: {
                                    key?: string | undefined;
                                    value?: string | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        info?: string | undefined;
                        gasWanted?: string | number | import("long").Long | undefined;
                        gasUsed?: string | number | import("long").Long | undefined;
                        tx?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        timestamp?: string | undefined;
                        events?: {
                            type?: string | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                                index?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                }): _119.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _119.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.SimulateRequest;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            }[] | undefined;
                            memo?: string | undefined;
                            timeoutHeight?: string | number | import("long").Long | undefined;
                            extensionOptions?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            }[] | undefined;
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string | undefined;
                                    value?: Uint8Array | undefined;
                                } | undefined;
                                modeInfo?: {
                                    single?: {
                                        mode?: _118.SignMode | undefined;
                                    } | undefined;
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number | undefined;
                                            elems?: Uint8Array | undefined;
                                        } | undefined;
                                        modeInfos?: any[] | undefined;
                                    } | undefined;
                                } | undefined;
                                sequence?: string | number | import("long").Long | undefined;
                            }[] | undefined;
                            fee?: {
                                amount?: {
                                    denom?: string | undefined;
                                    amount?: string | undefined;
                                }[] | undefined;
                                gasLimit?: string | number | import("long").Long | undefined;
                                payer?: string | undefined;
                                granter?: string | undefined;
                            } | undefined;
                            tip?: {
                                amount?: {
                                    denom?: string | undefined;
                                    amount?: string | undefined;
                                }[] | undefined;
                                tipper?: string | undefined;
                            } | undefined;
                        } | undefined;
                        signatures?: Uint8Array[] | undefined;
                    } | undefined;
                    txBytes?: Uint8Array | undefined;
                }): _119.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _119.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.SimulateResponse;
                fromPartial(object: {
                    gasInfo?: {
                        gasWanted?: string | number | import("long").Long | undefined;
                        gasUsed?: string | number | import("long").Long | undefined;
                    } | undefined;
                    result?: {
                        data?: Uint8Array | undefined;
                        log?: string | undefined;
                        events?: {
                            type?: string | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                                index?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        msgResponses?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                }): _119.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _119.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.GetTxRequest;
                fromPartial(object: {
                    hash?: string | undefined;
                }): _119.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _119.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.GetTxResponse;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            }[] | undefined;
                            memo?: string | undefined;
                            timeoutHeight?: string | number | import("long").Long | undefined;
                            extensionOptions?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            }[] | undefined;
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string | undefined;
                                    value?: Uint8Array | undefined;
                                } | undefined;
                                modeInfo?: {
                                    single?: {
                                        mode?: _118.SignMode | undefined;
                                    } | undefined;
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number | undefined;
                                            elems?: Uint8Array | undefined;
                                        } | undefined;
                                        modeInfos?: any[] | undefined;
                                    } | undefined;
                                } | undefined;
                                sequence?: string | number | import("long").Long | undefined;
                            }[] | undefined;
                            fee?: {
                                amount?: {
                                    denom?: string | undefined;
                                    amount?: string | undefined;
                                }[] | undefined;
                                gasLimit?: string | number | import("long").Long | undefined;
                                payer?: string | undefined;
                                granter?: string | undefined;
                            } | undefined;
                            tip?: {
                                amount?: {
                                    denom?: string | undefined;
                                    amount?: string | undefined;
                                }[] | undefined;
                                tipper?: string | undefined;
                            } | undefined;
                        } | undefined;
                        signatures?: Uint8Array[] | undefined;
                    } | undefined;
                    txResponse?: {
                        height?: string | number | import("long").Long | undefined;
                        txhash?: string | undefined;
                        codespace?: string | undefined;
                        code?: number | undefined;
                        data?: string | undefined;
                        rawLog?: string | undefined;
                        logs?: {
                            msgIndex?: number | undefined;
                            log?: string | undefined;
                            events?: {
                                type?: string | undefined;
                                attributes?: {
                                    key?: string | undefined;
                                    value?: string | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        info?: string | undefined;
                        gasWanted?: string | number | import("long").Long | undefined;
                        gasUsed?: string | number | import("long").Long | undefined;
                        tx?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        timestamp?: string | undefined;
                        events?: {
                            type?: string | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                                index?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                }): _119.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _119.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.GetBlockWithTxsRequest;
                fromPartial(object: {
                    height?: string | number | import("long").Long | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | number | import("long").Long | undefined;
                        limit?: string | number | import("long").Long | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                }): _119.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _119.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.GetBlockWithTxsResponse;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            }[] | undefined;
                            memo?: string | undefined;
                            timeoutHeight?: string | number | import("long").Long | undefined;
                            extensionOptions?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            }[] | undefined;
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string | undefined;
                                    value?: Uint8Array | undefined;
                                } | undefined;
                                modeInfo?: {
                                    single?: {
                                        mode?: _118.SignMode | undefined;
                                    } | undefined;
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number | undefined;
                                            elems?: Uint8Array | undefined;
                                        } | undefined;
                                        modeInfos?: any[] | undefined;
                                    } | undefined;
                                } | undefined;
                                sequence?: string | number | import("long").Long | undefined;
                            }[] | undefined;
                            fee?: {
                                amount?: {
                                    denom?: string | undefined;
                                    amount?: string | undefined;
                                }[] | undefined;
                                gasLimit?: string | number | import("long").Long | undefined;
                                payer?: string | undefined;
                                granter?: string | undefined;
                            } | undefined;
                            tip?: {
                                amount?: {
                                    denom?: string | undefined;
                                    amount?: string | undefined;
                                }[] | undefined;
                                tipper?: string | undefined;
                            } | undefined;
                        } | undefined;
                        signatures?: Uint8Array[] | undefined;
                    }[] | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    block?: {
                        header?: {
                            version?: {
                                block?: string | number | import("long").Long | undefined;
                                app?: string | number | import("long").Long | undefined;
                            } | undefined;
                            chainId?: string | undefined;
                            height?: string | number | import("long").Long | undefined;
                            time?: Date | undefined;
                            lastBlockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            lastCommitHash?: Uint8Array | undefined;
                            dataHash?: Uint8Array | undefined;
                            validatorsHash?: Uint8Array | undefined;
                            nextValidatorsHash?: Uint8Array | undefined;
                            consensusHash?: Uint8Array | undefined;
                            appHash?: Uint8Array | undefined;
                            lastResultsHash?: Uint8Array | undefined;
                            evidenceHash?: Uint8Array | undefined;
                            proposerAddress?: Uint8Array | undefined;
                        } | undefined;
                        data?: {
                            txs?: Uint8Array[] | undefined;
                        } | undefined;
                        evidence?: {
                            evidence?: {
                                duplicateVoteEvidence?: {
                                    voteA?: {
                                        type?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/types").SignedMsgType | undefined;
                                        height?: string | number | import("long").Long | undefined;
                                        round?: number | undefined;
                                        blockId?: {
                                            hash?: Uint8Array | undefined;
                                            partSetHeader?: {
                                                total?: number | undefined;
                                                hash?: Uint8Array | undefined;
                                            } | undefined;
                                        } | undefined;
                                        timestamp?: Date | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        validatorIndex?: number | undefined;
                                        signature?: Uint8Array | undefined;
                                        extension?: Uint8Array | undefined;
                                        extensionSignature?: Uint8Array | undefined;
                                    } | undefined;
                                    voteB?: {
                                        type?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/types").SignedMsgType | undefined;
                                        height?: string | number | import("long").Long | undefined;
                                        round?: number | undefined;
                                        blockId?: {
                                            hash?: Uint8Array | undefined;
                                            partSetHeader?: {
                                                total?: number | undefined;
                                                hash?: Uint8Array | undefined;
                                            } | undefined;
                                        } | undefined;
                                        timestamp?: Date | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        validatorIndex?: number | undefined;
                                        signature?: Uint8Array | undefined;
                                        extension?: Uint8Array | undefined;
                                        extensionSignature?: Uint8Array | undefined;
                                    } | undefined;
                                    totalVotingPower?: string | number | import("long").Long | undefined;
                                    validatorPower?: string | number | import("long").Long | undefined;
                                    timestamp?: Date | undefined;
                                } | undefined;
                                lightClientAttackEvidence?: {
                                    conflictingBlock?: {
                                        signedHeader?: {
                                            header?: {
                                                version?: {
                                                    block?: string | number | import("long").Long | undefined;
                                                    app?: string | number | import("long").Long | undefined;
                                                } | undefined;
                                                chainId?: string | undefined;
                                                height?: string | number | import("long").Long | undefined;
                                                time?: Date | undefined;
                                                lastBlockId?: {
                                                    hash?: Uint8Array | undefined;
                                                    partSetHeader?: {
                                                        total?: number | undefined;
                                                        hash?: Uint8Array | undefined;
                                                    } | undefined;
                                                } | undefined;
                                                lastCommitHash?: Uint8Array | undefined;
                                                dataHash?: Uint8Array | undefined;
                                                validatorsHash?: Uint8Array | undefined;
                                                nextValidatorsHash?: Uint8Array | undefined;
                                                consensusHash?: Uint8Array | undefined;
                                                appHash?: Uint8Array | undefined;
                                                lastResultsHash?: Uint8Array | undefined;
                                                evidenceHash?: Uint8Array | undefined;
                                                proposerAddress?: Uint8Array | undefined;
                                            } | undefined;
                                            commit?: {
                                                height?: string | number | import("long").Long | undefined;
                                                round?: number | undefined;
                                                blockId?: {
                                                    hash?: Uint8Array | undefined;
                                                    partSetHeader?: {
                                                        total?: number | undefined;
                                                        hash?: Uint8Array | undefined;
                                                    } | undefined;
                                                } | undefined;
                                                signatures?: {
                                                    blockIdFlag?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/validator").BlockIDFlag | undefined;
                                                    validatorAddress?: Uint8Array | undefined;
                                                    timestamp?: Date | undefined;
                                                    signature?: Uint8Array | undefined;
                                                }[] | undefined;
                                            } | undefined;
                                        } | undefined;
                                        validatorSet?: {
                                            validators?: {
                                                address?: Uint8Array | undefined;
                                                pubKey?: {
                                                    ed25519?: Uint8Array | undefined;
                                                    secp256k1?: Uint8Array | undefined;
                                                } | undefined;
                                                votingPower?: string | number | import("long").Long | undefined;
                                                proposerPriority?: string | number | import("long").Long | undefined;
                                            }[] | undefined;
                                            proposer?: {
                                                address?: Uint8Array | undefined;
                                                pubKey?: {
                                                    ed25519?: Uint8Array | undefined;
                                                    secp256k1?: Uint8Array | undefined;
                                                } | undefined;
                                                votingPower?: string | number | import("long").Long | undefined;
                                                proposerPriority?: string | number | import("long").Long | undefined;
                                            } | undefined;
                                            totalVotingPower?: string | number | import("long").Long | undefined;
                                        } | undefined;
                                    } | undefined;
                                    commonHeight?: string | number | import("long").Long | undefined;
                                    byzantineValidators?: {
                                        address?: Uint8Array | undefined;
                                        pubKey?: {
                                            ed25519?: Uint8Array | undefined;
                                            secp256k1?: Uint8Array | undefined;
                                        } | undefined;
                                        votingPower?: string | number | import("long").Long | undefined;
                                        proposerPriority?: string | number | import("long").Long | undefined;
                                    }[] | undefined;
                                    totalVotingPower?: string | number | import("long").Long | undefined;
                                    timestamp?: Date | undefined;
                                } | undefined;
                            }[] | undefined;
                        } | undefined;
                        lastCommit?: {
                            height?: string | number | import("long").Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            signatures?: {
                                blockIdFlag?: import("@dydxprotocol/v4-proto/src/codegen/tendermint/types/validator").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: Date | undefined;
                                signature?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _119.GetBlockWithTxsResponse;
            };
            TxDecodeRequest: {
                encode(message: _119.TxDecodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.TxDecodeRequest;
                fromPartial(object: {
                    txBytes?: Uint8Array | undefined;
                }): _119.TxDecodeRequest;
            };
            TxDecodeResponse: {
                encode(message: _119.TxDecodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.TxDecodeResponse;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            }[] | undefined;
                            memo?: string | undefined;
                            timeoutHeight?: string | number | import("long").Long | undefined;
                            extensionOptions?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            }[] | undefined;
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string | undefined;
                                    value?: Uint8Array | undefined;
                                } | undefined;
                                modeInfo?: {
                                    single?: {
                                        mode?: _118.SignMode | undefined;
                                    } | undefined;
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number | undefined;
                                            elems?: Uint8Array | undefined;
                                        } | undefined;
                                        modeInfos?: any[] | undefined;
                                    } | undefined;
                                } | undefined;
                                sequence?: string | number | import("long").Long | undefined;
                            }[] | undefined;
                            fee?: {
                                amount?: {
                                    denom?: string | undefined;
                                    amount?: string | undefined;
                                }[] | undefined;
                                gasLimit?: string | number | import("long").Long | undefined;
                                payer?: string | undefined;
                                granter?: string | undefined;
                            } | undefined;
                            tip?: {
                                amount?: {
                                    denom?: string | undefined;
                                    amount?: string | undefined;
                                }[] | undefined;
                                tipper?: string | undefined;
                            } | undefined;
                        } | undefined;
                        signatures?: Uint8Array[] | undefined;
                    } | undefined;
                }): _119.TxDecodeResponse;
            };
            TxEncodeRequest: {
                encode(message: _119.TxEncodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.TxEncodeRequest;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            }[] | undefined;
                            memo?: string | undefined;
                            timeoutHeight?: string | number | import("long").Long | undefined;
                            extensionOptions?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            }[] | undefined;
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string | undefined;
                                    value?: Uint8Array | undefined;
                                } | undefined;
                                modeInfo?: {
                                    single?: {
                                        mode?: _118.SignMode | undefined;
                                    } | undefined;
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number | undefined;
                                            elems?: Uint8Array | undefined;
                                        } | undefined;
                                        modeInfos?: any[] | undefined;
                                    } | undefined;
                                } | undefined;
                                sequence?: string | number | import("long").Long | undefined;
                            }[] | undefined;
                            fee?: {
                                amount?: {
                                    denom?: string | undefined;
                                    amount?: string | undefined;
                                }[] | undefined;
                                gasLimit?: string | number | import("long").Long | undefined;
                                payer?: string | undefined;
                                granter?: string | undefined;
                            } | undefined;
                            tip?: {
                                amount?: {
                                    denom?: string | undefined;
                                    amount?: string | undefined;
                                }[] | undefined;
                                tipper?: string | undefined;
                            } | undefined;
                        } | undefined;
                        signatures?: Uint8Array[] | undefined;
                    } | undefined;
                }): _119.TxEncodeRequest;
            };
            TxEncodeResponse: {
                encode(message: _119.TxEncodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.TxEncodeResponse;
                fromPartial(object: {
                    txBytes?: Uint8Array | undefined;
                }): _119.TxEncodeResponse;
            };
            TxEncodeAminoRequest: {
                encode(message: _119.TxEncodeAminoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.TxEncodeAminoRequest;
                fromPartial(object: {
                    aminoJson?: string | undefined;
                }): _119.TxEncodeAminoRequest;
            };
            TxEncodeAminoResponse: {
                encode(message: _119.TxEncodeAminoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.TxEncodeAminoResponse;
                fromPartial(object: {
                    aminoBinary?: Uint8Array | undefined;
                }): _119.TxEncodeAminoResponse;
            };
            TxDecodeAminoRequest: {
                encode(message: _119.TxDecodeAminoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.TxDecodeAminoRequest;
                fromPartial(object: {
                    aminoBinary?: Uint8Array | undefined;
                }): _119.TxDecodeAminoRequest;
            };
            TxDecodeAminoResponse: {
                encode(message: _119.TxDecodeAminoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.TxDecodeAminoResponse;
                fromPartial(object: {
                    aminoJson?: string | undefined;
                }): _119.TxDecodeAminoResponse;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _121.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.Module;
                    fromPartial(object: {
                        authority?: string | undefined;
                    }): _121.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _327.MsgClientImpl;
            QueryClientImpl: typeof _310.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _122.QueryCurrentPlanRequest | undefined): Promise<_122.QueryCurrentPlanResponse>;
                appliedPlan(request: _122.QueryAppliedPlanRequest): Promise<_122.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _122.QueryUpgradedConsensusStateRequest): Promise<_122.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _122.QueryModuleVersionsRequest): Promise<_122.QueryModuleVersionsResponse>;
                authority(request?: _122.QueryAuthorityRequest | undefined): Promise<_122.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _288.LCDQueryClient;
            Plan: {
                encode(message: _124.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.Plan;
                fromPartial(object: {
                    name?: string | undefined;
                    time?: Date | undefined;
                    height?: string | number | import("long").Long | undefined;
                    info?: string | undefined;
                    upgradedClientState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }): _124.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _124.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.SoftwareUpgradeProposal;
                fromPartial(object: {
                    title?: string | undefined;
                    description?: string | undefined;
                    plan?: {
                        name?: string | undefined;
                        time?: Date | undefined;
                        height?: string | number | import("long").Long | undefined;
                        info?: string | undefined;
                        upgradedClientState?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                }): _124.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _124.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.CancelSoftwareUpgradeProposal;
                fromPartial(object: {
                    title?: string | undefined;
                    description?: string | undefined;
                }): _124.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _124.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.ModuleVersion;
                fromPartial(object: {
                    name?: string | undefined;
                    version?: string | number | import("long").Long | undefined;
                }): _124.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _123.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgSoftwareUpgrade;
                fromPartial(object: {
                    authority?: string | undefined;
                    plan?: {
                        name?: string | undefined;
                        time?: Date | undefined;
                        height?: string | number | import("long").Long | undefined;
                        info?: string | undefined;
                        upgradedClientState?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                }): _123.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _123.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgSoftwareUpgradeResponse;
                fromPartial(_: {}): _123.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _123.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgCancelUpgrade;
                fromPartial(object: {
                    authority?: string | undefined;
                }): _123.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _123.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgCancelUpgradeResponse;
                fromPartial(_: {}): _123.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _122.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryCurrentPlanRequest;
                fromPartial(_: {}): _122.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _122.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryCurrentPlanResponse;
                fromPartial(object: {
                    plan?: {
                        name?: string | undefined;
                        time?: Date | undefined;
                        height?: string | number | import("long").Long | undefined;
                        info?: string | undefined;
                        upgradedClientState?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                }): _122.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _122.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryAppliedPlanRequest;
                fromPartial(object: {
                    name?: string | undefined;
                }): _122.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _122.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryAppliedPlanResponse;
                fromPartial(object: {
                    height?: string | number | import("long").Long | undefined;
                }): _122.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _122.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryUpgradedConsensusStateRequest;
                fromPartial(object: {
                    lastHeight?: string | number | import("long").Long | undefined;
                }): _122.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _122.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryUpgradedConsensusStateResponse;
                fromPartial(object: {
                    upgradedConsensusState?: Uint8Array | undefined;
                }): _122.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _122.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryModuleVersionsRequest;
                fromPartial(object: {
                    moduleName?: string | undefined;
                }): _122.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _122.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryModuleVersionsResponse;
                fromPartial(object: {
                    moduleVersions?: {
                        name?: string | undefined;
                        version?: string | number | import("long").Long | undefined;
                    }[] | undefined;
                }): _122.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _122.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryAuthorityRequest;
                fromPartial(_: {}): _122.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _122.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryAuthorityResponse;
                fromPartial(object: {
                    address?: string | undefined;
                }): _122.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _125.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.Module;
                    fromPartial(_: {}): _125.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _328.MsgClientImpl;
            BaseVestingAccount: {
                encode(message: _127.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.BaseVestingAccount;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string | undefined;
                        pubKey?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        accountNumber?: string | number | import("long").Long | undefined;
                        sequence?: string | number | import("long").Long | undefined;
                    } | undefined;
                    originalVesting?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    delegatedFree?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    delegatedVesting?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    endTime?: string | number | import("long").Long | undefined;
                }): _127.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _127.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.ContinuousVestingAccount;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string | undefined;
                            pubKey?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            } | undefined;
                            accountNumber?: string | number | import("long").Long | undefined;
                            sequence?: string | number | import("long").Long | undefined;
                        } | undefined;
                        originalVesting?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        delegatedFree?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        delegatedVesting?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        endTime?: string | number | import("long").Long | undefined;
                    } | undefined;
                    startTime?: string | number | import("long").Long | undefined;
                }): _127.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _127.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.DelayedVestingAccount;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string | undefined;
                            pubKey?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            } | undefined;
                            accountNumber?: string | number | import("long").Long | undefined;
                            sequence?: string | number | import("long").Long | undefined;
                        } | undefined;
                        originalVesting?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        delegatedFree?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        delegatedVesting?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        endTime?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _127.DelayedVestingAccount;
            };
            Period: {
                encode(message: _127.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.Period;
                fromPartial(object: {
                    length?: string | number | import("long").Long | undefined;
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _127.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _127.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.PeriodicVestingAccount;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string | undefined;
                            pubKey?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            } | undefined;
                            accountNumber?: string | number | import("long").Long | undefined;
                            sequence?: string | number | import("long").Long | undefined;
                        } | undefined;
                        originalVesting?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        delegatedFree?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        delegatedVesting?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        endTime?: string | number | import("long").Long | undefined;
                    } | undefined;
                    startTime?: string | number | import("long").Long | undefined;
                    vestingPeriods?: {
                        length?: string | number | import("long").Long | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                }): _127.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _127.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.PermanentLockedAccount;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string | undefined;
                            pubKey?: {
                                typeUrl?: string | undefined;
                                value?: Uint8Array | undefined;
                            } | undefined;
                            accountNumber?: string | number | import("long").Long | undefined;
                            sequence?: string | number | import("long").Long | undefined;
                        } | undefined;
                        originalVesting?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        delegatedFree?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        delegatedVesting?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        endTime?: string | number | import("long").Long | undefined;
                    } | undefined;
                }): _127.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _126.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.MsgCreateVestingAccount;
                fromPartial(object: {
                    fromAddress?: string | undefined;
                    toAddress?: string | undefined;
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    endTime?: string | number | import("long").Long | undefined;
                    delayed?: boolean | undefined;
                }): _126.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _126.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.MsgCreateVestingAccountResponse;
                fromPartial(_: {}): _126.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _126.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.MsgCreatePermanentLockedAccount;
                fromPartial(object: {
                    fromAddress?: string | undefined;
                    toAddress?: string | undefined;
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }): _126.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _126.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: {}): _126.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _126.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.MsgCreatePeriodicVestingAccount;
                fromPartial(object: {
                    fromAddress?: string | undefined;
                    toAddress?: string | undefined;
                    startTime?: string | number | import("long").Long | undefined;
                    vestingPeriods?: {
                        length?: string | number | import("long").Long | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                }): _126.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _126.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: {}): _126.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("@dydxprotocol/v4-proto/src/codegen/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _311.MsgClientImpl;
                };
                authz: {
                    v1beta1: _312.MsgClientImpl;
                };
                bank: {
                    v1beta1: _313.MsgClientImpl;
                };
                circuit: {
                    v1: _314.MsgClientImpl;
                };
                consensus: {
                    v1: _315.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _316.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _317.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _318.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _319.MsgClientImpl;
                };
                gov: {
                    v1: _320.MsgClientImpl;
                    v1beta1: _321.MsgClientImpl;
                };
                group: {
                    v1: _322.MsgClientImpl;
                };
                mint: {
                    v1beta1: _323.MsgClientImpl;
                };
                nft: {
                    v1beta1: _324.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _325.MsgClientImpl;
                };
                staking: {
                    v1beta1: _326.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _327.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _328.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _5.QueryConfigRequest | undefined): Promise<_5.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _9.QueryAccountsRequest | undefined): Promise<_9.QueryAccountsResponse>;
                        account(request: _9.QueryAccountRequest): Promise<_9.QueryAccountResponse>;
                        accountAddressByID(request: _9.QueryAccountAddressByIDRequest): Promise<_9.QueryAccountAddressByIDResponse>;
                        params(request?: _9.QueryParamsRequest | undefined): Promise<_9.QueryParamsResponse>;
                        moduleAccounts(request?: _9.QueryModuleAccountsRequest | undefined): Promise<_9.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _9.QueryModuleAccountByNameRequest): Promise<_9.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _9.Bech32PrefixRequest | undefined): Promise<_9.Bech32PrefixResponse>;
                        addressBytesToString(request: _9.AddressBytesToStringRequest): Promise<_9.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _9.AddressStringToBytesRequest): Promise<_9.AddressStringToBytesResponse>;
                        accountInfo(request: _9.QueryAccountInfoRequest): Promise<_9.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _15.QueryGrantsRequest): Promise<_15.QueryGrantsResponse>;
                        granterGrants(request: _15.QueryGranterGrantsRequest): Promise<_15.QueryGranterGrantsResponse>;
                        granteeGrants(request: _15.QueryGranteeGrantsRequest): Promise<_15.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _21.QueryBalanceRequest): Promise<_21.QueryBalanceResponse>;
                        allBalances(request: _21.QueryAllBalancesRequest): Promise<_21.QueryAllBalancesResponse>;
                        spendableBalances(request: _21.QuerySpendableBalancesRequest): Promise<_21.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _21.QuerySpendableBalanceByDenomRequest): Promise<_21.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _21.QueryTotalSupplyRequest | undefined): Promise<_21.QueryTotalSupplyResponse>;
                        supplyOf(request: _21.QuerySupplyOfRequest): Promise<_21.QuerySupplyOfResponse>;
                        params(request?: _21.QueryParamsRequest | undefined): Promise<_21.QueryParamsResponse>;
                        denomMetadata(request: _21.QueryDenomMetadataRequest): Promise<_21.QueryDenomMetadataResponse>;
                        denomMetadataByQueryString(request: _21.QueryDenomMetadataByQueryStringRequest): Promise<_21.QueryDenomMetadataByQueryStringResponse>;
                        denomsMetadata(request?: _21.QueryDenomsMetadataRequest | undefined): Promise<_21.QueryDenomsMetadataResponse>;
                        denomOwners(request: _21.QueryDenomOwnersRequest): Promise<_21.QueryDenomOwnersResponse>;
                        sendEnabled(request: _21.QuerySendEnabledRequest): Promise<_21.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _24.ConfigRequest | undefined): Promise<_24.ConfigResponse>;
                            status(request?: _24.StatusRequest | undefined): Promise<_24.StatusResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _28.GetNodeInfoRequest | undefined): Promise<_28.GetNodeInfoResponse>;
                            getSyncing(request?: _28.GetSyncingRequest | undefined): Promise<_28.GetSyncingResponse>;
                            getLatestBlock(request?: _28.GetLatestBlockRequest | undefined): Promise<_28.GetLatestBlockResponse>;
                            getBlockByHeight(request: _28.GetBlockByHeightRequest): Promise<_28.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _28.GetLatestValidatorSetRequest | undefined): Promise<_28.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _28.GetValidatorSetByHeightRequest): Promise<_28.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _28.ABCIQueryRequest): Promise<_28.ABCIQueryResponse>;
                        };
                    };
                };
                circuit: {
                    v1: {
                        account(request: _32.QueryAccountRequest): Promise<_32.AccountResponse>;
                        accounts(request?: _32.QueryAccountsRequest | undefined): Promise<_32.AccountsResponse>;
                        disabledList(request?: _32.QueryDisabledListRequest | undefined): Promise<_32.DisabledListResponse>;
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _36.QueryParamsRequest | undefined): Promise<_36.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _50.QueryParamsRequest | undefined): Promise<_50.QueryParamsResponse>;
                        validatorDistributionInfo(request: _50.QueryValidatorDistributionInfoRequest): Promise<_50.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _50.QueryValidatorOutstandingRewardsRequest): Promise<_50.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _50.QueryValidatorCommissionRequest): Promise<_50.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _50.QueryValidatorSlashesRequest): Promise<_50.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _50.QueryDelegationRewardsRequest): Promise<_50.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _50.QueryDelegationTotalRewardsRequest): Promise<_50.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _50.QueryDelegatorValidatorsRequest): Promise<_50.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _50.QueryDelegatorWithdrawAddressRequest): Promise<_50.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _50.QueryCommunityPoolRequest | undefined): Promise<_50.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _55.QueryEvidenceRequest): Promise<_55.QueryEvidenceResponse>;
                        allEvidence(request?: _55.QueryAllEvidenceRequest | undefined): Promise<_55.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _60.QueryAllowanceRequest): Promise<_60.QueryAllowanceResponse>;
                        allowances(request: _60.QueryAllowancesRequest): Promise<_60.QueryAllowancesResponse>;
                        allowancesByGranter(request: _60.QueryAllowancesByGranterRequest): Promise<_60.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        constitution(request?: _67.QueryConstitutionRequest | undefined): Promise<_67.QueryConstitutionResponse>;
                        proposal(request: _67.QueryProposalRequest): Promise<_67.QueryProposalResponse>;
                        proposals(request: _67.QueryProposalsRequest): Promise<_67.QueryProposalsResponse>;
                        vote(request: _67.QueryVoteRequest): Promise<_67.QueryVoteResponse>;
                        votes(request: _67.QueryVotesRequest): Promise<_67.QueryVotesResponse>;
                        params(request: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                        deposit(request: _67.QueryDepositRequest): Promise<_67.QueryDepositResponse>;
                        deposits(request: _67.QueryDepositsRequest): Promise<_67.QueryDepositsResponse>;
                        tallyResult(request: _67.QueryTallyResultRequest): Promise<_67.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _71.QueryProposalRequest): Promise<_71.QueryProposalResponse>;
                        proposals(request: _71.QueryProposalsRequest): Promise<_71.QueryProposalsResponse>;
                        vote(request: _71.QueryVoteRequest): Promise<_71.QueryVoteResponse>;
                        votes(request: _71.QueryVotesRequest): Promise<_71.QueryVotesResponse>;
                        params(request: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                        deposit(request: _71.QueryDepositRequest): Promise<_71.QueryDepositResponse>;
                        deposits(request: _71.QueryDepositsRequest): Promise<_71.QueryDepositsResponse>;
                        tallyResult(request: _71.QueryTallyResultRequest): Promise<_71.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _76.QueryGroupInfoRequest): Promise<_76.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _76.QueryGroupPolicyInfoRequest): Promise<_76.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _76.QueryGroupMembersRequest): Promise<_76.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _76.QueryGroupsByAdminRequest): Promise<_76.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _76.QueryGroupPoliciesByGroupRequest): Promise<_76.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _76.QueryGroupPoliciesByAdminRequest): Promise<_76.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _76.QueryProposalRequest): Promise<_76.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _76.QueryProposalsByGroupPolicyRequest): Promise<_76.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _76.QueryVoteByProposalVoterRequest): Promise<_76.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _76.QueryVotesByProposalRequest): Promise<_76.QueryVotesByProposalResponse>;
                        votesByVoter(request: _76.QueryVotesByVoterRequest): Promise<_76.QueryVotesByVoterResponse>;
                        groupsByMember(request: _76.QueryGroupsByMemberRequest): Promise<_76.QueryGroupsByMemberResponse>;
                        tallyResult(request: _76.QueryTallyResultRequest): Promise<_76.QueryTallyResultResponse>;
                        groups(request?: _76.QueryGroupsRequest | undefined): Promise<_76.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _82.QueryParamsRequest | undefined): Promise<_82.QueryParamsResponse>;
                        inflation(request?: _82.QueryInflationRequest | undefined): Promise<_82.QueryInflationResponse>;
                        annualProvisions(request?: _82.QueryAnnualProvisionsRequest | undefined): Promise<_82.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _90.QueryBalanceRequest): Promise<_90.QueryBalanceResponse>;
                        owner(request: _90.QueryOwnerRequest): Promise<_90.QueryOwnerResponse>;
                        supply(request: _90.QuerySupplyRequest): Promise<_90.QuerySupplyResponse>;
                        nFTs(request: _90.QueryNFTsRequest): Promise<_90.QueryNFTsResponse>;
                        nFT(request: _90.QueryNFTRequest): Promise<_90.QueryNFTResponse>;
                        class(request: _90.QueryClassRequest): Promise<_90.QueryClassResponse>;
                        classes(request?: _90.QueryClassesRequest | undefined): Promise<_90.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _93.GetRequest): Promise<_93.GetResponse>;
                            list(request: _93.ListRequest): Promise<_93.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                        subspaces(request?: _98.QuerySubspacesRequest | undefined): Promise<_98.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _103.QueryParamsRequest | undefined): Promise<_103.QueryParamsResponse>;
                        signingInfo(request: _103.QuerySigningInfoRequest): Promise<_103.QuerySigningInfoResponse>;
                        signingInfos(request?: _103.QuerySigningInfosRequest | undefined): Promise<_103.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _109.QueryValidatorsRequest): Promise<_109.QueryValidatorsResponse>;
                        validator(request: _109.QueryValidatorRequest): Promise<_109.QueryValidatorResponse>;
                        validatorDelegations(request: _109.QueryValidatorDelegationsRequest): Promise<_109.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _109.QueryValidatorUnbondingDelegationsRequest): Promise<_109.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _109.QueryDelegationRequest): Promise<_109.QueryDelegationResponse>;
                        unbondingDelegation(request: _109.QueryUnbondingDelegationRequest): Promise<_109.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _109.QueryDelegatorDelegationsRequest): Promise<_109.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _109.QueryDelegatorUnbondingDelegationsRequest): Promise<_109.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _109.QueryRedelegationsRequest): Promise<_109.QueryRedelegationsResponse>;
                        delegatorValidators(request: _109.QueryDelegatorValidatorsRequest): Promise<_109.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _109.QueryDelegatorValidatorRequest): Promise<_109.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _109.QueryHistoricalInfoRequest): Promise<_109.QueryHistoricalInfoResponse>;
                        pool(request?: _109.QueryPoolRequest | undefined): Promise<_109.QueryPoolResponse>;
                        params(request?: _109.QueryParamsRequest | undefined): Promise<_109.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _119.SimulateRequest): Promise<_119.SimulateResponse>;
                        getTx(request: _119.GetTxRequest): Promise<_119.GetTxResponse>;
                        broadcastTx(request: _119.BroadcastTxRequest): Promise<_119.BroadcastTxResponse>;
                        getTxsEvent(request: _119.GetTxsEventRequest): Promise<_119.GetTxsEventResponse>;
                        getBlockWithTxs(request: _119.GetBlockWithTxsRequest): Promise<_119.GetBlockWithTxsResponse>;
                        txDecode(request: _119.TxDecodeRequest): Promise<_119.TxDecodeResponse>;
                        txEncode(request: _119.TxEncodeRequest): Promise<_119.TxEncodeResponse>;
                        txEncodeAmino(request: _119.TxEncodeAminoRequest): Promise<_119.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _119.TxDecodeAminoRequest): Promise<_119.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _122.QueryCurrentPlanRequest | undefined): Promise<_122.QueryCurrentPlanResponse>;
                        appliedPlan(request: _122.QueryAppliedPlanRequest): Promise<_122.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _122.QueryUpgradedConsensusStateRequest): Promise<_122.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _122.QueryModuleVersionsRequest): Promise<_122.QueryModuleVersionsResponse>;
                        authority(request?: _122.QueryAuthorityRequest | undefined): Promise<_122.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _269.LCDQueryClient;
                };
                authz: {
                    v1beta1: _270.LCDQueryClient;
                };
                bank: {
                    v1beta1: _271.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _272.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _273.LCDQueryClient;
                    };
                };
                circuit: {
                    v1: _274.LCDQueryClient;
                };
                consensus: {
                    v1: _275.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _276.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _277.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _278.LCDQueryClient;
                };
                gov: {
                    v1: _279.LCDQueryClient;
                    v1beta1: _280.LCDQueryClient;
                };
                group: {
                    v1: _281.LCDQueryClient;
                };
                mint: {
                    v1beta1: _282.LCDQueryClient;
                };
                nft: {
                    v1beta1: _283.LCDQueryClient;
                };
                params: {
                    v1beta1: _284.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _285.LCDQueryClient;
                };
                staking: {
                    v1beta1: _286.LCDQueryClient;
                };
                tx: {
                    v1beta1: _287.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _288.LCDQueryClient;
                };
            };
        }>;
    };
}
