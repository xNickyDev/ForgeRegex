"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$regexExecute",
    version: "1.0.0",
    description: "Executes a regex search on a string, returns the result",
    aliases: ["$regexExec"],
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
            description: "The string to execute",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
    ],
    output: forgescript_1.ArgType.Json,
    execute(ctx, [name, string]) {
        return this.success(ctx.regexes?.get(name)?.exec(string));
    }
});
//# sourceMappingURL=regexExecute.js.map