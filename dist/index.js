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
const package_json_1 = require("../package.json");
class ForgeRegex extends forgescript_1.ForgeExtension {
    name = "ForgeRegex";
    description = package_json_1.description;
    version = package_json_1.version;
    init() {
        this.load(__dirname + "/native");
    }
}
exports.ForgeRegex = ForgeRegex;
__exportStar(require("./managers"), exports);
__exportStar(require("./structures"), exports);
//# sourceMappingURL=index.js.map