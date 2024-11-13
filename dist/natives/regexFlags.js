"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$regexFlags",
    description: "Returns the flags of a regex",
    aliases: ["$regexFlag"],
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
    ],
    output: forgescript_1.ArgType.String,
    execute(ctx, [name]) {
        return this.success(ctx.regexes?.get(name)?.flags);
    }
});
//# sourceMappingURL=regexFlags.js.map