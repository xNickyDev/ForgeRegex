import { ForgeExtension } from "@tryforge/forgescript"

export class ForgeRegex extends ForgeExtension {
    name = "ForgeRegex"
    description = "A ForgeScript extension that provides support for advanced regex functions."
    version = require("../package.json").version

    public init () {
        this.load(__dirname + "./natives")
    }
}