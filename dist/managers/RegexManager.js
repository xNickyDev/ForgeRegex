"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegexManager = void 0;
const discord_js_1 = require("discord.js");
class RegexManager {
    regexes = new discord_js_1.Collection();
    create(name, regex) {
        console.log(`Created ${name}: ${regex}`);
        this.regexes.set(name, new RegExp(regex));
        console.log(`RegExp: ${new RegExp(regex)}`);
    }
    get(name) {
        console.log(`Got: ${name}`);
        return this.regexes.get(name);
    }
    delete(name) {
        console.log(`Deleted: ${name}`);
        this.regexes.delete(name);
    }
    clear() {
        console.log("Cleared all regexes");
        this.regexes.clear();
    }
}
exports.RegexManager = RegexManager;
//# sourceMappingURL=RegexManager.js.map