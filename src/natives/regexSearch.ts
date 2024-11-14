import { NativeFunction, ArgType } from "@tryforge/forgescript"
import { Context } from "../structures/Context"

export default new NativeFunction({
    name: "$regexSearch",
    version: "1.0.0",
    description: "Returns the index of the first match in a string",
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
            description: "The string to search for",
            type: ArgType.String,
            required: true,
            rest: false
        },
    ],
    output: ArgType.Number,
    execute (ctx: Context, [name, string]) {
        const regex = ctx.regexes?.get(name)
        return this.success(regex ? string.search(regex) : undefined)
    }
})