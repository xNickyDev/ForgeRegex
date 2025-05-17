import { NativeFunction, ArgType } from "@tryforge/forgescript"
import { Context } from "../structures/Context"

export default new NativeFunction({
    name: "$deleteRegex",
    version: "1.0.0",
    description: "Deletes an existing regex, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The name of the regex to delete",
            type: ArgType.String,
            required: true,
            rest: false
        },
    ],
    output: ArgType.Boolean,
    execute (ctx: Context, [name]) {
        return this.success(!!ctx.regexes?.delete(name))
    }
})