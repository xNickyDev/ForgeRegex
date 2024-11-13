export declare class RegexManager {
    regexes: Map<string, RegExp>;
    create(name: string, regex: string): void;
    get(name: string): RegExp | undefined;
    delete(name: string): boolean;
}
//# sourceMappingURL=RegexManager.d.ts.map