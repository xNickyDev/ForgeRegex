import { Context as ctx } from "@tryforge/forgescript"
import { RegexManager } from "../managers/RegexManager"

export class Context extends ctx {
    regexes?: RegexManager
}

export enum RegexFlags {
    global = "g",
    ignoreCase = "i",
    multiline = "m",
    dotAll = "s",
    unicode = "u",
    sticky = "y"
}