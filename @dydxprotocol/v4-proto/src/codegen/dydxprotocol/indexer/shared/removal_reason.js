"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRemovalReasonToJSON = exports.orderRemovalReasonFromJSON = exports.OrderRemovalReasonSDKType = exports.OrderRemovalReason = void 0;
/** OrderRemovalReason is an enum of all the reasons an order was removed. */
var OrderRemovalReason;
(function (OrderRemovalReason) {
    /** ORDER_REMOVAL_REASON_UNSPECIFIED - Default value, this is invalid and unused. */
    OrderRemovalReason[OrderRemovalReason["ORDER_REMOVAL_REASON_UNSPECIFIED"] = 0] = "ORDER_REMOVAL_REASON_UNSPECIFIED";
    /** ORDER_REMOVAL_REASON_EXPIRED - The order was removed due to being expired. */
    OrderRemovalReason[OrderRemovalReason["ORDER_REMOVAL_REASON_EXPIRED"] = 1] = "ORDER_REMOVAL_REASON_EXPIRED";
    /** ORDER_REMOVAL_REASON_USER_CANCELED - The order was removed due to being canceled by a user. */
    OrderRemovalReason[OrderRemovalReason["ORDER_REMOVAL_REASON_USER_CANCELED"] = 2] = "ORDER_REMOVAL_REASON_USER_CANCELED";
    /** ORDER_REMOVAL_REASON_UNDERCOLLATERALIZED - The order was removed due to being undercollateralized. */
    OrderRemovalReason[OrderRemovalReason["ORDER_REMOVAL_REASON_UNDERCOLLATERALIZED"] = 3] = "ORDER_REMOVAL_REASON_UNDERCOLLATERALIZED";
    /**
     * ORDER_REMOVAL_REASON_INTERNAL_ERROR - The order caused an internal error during order placement and was
     * removed.
     */
    OrderRemovalReason[OrderRemovalReason["ORDER_REMOVAL_REASON_INTERNAL_ERROR"] = 4] = "ORDER_REMOVAL_REASON_INTERNAL_ERROR";
    /**
     * ORDER_REMOVAL_REASON_SELF_TRADE_ERROR - The order would have matched against another order placed by the same
     * subaccount and was removed.
     */
    OrderRemovalReason[OrderRemovalReason["ORDER_REMOVAL_REASON_SELF_TRADE_ERROR"] = 5] = "ORDER_REMOVAL_REASON_SELF_TRADE_ERROR";
    /**
     * ORDER_REMOVAL_REASON_POST_ONLY_WOULD_CROSS_MAKER_ORDER - The order would have matched against maker orders on the orderbook
     * despite being a post-only order and was removed.
     */
    OrderRemovalReason[OrderRemovalReason["ORDER_REMOVAL_REASON_POST_ONLY_WOULD_CROSS_MAKER_ORDER"] = 6] = "ORDER_REMOVAL_REASON_POST_ONLY_WOULD_CROSS_MAKER_ORDER";
    /**
     * ORDER_REMOVAL_REASON_IMMEDIATE_OR_CANCEL_WOULD_REST_ON_BOOK - The order was an ICO order and would have been placed on the orderbook as
     * resting liquidity and was removed.
     */
    OrderRemovalReason[OrderRemovalReason["ORDER_REMOVAL_REASON_IMMEDIATE_OR_CANCEL_WOULD_REST_ON_BOOK"] = 7] = "ORDER_REMOVAL_REASON_IMMEDIATE_OR_CANCEL_WOULD_REST_ON_BOOK";
    /**
     * ORDER_REMOVAL_REASON_FOK_ORDER_COULD_NOT_BE_FULLY_FULLED - The order was a fill-or-kill order that could not be fully filled and was
     * removed.
     */
    OrderRemovalReason[OrderRemovalReason["ORDER_REMOVAL_REASON_FOK_ORDER_COULD_NOT_BE_FULLY_FULLED"] = 8] = "ORDER_REMOVAL_REASON_FOK_ORDER_COULD_NOT_BE_FULLY_FULLED";
    /**
     * ORDER_REMOVAL_REASON_REDUCE_ONLY_RESIZE - The order was a reduce-only order that was removed due to either:
     * - being a taker order and fully-filling the order would flip the side of
     *    the subaccount's position, in this case the remaining size of the
     *    order is removed
     * - being a maker order resting on the book and being removed when either
     *    the subaccount's position is closed or flipped sides
     */
    OrderRemovalReason[OrderRemovalReason["ORDER_REMOVAL_REASON_REDUCE_ONLY_RESIZE"] = 9] = "ORDER_REMOVAL_REASON_REDUCE_ONLY_RESIZE";
    /**
     * ORDER_REMOVAL_REASON_INDEXER_EXPIRED - The order should be expired, according to the Indexer's cached data, but
     * the Indexer has yet to receive a message to remove the order. In order to
     * keep the data cached by the Indexer up-to-date and accurate, clear out
     * the data if it's expired by sending an order removal with this reason.
     * Protocol should never send this reason to Indexer.
     */
    OrderRemovalReason[OrderRemovalReason["ORDER_REMOVAL_REASON_INDEXER_EXPIRED"] = 10] = "ORDER_REMOVAL_REASON_INDEXER_EXPIRED";
    /** ORDER_REMOVAL_REASON_REPLACED - The order has been replaced. */
    OrderRemovalReason[OrderRemovalReason["ORDER_REMOVAL_REASON_REPLACED"] = 11] = "ORDER_REMOVAL_REASON_REPLACED";
    /**
     * ORDER_REMOVAL_REASON_FULLY_FILLED - The order has been fully-filled. Only sent by the Indexer for stateful
     * orders.
     */
    OrderRemovalReason[OrderRemovalReason["ORDER_REMOVAL_REASON_FULLY_FILLED"] = 12] = "ORDER_REMOVAL_REASON_FULLY_FILLED";
    /**
     * ORDER_REMOVAL_REASON_EQUITY_TIER - The order has been removed since the subaccount does not satisfy the
     * equity tier requirements.
     */
    OrderRemovalReason[OrderRemovalReason["ORDER_REMOVAL_REASON_EQUITY_TIER"] = 13] = "ORDER_REMOVAL_REASON_EQUITY_TIER";
    /** ORDER_REMOVAL_REASON_FINAL_SETTLEMENT - The order has been removed since its ClobPair has entered final settlement. */
    OrderRemovalReason[OrderRemovalReason["ORDER_REMOVAL_REASON_FINAL_SETTLEMENT"] = 14] = "ORDER_REMOVAL_REASON_FINAL_SETTLEMENT";
    /**
     * ORDER_REMOVAL_REASON_VIOLATES_ISOLATED_SUBACCOUNT_CONSTRAINTS - The order has been removed since filling it would lead to the subaccount
     * violating isolated subaccount constraints.
     */
    OrderRemovalReason[OrderRemovalReason["ORDER_REMOVAL_REASON_VIOLATES_ISOLATED_SUBACCOUNT_CONSTRAINTS"] = 15] = "ORDER_REMOVAL_REASON_VIOLATES_ISOLATED_SUBACCOUNT_CONSTRAINTS";
    OrderRemovalReason[OrderRemovalReason["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderRemovalReason = exports.OrderRemovalReason || (exports.OrderRemovalReason = {}));
exports.OrderRemovalReasonSDKType = OrderRemovalReason;
function orderRemovalReasonFromJSON(object) {
    switch (object) {
        case 0:
        case "ORDER_REMOVAL_REASON_UNSPECIFIED":
            return OrderRemovalReason.ORDER_REMOVAL_REASON_UNSPECIFIED;
        case 1:
        case "ORDER_REMOVAL_REASON_EXPIRED":
            return OrderRemovalReason.ORDER_REMOVAL_REASON_EXPIRED;
        case 2:
        case "ORDER_REMOVAL_REASON_USER_CANCELED":
            return OrderRemovalReason.ORDER_REMOVAL_REASON_USER_CANCELED;
        case 3:
        case "ORDER_REMOVAL_REASON_UNDERCOLLATERALIZED":
            return OrderRemovalReason.ORDER_REMOVAL_REASON_UNDERCOLLATERALIZED;
        case 4:
        case "ORDER_REMOVAL_REASON_INTERNAL_ERROR":
            return OrderRemovalReason.ORDER_REMOVAL_REASON_INTERNAL_ERROR;
        case 5:
        case "ORDER_REMOVAL_REASON_SELF_TRADE_ERROR":
            return OrderRemovalReason.ORDER_REMOVAL_REASON_SELF_TRADE_ERROR;
        case 6:
        case "ORDER_REMOVAL_REASON_POST_ONLY_WOULD_CROSS_MAKER_ORDER":
            return OrderRemovalReason.ORDER_REMOVAL_REASON_POST_ONLY_WOULD_CROSS_MAKER_ORDER;
        case 7:
        case "ORDER_REMOVAL_REASON_IMMEDIATE_OR_CANCEL_WOULD_REST_ON_BOOK":
            return OrderRemovalReason.ORDER_REMOVAL_REASON_IMMEDIATE_OR_CANCEL_WOULD_REST_ON_BOOK;
        case 8:
        case "ORDER_REMOVAL_REASON_FOK_ORDER_COULD_NOT_BE_FULLY_FULLED":
            return OrderRemovalReason.ORDER_REMOVAL_REASON_FOK_ORDER_COULD_NOT_BE_FULLY_FULLED;
        case 9:
        case "ORDER_REMOVAL_REASON_REDUCE_ONLY_RESIZE":
            return OrderRemovalReason.ORDER_REMOVAL_REASON_REDUCE_ONLY_RESIZE;
        case 10:
        case "ORDER_REMOVAL_REASON_INDEXER_EXPIRED":
            return OrderRemovalReason.ORDER_REMOVAL_REASON_INDEXER_EXPIRED;
        case 11:
        case "ORDER_REMOVAL_REASON_REPLACED":
            return OrderRemovalReason.ORDER_REMOVAL_REASON_REPLACED;
        case 12:
        case "ORDER_REMOVAL_REASON_FULLY_FILLED":
            return OrderRemovalReason.ORDER_REMOVAL_REASON_FULLY_FILLED;
        case 13:
        case "ORDER_REMOVAL_REASON_EQUITY_TIER":
            return OrderRemovalReason.ORDER_REMOVAL_REASON_EQUITY_TIER;
        case 14:
        case "ORDER_REMOVAL_REASON_FINAL_SETTLEMENT":
            return OrderRemovalReason.ORDER_REMOVAL_REASON_FINAL_SETTLEMENT;
        case 15:
        case "ORDER_REMOVAL_REASON_VIOLATES_ISOLATED_SUBACCOUNT_CONSTRAINTS":
            return OrderRemovalReason.ORDER_REMOVAL_REASON_VIOLATES_ISOLATED_SUBACCOUNT_CONSTRAINTS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderRemovalReason.UNRECOGNIZED;
    }
}
exports.orderRemovalReasonFromJSON = orderRemovalReasonFromJSON;
function orderRemovalReasonToJSON(object) {
    switch (object) {
        case OrderRemovalReason.ORDER_REMOVAL_REASON_UNSPECIFIED:
            return "ORDER_REMOVAL_REASON_UNSPECIFIED";
        case OrderRemovalReason.ORDER_REMOVAL_REASON_EXPIRED:
            return "ORDER_REMOVAL_REASON_EXPIRED";
        case OrderRemovalReason.ORDER_REMOVAL_REASON_USER_CANCELED:
            return "ORDER_REMOVAL_REASON_USER_CANCELED";
        case OrderRemovalReason.ORDER_REMOVAL_REASON_UNDERCOLLATERALIZED:
            return "ORDER_REMOVAL_REASON_UNDERCOLLATERALIZED";
        case OrderRemovalReason.ORDER_REMOVAL_REASON_INTERNAL_ERROR:
            return "ORDER_REMOVAL_REASON_INTERNAL_ERROR";
        case OrderRemovalReason.ORDER_REMOVAL_REASON_SELF_TRADE_ERROR:
            return "ORDER_REMOVAL_REASON_SELF_TRADE_ERROR";
        case OrderRemovalReason.ORDER_REMOVAL_REASON_POST_ONLY_WOULD_CROSS_MAKER_ORDER:
            return "ORDER_REMOVAL_REASON_POST_ONLY_WOULD_CROSS_MAKER_ORDER";
        case OrderRemovalReason.ORDER_REMOVAL_REASON_IMMEDIATE_OR_CANCEL_WOULD_REST_ON_BOOK:
            return "ORDER_REMOVAL_REASON_IMMEDIATE_OR_CANCEL_WOULD_REST_ON_BOOK";
        case OrderRemovalReason.ORDER_REMOVAL_REASON_FOK_ORDER_COULD_NOT_BE_FULLY_FULLED:
            return "ORDER_REMOVAL_REASON_FOK_ORDER_COULD_NOT_BE_FULLY_FULLED";
        case OrderRemovalReason.ORDER_REMOVAL_REASON_REDUCE_ONLY_RESIZE:
            return "ORDER_REMOVAL_REASON_REDUCE_ONLY_RESIZE";
        case OrderRemovalReason.ORDER_REMOVAL_REASON_INDEXER_EXPIRED:
            return "ORDER_REMOVAL_REASON_INDEXER_EXPIRED";
        case OrderRemovalReason.ORDER_REMOVAL_REASON_REPLACED:
            return "ORDER_REMOVAL_REASON_REPLACED";
        case OrderRemovalReason.ORDER_REMOVAL_REASON_FULLY_FILLED:
            return "ORDER_REMOVAL_REASON_FULLY_FILLED";
        case OrderRemovalReason.ORDER_REMOVAL_REASON_EQUITY_TIER:
            return "ORDER_REMOVAL_REASON_EQUITY_TIER";
        case OrderRemovalReason.ORDER_REMOVAL_REASON_FINAL_SETTLEMENT:
            return "ORDER_REMOVAL_REASON_FINAL_SETTLEMENT";
        case OrderRemovalReason.ORDER_REMOVAL_REASON_VIOLATES_ISOLATED_SUBACCOUNT_CONSTRAINTS:
            return "ORDER_REMOVAL_REASON_VIOLATES_ISOLATED_SUBACCOUNT_CONSTRAINTS";
        case OrderRemovalReason.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.orderRemovalReasonToJSON = orderRemovalReasonToJSON;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZhbF9yZWFzb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGR5ZHhwcm90b2NvbC92NC1wcm90by9zcmMvY29kZWdlbi9keWR4cHJvdG9jb2wvaW5kZXhlci9zaGFyZWQvcmVtb3ZhbF9yZWFzb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkVBQTZFO0FBQzdFLElBQVksa0JBc0ZYO0FBdEZELFdBQVksa0JBQWtCO0lBQzVCLG9GQUFvRjtJQUNwRixtSEFBb0MsQ0FBQTtJQUVwQyxpRkFBaUY7SUFDakYsMkdBQWdDLENBQUE7SUFFaEMsa0dBQWtHO0lBQ2xHLHVIQUFzQyxDQUFBO0lBRXRDLHlHQUF5RztJQUN6RyxtSUFBNEMsQ0FBQTtJQUU1Qzs7O09BR0c7SUFDSCx5SEFBdUMsQ0FBQTtJQUV2Qzs7O09BR0c7SUFDSCw2SEFBeUMsQ0FBQTtJQUV6Qzs7O09BR0c7SUFDSCwrSkFBMEQsQ0FBQTtJQUUxRDs7O09BR0c7SUFDSCx5S0FBK0QsQ0FBQTtJQUUvRDs7O09BR0c7SUFDSCxtS0FBNEQsQ0FBQTtJQUU1RDs7Ozs7OztPQU9HO0lBQ0gsaUlBQTJDLENBQUE7SUFFM0M7Ozs7OztPQU1HO0lBQ0gsNEhBQXlDLENBQUE7SUFFekMsbUVBQW1FO0lBQ25FLDhHQUFrQyxDQUFBO0lBRWxDOzs7T0FHRztJQUNILHNIQUFzQyxDQUFBO0lBRXRDOzs7T0FHRztJQUNILG9IQUFxQyxDQUFBO0lBRXJDLDBIQUEwSDtJQUMxSCw4SEFBMEMsQ0FBQTtJQUUxQzs7O09BR0c7SUFDSCw4S0FBa0UsQ0FBQTtJQUNsRSw0RUFBaUIsQ0FBQTtBQUNuQixDQUFDLEVBdEZXLGtCQUFrQixHQUFsQiwwQkFBa0IsS0FBbEIsMEJBQWtCLFFBc0Y3QjtBQUNZLFFBQUEseUJBQXlCLEdBQUcsa0JBQWtCLENBQUM7QUFDNUQsU0FBZ0IsMEJBQTBCLENBQUMsTUFBVztJQUNw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