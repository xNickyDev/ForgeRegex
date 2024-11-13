"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$regexLastIndex",
    description: "Returns the last index of a regex",
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
    ],
    output: forgescript_1.ArgType.Number,
    execute(ctx, [name]) {
        return this.success(ctx.regexes?.get(name)?.lastIndex);
    }
});
//# sourceMappingURL=regexLastIndex.js.map