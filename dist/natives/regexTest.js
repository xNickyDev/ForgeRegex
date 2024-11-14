"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$regexTest",
    version: "1.0.0",
    description: "Returns whether the regex matches the string",
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
            description: "The string to check for",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
    ],
    output: forgescript_1.ArgType.Boolean,
    execute(ctx, [name, string]) {
        return this.success(ctx.regexes?.get(name)?.test(string));
    }
});
//# sourceMappingURL=regexTest.js.map