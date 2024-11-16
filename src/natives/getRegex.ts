import { NativeFunction, ArgType } from "@tryforge/forgescript"
import { Context } from "../structures/Context"

export default new NativeFunction({
    name: "$getRegex",
    version: "1.0.0",
    description: "Gets an existing regex",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The name of the regex to get",
            type: ArgType.String,
            required: true,
            rest: false
        },
    ],
    output: ArgType.String,
    execute (ctx: Context, [name]) {
        return this.success(ctx.regexes?.get(name))
    }
})