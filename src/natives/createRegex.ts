import { NativeFunction, ArgType } from "@tryforge/forgescript"

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
            rest: true
        },
    ],
    execute (ctx, [name, regex]) {
        console.log(name, regex)
        return this.success()
    }
})