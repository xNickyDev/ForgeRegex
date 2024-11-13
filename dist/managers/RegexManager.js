"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegexManager = void 0;
console.log("Manager File Executed", true);
class Manager {
    regexes;
    constructor() {
        this.regexes = new Map();
        console.log("New Map:", this.regexes);
    }
    get(name) {
        console.log("Get Regex:", this.regexes.get(name));
        return this.regexes.get(name);
    }
    delete(name) {
        console.log("Delete Regex", this.regexes.delete(name));
        this.regexes.delete(name);
    }
}
class RegexManager extends Manager {
    current = null;
    constructor() {
        super();
        console.log("Constructor Regexes", this.current);
    }
    create(name, regexString) {
        const regex = new RegExp(regexString);
        console.log("Create Regex:", regex);
        this.regexes.set(name, regex);
        this.current = regex;
    }
}
exports.RegexManager = RegexManager;
//# sourceMappingURL=RegexManager.js.map