import { ForgeClient } from "@tryforge/forgescript";
export declare class RegexManager {
    private readonly client;
    private readonly regexes;
    constructor(client: ForgeClient);
    create(name: string, regex: string): void;
    get(name: string): RegExp | undefined;
    delete(name: string): void;
    clear(): void;
}
//# sourceMappingURL=RegexManager.d.ts.map