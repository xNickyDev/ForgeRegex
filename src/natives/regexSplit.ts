import { NativeFunction, ArgType } from "@tryforge/forgescript"
import { Context } from "../structures/Context"

export default new NativeFunction({
    name: "$regexSplit",
    version: "1.0.0",
    description: "Splits a string with regex",
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
            description: "The string to split",
            type: ArgType.String,
            required: true,
            rest: false
        },
    ],
    output: ArgType.Json,
    execute (ctx: Context, [name, string]) {
        const regex = ctx.regexes?.get(name)
        return this.success(regex ? string.split(regex) : undefined)
    }
})