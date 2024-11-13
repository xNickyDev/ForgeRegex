"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const forgescript_1 = require("@tryforge/forgescript");
const RegexManager_1 = require("../managers/RegexManager");
class Context extends forgescript_1.Context {
    regexes;
    constructor(runtime) {
        super(runtime);
        this.regexes = new RegexManager_1.RegexManager();
        console.log("RegexManager", this.regexes);
    }
}
exports.Context = Context;
//# sourceMappingURL=Context.js.map