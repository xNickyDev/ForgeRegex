import { NativeFunction, ArgType } from "@tryforge/forgescript"
import { Context } from "../structures/Context"

export default new NativeFunction({
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
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "string",
            description: "The string to execute",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "separator",
            description: "The separator to use for each result",
            type: ArgType.String,
            rest: false
        },
    ],
    output: ArgType.Unknown,
    execute (ctx: Context, [name, string, sep]) {
        const exec = ctx.regexes?.get(name)?.exec(string)
        if (!exec) return this.success()

        if (sep !== null) return this.success(exec.join(sep))
        return this.successJSON(exec)
    }
})