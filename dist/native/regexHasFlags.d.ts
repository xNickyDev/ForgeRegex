import { NativeFunction, ArgType } from "@tryforge/forgescript";
export declare enum RegexFlags {
    d = "hasIndices",
    g = "global",
    i = "ignoreCase",
    m = "multiline",
    s = "dotAll",
    u = "unicode",
    y = "sticky"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    type: ArgType.String;
    required: true;
    rest: false;
}, {
    name: string;
    description: string;
    type: ArgType.Enum;
    enum: typeof RegexFlags;
    required: true;
    rest: true;
}], true>;
export default _default;
//# sourceMappingURL=regexHasFlags.d.ts.map