import { NativeFunction, ArgType } from "@tryforge/forgescript"
import type { Context } from "../structures/Context"

export default new NativeFunction({
    name: "$regexEscape",
    version: "1.1.0",
    description: "Escapes any regex syntax characters in the input string",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "string",
            description: "The string to escape",
            type: ArgType.String,
            required: true,
            rest: false
        },
    ],
    output: ArgType.String,
    execute(ctx: Context, [string]) {
        return this.success(RegExp.escape(string))
    }
})