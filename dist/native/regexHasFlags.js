"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegexFlags = void 0;
const forgescript_1 = require("@tryforge/forgescript");
var RegexFlags;
(function (RegexFlags) {
    RegexFlags["d"] = "hasIndices";
    RegexFlags["g"] = "global";
    RegexFlags["i"] = "ignoreCase";
    RegexFlags["m"] = "multiline";
    RegexFlags["s"] = "dotAll";
    RegexFlags["u"] = "unicode";
    RegexFlags["y"] = "sticky";
})(RegexFlags || (exports.RegexFlags = RegexFlags = {}));
exports.default = new forgescript_1.NativeFunction({
    name: "$regexHasFlags",
    version: "1.1.0",
    description: "Returns whether the regex has all given flags",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The name of the regex",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "flags",
            description: "The flags to check for",
            type: forgescript_1.ArgType.Enum,
            enum: RegexFlags,
            required: true,
            rest: true
        },
    ],
    output: forgescript_1.ArgType.Boolean,
    execute(ctx, [name, flags]) {
        const regex = ctx.regexes?.get(name);
        return this.success(flags.every(flag => regex?.[flag]));
    }
});
//# sourceMappingURL=regexHasFlags.js.map