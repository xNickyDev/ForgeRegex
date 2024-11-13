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
        {
            name: "separator",
            description: "The separator to use for each result",
            type: forgescript_1.ArgType.String,
            rest: false
        },
    ],
    output: forgescript_1.ArgType.Unknown,
    execute(ctx, [name, string, sep]) {
        const exec = ctx.regexes?.get(name)?.exec(string);
        if (!exec)
            return this.success();
        if (sep !== null)
            return this.success(exec.join(sep));
        return this.successJSON(exec);
    }
});
//# sourceMappingURL=regexExecute.js.map