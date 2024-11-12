"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegexManager = void 0;
const discord_js_1 = require("discord.js");
class RegexManager {
    client;
    regexes = new discord_js_1.Collection();
    constructor(client) {
        this.client = client;
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