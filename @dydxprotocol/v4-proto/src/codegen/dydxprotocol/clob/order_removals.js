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
exports.OrderRemoval = exports.orderRemoval_RemovalReasonToJSON = exports.orderRemoval_RemovalReasonFromJSON = exports.OrderRemoval_RemovalReasonSDKType = exports.OrderRemoval_RemovalReason = void 0;
const order_1 = require("./order");
const _m0 = __importStar(require("protobufjs/minimal"));
var OrderRemoval_RemovalReason;
(function (OrderRemoval_RemovalReason) {
    /**
     * REMOVAL_REASON_UNSPECIFIED - REMOVAL_REASON_UNSPECIFIED represents an unspecified removal reason. This
     * removal reason is used as a catchall and should never appear on an
     * OrderRemoval in the operations queue.
     */
    OrderRemoval_RemovalReason[OrderRemoval_RemovalReason["REMOVAL_REASON_UNSPECIFIED"] = 0] = "REMOVAL_REASON_UNSPECIFIED";
    /**
     * REMOVAL_REASON_UNDERCOLLATERALIZED - REMOVAL_REASON_UNDERCOLLATERALIZED represents a removal of an order which
     * if filled in isolation with respect to the current state of the
     * subaccount would leave the subaccount undercollateralized.
     */
    OrderRemoval_RemovalReason[OrderRemoval_RemovalReason["REMOVAL_REASON_UNDERCOLLATERALIZED"] = 1] = "REMOVAL_REASON_UNDERCOLLATERALIZED";
    /**
     * REMOVAL_REASON_INVALID_REDUCE_ONLY - REMOVAL_REASON_INVALID_REDUCE_ONLY represents a removal of a reduce-only
     * order which if filled in isolation with respect to the current state of
     * the subaccount would cause the subaccount's existing position to increase
     * or change sides.
     */
    OrderRemoval_RemovalReason[OrderRemoval_RemovalReason["REMOVAL_REASON_INVALID_REDUCE_ONLY"] = 2] = "REMOVAL_REASON_INVALID_REDUCE_ONLY";
    /**
     * REMOVAL_REASON_POST_ONLY_WOULD_CROSS_MAKER_ORDER - REMOVAL_REASON_POST_ONLY_WOULD_CROSS_MAKER_ORDER represents a removal of
     * a stateful post-only order that was deemed invalid because it crossed
     * maker orders on the book of the proposer.
     */
    OrderRemoval_RemovalReason[OrderRemoval_RemovalReason["REMOVAL_REASON_POST_ONLY_WOULD_CROSS_MAKER_ORDER"] = 3] = "REMOVAL_REASON_POST_ONLY_WOULD_CROSS_MAKER_ORDER";
    /**
     * REMOVAL_REASON_INVALID_SELF_TRADE - REMOVAL_REASON_INVALID_SELF_TRADE represents a removal of a stateful
     * order that was deemed invalid because it constituted a self trade on the
     * proposers orderbook.
     */
    OrderRemoval_RemovalReason[OrderRemoval_RemovalReason["REMOVAL_REASON_INVALID_SELF_TRADE"] = 4] = "REMOVAL_REASON_INVALID_SELF_TRADE";
    /**
     * REMOVAL_REASON_CONDITIONAL_FOK_COULD_NOT_BE_FULLY_FILLED - REMOVAL_REASON_CONDITIONAL_FOK_COULD_NOT_BE_FULLY_FILLED represents a
     * removal of a conditional FOK order that was deemed invalid because it
     * could not be completely filled. Conditional FOK orders should always be
     * fully-filled or removed in the block after they are triggered.
     */
    OrderRemoval_RemovalReason[OrderRemoval_RemovalReason["REMOVAL_REASON_CONDITIONAL_FOK_COULD_NOT_BE_FULLY_FILLED"] = 5] = "REMOVAL_REASON_CONDITIONAL_FOK_COULD_NOT_BE_FULLY_FILLED";
    /**
     * REMOVAL_REASON_CONDITIONAL_IOC_WOULD_REST_ON_BOOK - REMOVAL_REASON_CONDITIONAL_IOC_WOULD_REST_ON_BOOK represents a removal
     * of a conditional IOC order.
     * Conditional IOC orders should always have their remaining size removed
     * in the block after they are triggered.
     */
    OrderRemoval_RemovalReason[OrderRemoval_RemovalReason["REMOVAL_REASON_CONDITIONAL_IOC_WOULD_REST_ON_BOOK"] = 6] = "REMOVAL_REASON_CONDITIONAL_IOC_WOULD_REST_ON_BOOK";
    /**
     * REMOVAL_REASON_FULLY_FILLED - REMOVAL_REASON_FULLY_FILLED represents a removal of an order that
     * was fully filled and should therefore be removed from state.
     */
    OrderRemoval_RemovalReason[OrderRemoval_RemovalReason["REMOVAL_REASON_FULLY_FILLED"] = 7] = "REMOVAL_REASON_FULLY_FILLED";
    /**
     * REMOVAL_REASON_VIOLATES_ISOLATED_SUBACCOUNT_CONSTRAINTS - REMOVAL_REASON_FULLY_FILLED represents a removal of an order that
     *  would lead to the subaccount violating isolated subaccount constraints.
     */
    OrderRemoval_RemovalReason[OrderRemoval_RemovalReason["REMOVAL_REASON_VIOLATES_ISOLATED_SUBACCOUNT_CONSTRAINTS"] = 8] = "REMOVAL_REASON_VIOLATES_ISOLATED_SUBACCOUNT_CONSTRAINTS";
    OrderRemoval_RemovalReason[OrderRemoval_RemovalReason["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderRemoval_RemovalReason = exports.OrderRemoval_RemovalReason || (exports.OrderRemoval_RemovalReason = {}));
exports.OrderRemoval_RemovalReasonSDKType = OrderRemoval_RemovalReason;
function orderRemoval_RemovalReasonFromJSON(object) {
    switch (object) {
        case 0:
        case "REMOVAL_REASON_UNSPECIFIED":
            return OrderRemoval_RemovalReason.REMOVAL_REASON_UNSPECIFIED;
        case 1:
        case "REMOVAL_REASON_UNDERCOLLATERALIZED":
            return OrderRemoval_RemovalReason.REMOVAL_REASON_UNDERCOLLATERALIZED;
        case 2:
        case "REMOVAL_REASON_INVALID_REDUCE_ONLY":
            return OrderRemoval_RemovalReason.REMOVAL_REASON_INVALID_REDUCE_ONLY;
        case 3:
        case "REMOVAL_REASON_POST_ONLY_WOULD_CROSS_MAKER_ORDER":
            return OrderRemoval_RemovalReason.REMOVAL_REASON_POST_ONLY_WOULD_CROSS_MAKER_ORDER;
        case 4:
        case "REMOVAL_REASON_INVALID_SELF_TRADE":
            return OrderRemoval_RemovalReason.REMOVAL_REASON_INVALID_SELF_TRADE;
        case 5:
        case "REMOVAL_REASON_CONDITIONAL_FOK_COULD_NOT_BE_FULLY_FILLED":
            return OrderRemoval_RemovalReason.REMOVAL_REASON_CONDITIONAL_FOK_COULD_NOT_BE_FULLY_FILLED;
        case 6:
        case "REMOVAL_REASON_CONDITIONAL_IOC_WOULD_REST_ON_BOOK":
            return OrderRemoval_RemovalReason.REMOVAL_REASON_CONDITIONAL_IOC_WOULD_REST_ON_BOOK;
        case 7:
        case "REMOVAL_REASON_FULLY_FILLED":
            return OrderRemoval_RemovalReason.REMOVAL_REASON_FULLY_FILLED;
        case 8:
        case "REMOVAL_REASON_VIOLATES_ISOLATED_SUBACCOUNT_CONSTRAINTS":
            return OrderRemoval_RemovalReason.REMOVAL_REASON_VIOLATES_ISOLATED_SUBACCOUNT_CONSTRAINTS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderRemoval_RemovalReason.UNRECOGNIZED;
    }
}
exports.orderRemoval_RemovalReasonFromJSON = orderRemoval_RemovalReasonFromJSON;
function orderRemoval_RemovalReasonToJSON(object) {
    switch (object) {
        case OrderRemoval_RemovalReason.REMOVAL_REASON_UNSPECIFIED:
            return "REMOVAL_REASON_UNSPECIFIED";
        case OrderRemoval_RemovalReason.REMOVAL_REASON_UNDERCOLLATERALIZED:
            return "REMOVAL_REASON_UNDERCOLLATERALIZED";
        case OrderRemoval_RemovalReason.REMOVAL_REASON_INVALID_REDUCE_ONLY:
            return "REMOVAL_REASON_INVALID_REDUCE_ONLY";
        case OrderRemoval_RemovalReason.REMOVAL_REASON_POST_ONLY_WOULD_CROSS_MAKER_ORDER:
            return "REMOVAL_REASON_POST_ONLY_WOULD_CROSS_MAKER_ORDER";
        case OrderRemoval_RemovalReason.REMOVAL_REASON_INVALID_SELF_TRADE:
            return "REMOVAL_REASON_INVALID_SELF_TRADE";
        case OrderRemoval_RemovalReason.REMOVAL_REASON_CONDITIONAL_FOK_COULD_NOT_BE_FULLY_FILLED:
            return "REMOVAL_REASON_CONDITIONAL_FOK_COULD_NOT_BE_FULLY_FILLED";
        case OrderRemoval_RemovalReason.REMOVAL_REASON_CONDITIONAL_IOC_WOULD_REST_ON_BOOK:
            return "REMOVAL_REASON_CONDITIONAL_IOC_WOULD_REST_ON_BOOK";
        case OrderRemoval_RemovalReason.REMOVAL_REASON_FULLY_FILLED:
            return "REMOVAL_REASON_FULLY_FILLED";
        case OrderRemoval_RemovalReason.REMOVAL_REASON_VIOLATES_ISOLATED_SUBACCOUNT_CONSTRAINTS:
            return "REMOVAL_REASON_VIOLATES_ISOLATED_SUBACCOUNT_CONSTRAINTS";
        case OrderRemoval_RemovalReason.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.orderRemoval_RemovalReasonToJSON = orderRemoval_RemovalReasonToJSON;
function createBaseOrderRemoval() {
    return {
        orderId: undefined,
        removalReason: 0
    };
}
exports.OrderRemoval = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderId !== undefined) {
            order_1.OrderId.encode(message.orderId, writer.uint32(10).fork()).ldelim();
        }
        if (message.removalReason !== 0) {
            writer.uint32(16).int32(message.removalReason);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderRemoval();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = order_1.OrderId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.removalReason = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOrderRemoval();
        message.orderId = object.orderId !== undefined && object.orderId !== null ? order_1.OrderId.fromPartial(object.orderId) : undefined;
        message.removalReason = (_a = object.removalReason) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJfcmVtb3ZhbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGR5ZHhwcm90b2NvbC92NC1wcm90by9zcmMvY29kZWdlbi9keWR4cHJvdG9jb2wvY2xvYi9vcmRlcl9yZW1vdmFscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFrRDtBQUNsRCx3REFBMEM7QUFFMUMsSUFBWSwwQkFpRVg7QUFqRUQsV0FBWSwwQkFBMEI7SUFDcEM7Ozs7T0FJRztJQUNILHVIQUE4QixDQUFBO0lBRTlCOzs7O09BSUc7SUFDSCx1SUFBc0MsQ0FBQTtJQUV0Qzs7Ozs7T0FLRztJQUNILHVJQUFzQyxDQUFBO0lBRXRDOzs7O09BSUc7SUFDSCxtS0FBb0QsQ0FBQTtJQUVwRDs7OztPQUlHO0lBQ0gscUlBQXFDLENBQUE7SUFFckM7Ozs7O09BS0c7SUFDSCxtTEFBNEQsQ0FBQTtJQUU1RDs7Ozs7T0FLRztJQUNILHFLQUFxRCxDQUFBO0lBRXJEOzs7T0FHRztJQUNILHlIQUErQixDQUFBO0lBRS9COzs7T0FHRztJQUNILGlMQUEyRCxDQUFBO0lBQzNELDRGQUFpQixDQUFBO0FBQ25CLENBQUMsRUFqRVcsMEJBQTBCLEdBQTFCLGtDQUEwQixLQUExQixrQ0FBMEIsUUFpRXJDO0FBQ1ksUUFBQSxpQ0FBaUMsR0FBRywwQkFBMEIsQ0FBQztBQUM1RSxTQUFnQixrQ0FBa0MsQ0FBQyxNQUFXO0lBQzVELFFBQVEsTUFBTSxFQUFFO1FBQ2QsS0FBSyxDQUFDLENBQUM7UUFDUCxLQUFLLDRCQUE0QjtZQUMvQixPQUFPLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDO1FBRS9ELEtBQUssQ0FBQyxDQUFDO1FBQ1AsS0FBSyxvQ0FBb0M7WUFDdkMsT0FBTywwQkFBMEIsQ0FBQyxrQ0FBa0MsQ0FBQztRQUV2RSxLQUFLLENBQUMsQ0FBQztRQUNQLEtB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