"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$getRegex",
    version: "1.0.0",
    description: "Gets an existing regex",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The name of the regex to get",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
    ],
    output: forgescript_1.ArgType.String,
    execute(ctx, [name]) {
        return this.success(ctx.regexes?.get(name));
    }
});
//# sourceMappingURL=getRegex.js.map