"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$regexSource",
    version: "1.1.0",
    description: "Returns a copy of the regex pattern text",
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
        return this.success(ctx.regexes?.get(name)?.source);
    }
});
//# sourceMappingURL=regexSource.js.map