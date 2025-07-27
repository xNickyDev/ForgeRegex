"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$regexReplace",
    description: "Replace text in a string using regex",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The name of the regex to match in base",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "text",
            description: "The base text",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "new value",
            description: "The text to replace matches with",
            type: forgescript_1.ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "amount",
            description: "How many times to perform this replacement",
            rest: false,
            type: forgescript_1.ArgType.Number,
        },
    ],
    output: forgescript_1.ArgType.String,
    execute(ctx, [name, text, replacement, amount]) {
        amount ??= -1;
        const regex = ctx.regexes?.get(name);
        if (!regex)
            return this.success();
        if (amount === -1) {
            return this.success(text.replace(regex, replacement));
        }
        let i = 0;
        return this.success(text.replace(regex, (m) => (++i <= amount ? replacement : m)));
    }
});
//# sourceMappingURL=regexReplace.js.map