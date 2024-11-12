"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$regexTest",
    version: "1.0.0",
    description: "Checks if the regex matches the string",
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
        const regex = ctx.regexes?.get(name);
        return this.success(regex ? Boolean(regex.test(string)) : undefined);
    }
});
//# sourceMappingURL=regexTest.js.map