import { NativeFunction, ArgType } from "@tryforge/forgescript"
import { Context } from "../structures/Context"

export default new NativeFunction({
    name: "$regexFlags",
    version: "1.0.0",
    description: "Returns the flags of a regex",
    aliases: ["$regexFlag"],
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
    output: ArgType.String,
    execute (ctx: Context, [name]) {
        return this.success(ctx.regexes?.get(name)?.flags)
    }
})