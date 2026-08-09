"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$regexEscape",
    version: "1.1.0",
    description: "Escapes any regex syntax characters in the input string",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "string",
            description: "The string to escape",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
    ],
    output: forgescript_1.ArgType.String,
    execute(ctx, [string]) {
        return this.success(RegExp.escape(string));
    }
});
//# sourceMappingURL=regexEscape.js.map