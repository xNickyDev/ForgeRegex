"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegexManager = void 0;
const discord_js_1 = require("discord.js");
class RegexManager {
    regexes;
    constructor() {
        this.regexes = new discord_js_1.Collection();
    }
    create(name, regex) {
        this.regexes.set(name, new RegExp(regex));
    }
    get(name) {
        return this.regexes.get(name);
    }
    delete(name) {
        this.regexes.delete(name);
    }
    clear() {
        this.regexes.clear();
    }
}
exports.RegexManager = RegexManager;
//# sourceMappingURL=RegexManager.js.map