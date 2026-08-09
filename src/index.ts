import { ForgeExtension } from "@tryforge/forgescript"
import { description, version } from "../package.json"

export class ForgeRegex extends ForgeExtension {
    name = "ForgeRegex"
    description = description
    version = version

    public init() {
        this.load(__dirname + "/native")
    }
}

export * from "./managers"
export * from "./structures"