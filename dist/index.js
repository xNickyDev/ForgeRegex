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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeRegex = void 0;
const forgescript_1 = require("@tryforge/forgescript");
class ForgeRegex extends forgescript_1.ForgeExtension {
    name = "ForgeRegex";
    description = "A ForgeScript extension that provides support for advanced regex functions.";
    version = require("../package.json").version;
    init() {
        this.load(__dirname + "/natives");
    }
}
exports.ForgeRegex = ForgeRegex;
__exportStar(require("./managers"), exports);
__exportStar(require("./structures"), exports);
//# sourceMappingURL=index.js.map