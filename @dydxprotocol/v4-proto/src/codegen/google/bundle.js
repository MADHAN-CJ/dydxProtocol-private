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
exports.google = void 0;
const _252 = __importStar(require("./api/annotations"));
const _253 = __importStar(require("./api/http"));
const _254 = __importStar(require("./protobuf/descriptor"));
const _255 = __importStar(require("./protobuf/any"));
const _256 = __importStar(require("./protobuf/timestamp"));
const _257 = __importStar(require("./protobuf/duration"));
var google;
(function (google) {
    google.api = { ..._252,
        ..._253
    };
    google.protobuf = { ..._254,
        ..._255,
        ..._256,
        ..._257
    };
})(google = exports.google || (exports.google = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkeWR4cHJvdG9jb2wvdjQtcHJvdG8vc3JjL2NvZGVnZW4vZ29vZ2xlL2J1bmRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUEwQztBQUMxQyxpREFBbUM7QUFDbkMsNERBQThDO0FBQzlDLHFEQUF1QztBQUN2QywyREFBNkM7QUFDN0MsMERBQTRDO0FBQzVDLElBQWlCLE1BQU0sQ0FTdEI7QUFURCxXQUFpQixNQUFNO0lBQ1IsVUFBRyxHQUFHLEVBQUUsR0FBRyxJQUFJO1FBQzFCLEdBQUcsSUFBSTtLQUNSLENBQUM7SUFDVyxlQUFRLEdBQUcsRUFBRSxHQUFHLElBQUk7UUFDL0IsR0FBRyxJQUFJO1FBQ1AsR0FBRyxJQUFJO1FBQ1AsR0FBRyxJQUFJO0tBQ1IsQ0FBQztBQUNKLENBQUMsRUFUZ0IsTUFBTSxHQUFOLGNBQU0sS0FBTixjQUFNLFFBU3RCIn0=