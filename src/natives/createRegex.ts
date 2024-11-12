import { NativeFunction, ArgType } from "@tryforge/forgescript"
import { Context } from "../structures/Context"

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
            name: "regex",
            description: "The regex to create",
            type: ArgType.String,
            required: true,
            rest: false
        },
    ],
    execute (ctx: Context, [name, regex]) {
        ctx.regex?.create(name, regex)
        return this.success()
    }
})