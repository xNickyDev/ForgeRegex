export class RegexManager {
    public regexes = new Map<string, RegExp>()

    public set(name: string, pattern: string | RegExp, flags?: string) {
        this.regexes.set(name, new RegExp(pattern, flags))
    }

    public get(name: string) {
        return this.regexes.get(name)
    }

    public delete(name: string) {
        return this.regexes.delete(name)
    }
}