"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegexManager = void 0;
class RegexManager {
    regexes = new Map();
    set(name, pattern, flags) {
        this.regexes.set(name, new RegExp(pattern, flags));
    }
    get(name) {
        return this.regexes.get(name);
    }
    delete(name) {
        return this.regexes.delete(name);
    }
}
exports.RegexManager = RegexManager;
//# sourceMappingURL=RegexManager.js.map