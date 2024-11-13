import { Collection } from "discord.js";

export class RegexManager {
    private readonly regexes = new Collection<string, RegExp>()

    public create(name: string, regex: string) {
        console.log(`Created ${name}: ${regex}`)
        this.regexes.set(name, new RegExp(regex))
        console.log(`RegExp: ${new RegExp(regex)}`)
    }

    public get(name: string) {
        console.log(`Got: ${name}`)
        return this.regexes.get(name)
    }

    public delete(name: string) {
        console.log(`Deleted: ${name}`)
        this.regexes.delete(name)
    }

    public clear() {
        console.log("Cleared all regexes")
        this.regexes.clear()
    }
}
