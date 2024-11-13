"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$setRegexLastIndex",
    description: "Sets the last index for a regex",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The name of the regex",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "index",
            description: "The index to set",
            type: forgescript_1.ArgType.Number,
            required: true,
            rest: false
        },
    ],
    execute(ctx, [name, index]) {
        const regex = ctx.regexes?.get(name);
        if (regex)
            regex.lastIndex = index;
        return this.success();
    }
});
//# sourceMappingURL=setRegexLastIndex.js.map