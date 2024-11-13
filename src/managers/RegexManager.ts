import { Collection } from "discord.js"

export class RegexManager {
    public regexes: Collection<string, RegExp>

    constructor() {
        this.regexes = new Collection<string, RegExp>()
    }

    public create(name: string, regex: string) {
        this.regexes.set(name, new RegExp(regex))
    }

    public get(name: string) {
        return this.regexes.get(name)
    }

    public delete(name: string) {
        this.regexes.delete(name)
    }

    public clear() {
        this.regexes.clear()
    }
}