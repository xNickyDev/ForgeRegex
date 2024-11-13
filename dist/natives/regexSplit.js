"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$regexSplit",
    version: "1.0.0",
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
        {
            name: "separator",
            description: "The separator to use for each result",
            type: forgescript_1.ArgType.String,
            rest: false
        },
    ],
    output: forgescript_1.ArgType.Json,
    execute(ctx, [name, string, sep]) {
        const regex = ctx.regexes?.get(name);
        if (!regex)
            return this.success();
        const split = string.split(regex);
        if (sep !== null)
            return this.success(split?.join(sep));
        return this.successJSON(split);
    }
});
//# sourceMappingURL=regexSplit.js.map