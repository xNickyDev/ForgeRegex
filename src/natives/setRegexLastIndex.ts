import { NativeFunction, ArgType } from "@tryforge/forgescript"
import { Context } from "../structures/Context"

export default new NativeFunction({
    name: "$setRegexLastIndex",
    version: "1.0.0",
    description: "Sets the last index for a regex",
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
            name: "index",
            description: "The index to set",
            type: ArgType.Number,
            required: true,
            rest: false
        },
    ],
    execute (ctx: Context, [name, index]) {
        const regex = ctx.regexes?.get(name)
        if (regex) regex.lastIndex = index
        return this.success()
    }
})