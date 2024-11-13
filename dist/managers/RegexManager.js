"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegexManager = void 0;
class Manager {
    regexes;
    constructor() {
        this.regexes = new Map();
    }
    get(name) {
        return this.regexes.get(name);
    }
    delete(name) {
        this.regexes.delete(name);
    }
}
class RegexManager extends Manager {
    current = null;
    constructor() {
        super();
    }
    create(name, regexString) {
        const regex = new RegExp(regexString);
        this.regexes.set(name, regex);
        this.current = regex;
    }
}
exports.RegexManager = RegexManager;
//# sourceMappingURL=RegexManager.js.map