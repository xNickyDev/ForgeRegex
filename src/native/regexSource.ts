import { NativeFunction, ArgType } from "@tryforge/forgescript"
import type { Context } from "../structures/Context"

export default new NativeFunction({
    name: "$regexSource",
    version: "1.1.0",
    description: "Returns a copy of the regex pattern text",
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
    execute(ctx: Context, [name]) {
        return this.success(ctx.regexes?.get(name)?.source)
    }
})