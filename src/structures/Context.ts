import { Context as ctx } from "@tryforge/forgescript"
import { RegexManager } from "../managers/RegexManager"

export class Context extends ctx {
    regex?: RegexManager
}