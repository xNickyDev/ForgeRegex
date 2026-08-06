import { NativeFunction, ArgType } from "@tryforge/forgescript"
import type { Context } from "../structures/Context"

export default new NativeFunction({
    name: "$regexReplace",
    version: "1.0.2",
    description: "Replace text in a string using regex",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The name of the regex to match in base",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "text",
            description: "The base text",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "new value",
            description: "The text to replace matches with",
            type: ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "amount",
            description: "How many times to perform this replacement",
            rest: false,
            type: ArgType.Number,
        },
    ],
    output: ArgType.String,
    execute(ctx: Context, [name, text, replacement, amount]) {
        amount ??= -1
        const regex = ctx.regexes?.get(name)
        if (!regex) return this.success()

        if (amount === -1) {
            return this.success(text.replace(regex, replacement))
        }

        let i = 0
        return this.success(text.replace(regex, (m) => (++i <= amount ? replacement : m)))
    }
})