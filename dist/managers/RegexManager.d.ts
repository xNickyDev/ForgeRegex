export declare class RegexManager {
    regexes: Map<string, RegExp>;
    set(name: string, pattern: string | RegExp, flags?: string): void;
    get(name: string): RegExp | undefined;
    delete(name: string): boolean;
}
//# sourceMappingURL=RegexManager.d.ts.map