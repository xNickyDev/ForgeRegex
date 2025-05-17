"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$regexSearch",
    version: "1.0.0",
    description: "Returns the index of the first match in a string",
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
            description: "The string to search for",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
    ],
    output: forgescript_1.ArgType.Number,
    execute(ctx, [name, string]) {
        const regex = ctx.regexes?.get(name);
        return this.success(regex ? string.search(regex) : undefined);
    }
});
//# sourceMappingURL=regexSearch.js.map