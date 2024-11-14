"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegexFlags = exports.Context = void 0;
const forgescript_1 = require("@tryforge/forgescript");
class Context extends forgescript_1.Context {
    regexes;
}
exports.Context = Context;
var RegexFlags;
(function (RegexFlags) {
    RegexFlags["global"] = "g";
    RegexFlags["ignoreCase"] = "i";
    RegexFlags["multiline"] = "m";
    RegexFlags["dotAll"] = "s";
    RegexFlags["unicode"] = "u";
    RegexFlags["sticky"] = "y";
})(RegexFlags || (exports.RegexFlags = RegexFlags = {}));
//# sourceMappingURL=Context.js.map