import { NativeFunction, ArgType } from "@tryforge/forgescript"
import { Context } from "../structures/Context"
import { RegexManager } from "../managers"

export default new NativeFunction({
    name: "$createRegex",
    version: "1.0.0",
    description: "Creates a new regex",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The name of the new regex",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "pattern",
            description: "The pattern of the regex",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "flags",
            description: "The flags of the regex",
            type: ArgType.String,
            rest: false
        },
    ],
    execute (ctx: Context, [name, pattern, flags]) {
        ctx.regexes ??= new RegexManager()
        ctx.regexes.set(name, pattern, flags || undefined)
        return this.success()
    }
})