console.log("Manager File Executed", true)

class Manager {
    public regexes: Map<string, RegExp>

    constructor() {
        this.regexes = new Map()
        console.log("New Map:", this.regexes)
    }

    public get(name: string) {
        console.log("Get Regex:", this.regexes.get(name))
        return this.regexes.get(name)
    }

    public delete(name: string) {
        console.log("Delete Regex", this.regexes.delete(name))
        this.regexes.delete(name)
    }
}

export class RegexManager extends Manager {
    public current: RegExp | null = null

    constructor() {
        super()
        console.log("Constructor Regexes", this.current)
    }

    public create(name: string, regexString: string) {
        const regex = new RegExp(regexString)
        console.log("Create Regex:", regex)
        this.regexes.set(name, regex)
        this.current = regex
    }
}