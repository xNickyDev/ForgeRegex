import { RegexFlags } from "../structures";
export declare class RegexManager {
    regexes: Map<string, RegExp>;
    set(name: string, regex: string | RegExp, flags?: RegexFlags[]): void;
    get(name: string): RegExp | undefined;
    delete(name: string): boolean;
}
//# sourceMappingURL=RegexManager.d.ts.map