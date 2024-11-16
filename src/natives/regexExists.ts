import { NativeFunction, ArgType } from "@tryforge/forgescript"
import { Context } from "../structures/Context"

export default new NativeFunction({
    name: "$regexExists",
    version: "1.0.0",
    description: "Returns whether a regex exists",
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
    output: ArgType.Boolean,
    execute (ctx: Context, [name]) {
        return this.success(!!ctx.regexes?.get(name))
    }
})