declare class Manager {
    regexes: Map<string, RegExp>;
    constructor();
    get(name: string): RegExp | undefined;
    delete(name: string): void;
}
export declare class RegexManager extends Manager {
    current: RegExp | null;
    constructor();
    create(name: string, regexString: string): void;
}
export {};
//# sourceMappingURL=RegexManager.d.ts.map