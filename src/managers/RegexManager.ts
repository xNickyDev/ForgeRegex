export class RegexManager {
    public regexes = new Map<string, RegExp>()

    public create(name: string, regex: string) {
        this.regexes.set(name, new RegExp(regex))
    }

    public get(name: string) {
        return this.regexes.get(name)
    }

    public delete(name: string) {
        return this.regexes.delete(name)
    }
}