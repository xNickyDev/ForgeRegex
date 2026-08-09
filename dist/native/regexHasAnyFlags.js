"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const regexHasFlags_1 = require("./regexHasFlags");
exports.default = new forgescript_1.NativeFunction({
    name: "$regexHasAnyFlags",
    version: "1.1.0",
    description: "Returns whether the regex has any of the given flags",
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
            name: "flags",
            description: "The flags to check for",
            type: forgescript_1.ArgType.Enum,
            enum: regexHasFlags_1.RegexFlags,
            required: true,
            rest: true
        },
    ],
    output: forgescript_1.ArgType.Boolean,
    execute(ctx, [name, flags]) {
        const regex = ctx.regexes?.get(name);
        return this.success(flags.some(flag => regex?.[flag]));
    }
});
//# sourceMappingURL=regexHasAnyFlags.js.map