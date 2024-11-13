class Manager {
    public regexes: Map<string, RegExp>

    constructor() {
        this.regexes = new Map()
    }

    public get(name: string) {
        return this.regexes.get(name)
    }

    public delete(name: string) {
        this.regexes.delete(name)
    }
}

export class RegexManager extends Manager {
    public current: RegExp | null = null

    constructor() {
        super()
    }

    public create(name: string, regexString: string) {
        const regex = new RegExp(regexString)
        this.regexes.set(name, regex)
        this.current = regex
    }
}