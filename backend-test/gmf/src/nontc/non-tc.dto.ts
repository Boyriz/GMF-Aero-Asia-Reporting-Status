import { IsIn, IsNotEmpty, IsNumber } from "class-validator";

const registration = [
    'PK-GAC',
    'PK-GAD',
    'PK-GAE',
    'PK-GAF',
    'PK-GAF',
    'PK-GAH',
    'PK-GAI',
    'PK-GAJ',
    'PK-GAK',
    'PK-GAL',
    'PK-GAM',
    'PK-GAN',
    'PK-GAO',
    'PK-GDA',
    'PK-GEM',
    'PK-GEN',
    'PK-GEP',
    'PK-GFA',
    'PK-GFC',
    'PK-GFD',
    'PK-GFE',
    'PK-GFF',
    'PK-GFG',
    'PK-GFH',
    'PK-GFI',
    'PK-GFJ',
    'PK-GFK',
    'PK-GFL',
    'PK-GFM',
    'PK-GFN',
    'PK-GFO',
    'PK-GFP',
    'PK-GFQ',
    'PK-GFR',
    'PK-GFS',
    'PK-GFT',
    'PK-GFU',
    'PK-GFV',
    'PK-GFW',
    'PK-GFX',
    'PK-GFY',
    'PK-GFZ',
    'PK-GGC',
    'PK-GHA',
    'PK-GHC',
    'PK-GHD',
    'PK-GHE',
    'PK-GHF',
    'PK-GHG',
    'PK-GIA',
    'PK-GIC',
    'PK-GID',
    'PK-GIE',
    'PK-GIF',
    'PK-GIG',
    'PK-GIH',
    'PK-GII',
    'PK-GIJ',
    'PK-GIK',
    'PK-GJA',
    'PK-GJP',
    'PK-GJQ',
    'PK-GJR',
    'PK-GJS',
    'PK-GJT',
    'PK-GJU',
    'PK-GJV',
    'PK-GLE',
    'PK-GLF',
    'PK-GLG',
    'PK-GLI',
    'PK-GLJ',
    'PK-GLK',
    'PK-GLL',
    'PK-GLM',
    'PK-GLN',
    'PK-GLO',
    'PK-GLP',
    'PK-GLQ',
    'PK-GLR',
    'PK-GLS',
    'PK-GLT',
    'PK-GLU',
    'PK-GLV',
    'PK-GLW',
    'PK-GLX',
    'PK-GLY',
    'PK-GLY',
    'PK-GLZ',
    'PK-GMA',
    'PK-GMC',
    'PK-GMD',
    'PK-GME',
    'PK-GMF',
    'PK-GMG',
    'PK-GMH',
    'PK-GMI',
    'PK-GMJ',
    'PK-GMK',
    'PK-GML',
    'PK-GMM',
    'PK-GMN',
    'PK-GMO',
    'PK-GMP',
    'PK-GMQ',
    'PK-GMR',
    'PK-GMS',
    'PK-GMU',
    'PK-GMV',
    'PK-GMW',
    'PK-GMX',
    'PK-GMY',
    'PK-GMZ',
    'PK-GNA',
    'PK-GNC',
    'PK-GND',
    'PK-GNE',
    'PK-GNF',
    'PK-GNG',
    'PK-GNH',
    'PK-GNI',
    'PK-GNJ',
    'PK-GNK',
    'PK-GNL',
    'PK-GNM',
    'PK-GNN',
    'PK-GNO',
    'PK-GNP',
    'PK-GNQ',
    'PK-GNR',
    'PK-GNS',
    'PK-GNT',
    'PK-GNU',
    'PK-GNV',
    'PK-GPA',
    'PK-GPC',
    'PK-GPD',
    'PK-GPE',
    'PK-GPF',
    'PK-GPG',
    'PK-GPL',
    'PK-GPM',
    'PK-GPN',
    'PK-GPO',
    'PK-GPP',
    'PK-GPQ',
    'PK-GPR',
    'PK-GPS',
    'PK-GPT',
    'PK-GPU',
    'PK-GPV',
    'PK-GPW',
    'PK-GPX',
    'PK-GPY',
    'PK-GPZ',
    'PK-GQA',
    'PK-GQC',
    'PK-GQD',
    'PK-GQE',
    'PK-GQF',
    'PK-GQG',
    'PK-GQH',
    'PK-GQI',
    'PK-GQJ',
    'PK-GQK',
    'PK-GQL',
    'PK-GQM',
    'PK-GQN',
    'PK-GQO',
    'PK-GQP',
    'PK-GQQ',
    'PK-GQR',
    'PK-GQS',
    'PK-GQT',
    'PK-GQU',
    'PK-GRA',
    'PK-GRC',
    'PK-GRE',
    'PK-GRF',
    'PK-GRG',
    'PK-GRH',
    'PK-GRI',
    'PK-GRJ',
    'PK-GRK',
    'PK-GRL',
    'PK-GRM',
    'PK-GRN',
    'PK-GRO',
    'PK-GRP',
    'PK-GRQ',
    'PK-GRR',
    'PK-GRS',
    'PK-GRT',
    'PK-GTA',
    'PK-GTC',
    'PK-GTD',
    'PK-GTE',
    'PK-GTF',
    'PK-GTG',
    'PK-GTH',
    'PK-GTI',
    'PK-GTJ',
    'PK-GTK',
    'PK-GYA',
    'PK-GYC'
]

// export class FileNONTCDTO{
//     @IsNotEmpty()
//     @IsNumber()
//     mandt: number;

//     @IsNotEmpty()
//     @IsNumber()
//     vEqunr: number;

//     @IsNotEmpty()
//     vTsnBld: string;

//     @IsNotEmpty()
//     vTsiCyc: string;

//     @IsNotEmpty()
//     vTsiHrs: string;

//     @IsNotEmpty()
//     vTsnCyc: string;

//     @IsNotEmpty()
//     vTsnHrs: string;

//     @IsNotEmpty()
//     vInstalldt: Date;

//     @IsNotEmpty()
//     @IsIn(registration)
//     tplnr: string;

//     @IsNotEmpty()
//     vPosition: string;

//     @IsNotEmpty()
//     vDesc: string;

//     @IsNotEmpty()
//     vSn: string;

//     @IsNotEmpty()
//     vPn: string;

//     @IsNotEmpty()
//     zstatus: string;

//     @IsNotEmpty()
//     erdat: Date;
// }

export class FileNONTCDTO {
    mandt:      string;
    vEqunr:     string;
    vTsnBld:    string;
    vTsiCyc:    string;
    vTsiHrs:    string;
    vTsnCyc:    string;
    vTsnHrs:    string;
    vInstalldt: string;
    tplnr:      string;
    vPosition:  string;
    vDesc:      string;
    vSn:        string;
    vPn:        string;
    zstatus:    string;
    erdat:      string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toFileNONTCDTO(json: string): FileNONTCDTO {
        return cast(JSON.parse(json), r("FileNONTCDTO"));
    }

    public static fileNONTCDTOToJson(value: FileNONTCDTO): string {
        return JSON.stringify(uncast(value, r("FileNONTCDTO")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "FileNONTCDTO": o([
        { json: "mandt", js: "mandt", typ: "" },
        { json: "vEqunr", js: "vEqunr", typ: "" },
        { json: "vTsnBld", js: "vTsnBld", typ: "" },
        { json: "vTsiCyc", js: "vTsiCyc", typ: "" },
        { json: "vTsiHrs", js: "vTsiHrs", typ: "" },
        { json: "vTsnCyc", js: "vTsnCyc", typ: "" },
        { json: "vTsnHrs", js: "vTsnHrs", typ: "" },
        { json: "vInstalldt", js: "vInstalldt", typ: Date },
        { json: "tplnr", js: "tplnr", typ: "" },
        { json: "vPosition", js: "vPosition", typ: "" },
        { json: "vDesc", js: "vDesc", typ: "" },
        { json: "vSn", js: "vSn", typ: "" },
        { json: "vPn", js: "vPn", typ: "" },
        { json: "zstatus", js: "zstatus", typ: "" },
        { json: "erdat", js: "erdat", typ: Date },
    ], false),
};