"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$deleteRegex",
    version: "1.0.0",
    description: "Deletes an existing regex, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The name of the regex to delete",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
    ],
    output: forgescript_1.ArgType.Boolean,
    execute(ctx, [name]) {
        return this.success(ctx.regexes ? ctx.regexes.delete(name) : false);
    }
});
//# sourceMappingURL=deleteRegex.js.map