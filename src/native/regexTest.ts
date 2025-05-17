import { NativeFunction, ArgType } from "@tryforge/forgescript"
import { Context } from "../structures/Context"

export default new NativeFunction({
    name: "$regexTest",
    version: "1.0.0",
    description: "Returns whether the regex matches the string",
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
            description: "The string to check for",
            type: ArgType.String,
            required: true,
            rest: false
        },
    ],
    output: ArgType.Boolean,
    execute (ctx: Context, [name, string]) {
        return this.success(ctx.regexes?.get(name)?.test(string))
    }
})