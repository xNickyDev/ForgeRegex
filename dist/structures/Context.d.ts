import { Context as ctx } from "@tryforge/forgescript";
import { RegexManager } from "../managers/RegexManager";
export declare class Context extends ctx {
    regexes?: RegexManager;
}
export declare enum RegexFlags {
    global = "g",
    ignoreCase = "i",
    multiline = "m",
    dotAll = "s",
    unicode = "u",
    sticky = "y"
}
//# sourceMappingURL=Context.d.ts.map