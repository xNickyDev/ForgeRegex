import { NativeFunction, ArgType } from "@tryforge/forgescript"
import type { Context } from "../structures/Context"

export enum RegexFlags {
    d = "hasIndices",
    g = "global",
    i = "ignoreCase",
    m = "multiline",
    s = "dotAll",
    u = "unicode",
    y = "sticky"
}

export default new NativeFunction({
    name: "$regexHasFlags",
    version: "1.1.0",
    description: "Returns whether the regex has all given flags",
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
            description: "The flags to check for",
            type: ArgType.Enum,
            enum: RegexFlags,
            required: true,
            rest: true
        },
    ],
    output: ArgType.Boolean,
    execute(ctx: Context, [name, flags]) {
        const regex = ctx.regexes?.get(name)
        return this.success(flags.every(flag => regex?.[flag]))
    }
})