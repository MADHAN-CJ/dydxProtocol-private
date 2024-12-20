"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
class LCDQueryClient {
    constructor({ requestClient }) {
        this.req = requestClient;
        this.listLimitParams = this.listLimitParams.bind(this);
        this.capacityByDenom = this.capacityByDenom.bind(this);
        this.allPendingSendPackets = this.allPendingSendPackets.bind(this);
    }
    /* List all limit params. */
    async listLimitParams(_params = {}) {
        const endpoint = `dydxprotocol/v4/ratelimit/list_limit_params`;
        return await this.req.get(endpoint);
    }
    /* Query capacity by denom. */
    async capacityByDenom(params) {
        const options = {
            params: {}
        };
        if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
            options.params.denom = params.denom;
        }
        const endpoint = `dydxprotocol/v4/ratelimit/capacity_by_denom`;
        return await this.req.get(endpoint, options);
    }
    /* Get all pending send packets */
    async allPendingSendPackets(_params = {}) {
        const endpoint = `dydxprotocol/v4/ratelimit/get_all_pending_send_packet`;
        return await this.req.get(endpoint);
    }
}
exports.LCDQueryClient = LCDQueryClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkubGNkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkeWR4cHJvdG9jb2wvdjQtcHJvdG8vc3JjL2NvZGVnZW4vZHlkeHByb3RvY29sL3JhdGVsaW1pdC9xdWVyeS5sY2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSxjQUFjO0lBR3pCLFlBQVksRUFDVixhQUFhLEVBR2Q7UUFDQyxJQUFJLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNELDRCQUE0QjtJQUc1QixLQUFLLENBQUMsZUFBZSxDQUFDLFVBQWtDLEVBQUU7UUFDeEQsTUFBTSxRQUFRLEdBQUcsNkNBQTZDLENBQUM7UUFDL0QsT0FBTyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFpQyxRQUFRLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBQ0QsOEJBQThCO0lBRzlCLEtBQUssQ0FBQyxlQUFlLENBQUMsTUFBbUM7UUFDdkQsTUFBTSxPQUFPLEdBQVE7WUFDbkIsTUFBTSxFQUFFLEVBQUU7U0FDWCxDQUFDO1FBRUYsSUFBSSxPQUFPLENBQUEsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLEtBQUssQ0FBQSxLQUFLLFdBQVcsRUFBRTtZQUN4QyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ3JDO1FBRUQsTUFBTSxRQUFRLEdBQUcsNkNBQTZDLENBQUM7UUFDL0QsT0FBTyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFzQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUNELGtDQUFrQztJQUdsQyxLQUFLLENBQUMscUJBQXFCLENBQUMsVUFBNkMsRUFBRTtRQUN6RSxNQUFNLFFBQVEsR0FBRyx1REFBdUQsQ0FBQztRQUN6RSxPQUFPLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQTRDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Q0FFRjtBQTNDRCx3Q0EyQ0MifQ==