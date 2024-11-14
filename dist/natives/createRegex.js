"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const managers_1 = require("../managers");
exports.default = new forgescript_1.NativeFunction({
    name: "$createRegex",
    version: "1.0.0",
    description: "Creates a new regex",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The name of the new regex",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "pattern",
            description: "The pattern of the regex",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "flags",
            description: "The flags of the regex",
            type: forgescript_1.ArgType.String,
            rest: false
        },
    ],
    execute(ctx, [name, pattern, flags]) {
        ctx.regexes ??= new managers_1.RegexManager();
        ctx.regexes.set(name, pattern, flags || undefined);
        return this.success();
    }
});
//# sourceMappingURL=createRegex.js.map