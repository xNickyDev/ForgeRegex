"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$regexSplit",
    description: "Splits a string with regex",
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
            name: "string",
            description: "The string to split",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
    ],
    output: forgescript_1.ArgType.Json,
    execute(ctx, [name, string]) {
        const regex = ctx.regexes?.get(name);
        return this.success(regex ? string.split(regex) : undefined);
    }
});
//# sourceMappingURL=regexSplit.js.map