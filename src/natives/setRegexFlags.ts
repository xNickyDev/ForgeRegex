import { NativeFunction, ArgType } from "@tryforge/forgescript"
import { Context, RegexFlags } from "../structures/Context"

export default new NativeFunction({
    name: "$setRegexFlags",
    version: "1.0.0",
    description: "Sets the flags for a regex",
    aliases: ["$setRegexFlag"],
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
            name: "flags",
            description: "The flags to set",
            type: ArgType.Enum,
            enum: RegexFlags,
            required: true,
            rest: true
        },
    ],
    execute (ctx: Context, [name, flags]) {
        const regex = ctx.regexes?.get(name)
        if (regex) ctx.regexes!.set(name, regex, flags)
        return this.success()
    }
})