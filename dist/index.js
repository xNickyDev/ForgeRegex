"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeRegex = void 0;
const forgescript_1 = require("@tryforge/forgescript");
class ForgeRegex extends forgescript_1.ForgeExtension {
    name = "ForgeRegex";
    description = "A ForgeScript extension that provides support for advanced regex functions.";
    version = require("../package.json").version;
    init() {
        this.load(__dirname + "./natives");
    }
}
exports.ForgeRegex = ForgeRegex;
