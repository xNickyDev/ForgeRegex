import { NativeFunction, ArgType } from "@tryforge/forgescript"
import { Context } from "../structures/Context"

export default new NativeFunction({
    name: "$regexLastIndex",
    version: "1.0.0",
    description: "Returns the last index of a regex",
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
    ],
    output: ArgType.Number,
    execute (ctx: Context, [name]) {
        return this.success(ctx.regexes?.get(name)?.lastIndex)
    }
})