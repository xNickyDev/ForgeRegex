"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const Context_1 = require("../structures/Context");
exports.default = new forgescript_1.NativeFunction({
    name: "$setRegexFlags",
    version: "1.0.0",
    description: "Sets the flags for a regex",
    aliases: ["$setRegexFlag"],
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
            description: "The flags to set",
            type: forgescript_1.ArgType.Enum,
            enum: Context_1.RegexFlags,
            required: true,
            rest: true
        },
    ],
    execute(ctx, [name, flags]) {
        const regex = ctx.regexes?.get(name);
        if (regex)
            ctx.regexes.set(name, regex, flags);
        return this.success();
    }
});
//# sourceMappingURL=setRegexFlags.js.map