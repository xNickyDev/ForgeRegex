import { RegexFlags } from "../structures"

export class RegexManager {
    public regexes = new Map<string, RegExp>()

    public set(name: string, regex: string | RegExp, flags?: RegexFlags[]) {
        this.regexes.set(name, new RegExp(regex, flags?.join("")))
    }

    public get(name: string) {
        return this.regexes.get(name)
    }

    public delete(name: string) {
        return this.regexes.delete(name)
    }
}