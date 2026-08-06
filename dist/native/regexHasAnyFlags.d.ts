import { NativeFunction, ArgType } from "@tryforge/forgescript";
import { RegexFlags } from "./regexHasFlags";
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
//# sourceMappingURL=regexHasAnyFlags.d.ts.map