"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
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
            name: "regex",
            description: "The regex to create",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: true
        },
    ],
    execute(ctx, [name, regex]) {
        console.log(name, regex);
        return this.success();
    }
});
//# sourceMappingURL=createRegex.js.map