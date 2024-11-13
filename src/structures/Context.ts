import { Context as ctx, IRunnable } from "@tryforge/forgescript"
import { RegexManager } from "../managers/RegexManager"

export class Context extends ctx {
    regexes?: RegexManager

    constructor(runtime: IRunnable) {
        super(runtime)
        this.regexes = new RegexManager()
    }
}