import { NativeFunction, ArgType } from "@tryforge/forgescript"
import { Context } from "../structures/Context"

export default new NativeFunction({
    name: "$regexMatch",
    version: "1.0.0",
    description: "Returns the regex matches for a string",
    aliases: ["$regexMatches"],
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
            description: "The string to return matches for",
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
    output: ArgType.Json,
    execute (ctx: Context, [name, string, sep]) {
        const regex = ctx.regexes?.get(name)
        if (!regex) return this.success()

        const match = string.match(regex)
        if (sep) return this.success(match?.join(sep ?? ", "))
        return this.successJSON(match)
    }
})