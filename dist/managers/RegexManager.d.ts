import { Collection } from "discord.js";
export declare class RegexManager {
    regexes: Collection<string, RegExp>;
    constructor();
    create(name: string, regex: string): void;
    get(name: string): RegExp | undefined;
    delete(name: string): void;
    clear(): void;
}
//# sourceMappingURL=RegexManager.d.ts.map