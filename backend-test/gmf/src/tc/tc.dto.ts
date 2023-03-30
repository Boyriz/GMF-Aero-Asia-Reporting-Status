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

// export class FileTCDTO{
//     @IsNotEmpty()
//     @IsNumber()
//     mandt: number;

//     @IsNotEmpty()
//     @IsNumber()
//     warpl: number;

//     @IsNotEmpty()
//     @IsNumber()
//     wapos: number;

//     @IsNotEmpty()
//     qmnum: string;

//     @IsNotEmpty()
//     qmart: string;

//     @IsNotEmpty()
//     mptyp: string;

//     @IsNotEmpty()
//     vDuedt: Date;

//     @IsNotEmpty()
//     vUnit: string;

//     @IsNotEmpty()
//     vLifeRem: string;

//     @IsNotEmpty()
//     vTsnBld: string;

//     @IsNotEmpty()
//     vTsiCyc: string;

//     @IsNotEmpty()
//     vTsiHrs: string;

//     @IsNotEmpty()
//     vTsoBld: string;

//     @IsNotEmpty()
//     vTstCyc: string;

//     @IsNotEmpty()
//     vTstHrs: string;

//     @IsNotEmpty()
//     vTsoCyc: string;

//     @IsNotEmpty()
//     vTsoHrs: string;

//     @IsNotEmpty()
//     vTsnCyc: string;

//     @IsNotEmpty()
//     vTsnHrs: string;

//     @IsNotEmpty()
//     vIntDays: string;

//     @IsNotEmpty()
//     vInstalldt: Date;

//     @IsNotEmpty()
//     @IsIn(registration)
//     tplnr: string;

//     @IsNotEmpty()
//     vPosition: string

//     @IsNotEmpty()
//     vDesc: string;

//     @IsNotEmpty()
//     vSn: string;

//     @IsNotEmpty()
//     vPn: string;

//     @IsNotEmpty()
//     vEqunr: string;

//     @IsNotEmpty()
//     vTask: string;

//     @IsNotEmpty()
//     vDocVer: string;

//     @IsNotEmpty()
//     vDocPart: string

//     @IsNotEmpty()
//     vDocNo: string;

//     @IsNotEmpty()
//     vDocType: string;

//     @IsNotEmpty()
//     vMpd: string;

//     @IsNotEmpty()
//     vAta: string;

//     @IsNotEmpty()
//     zstatus: string;

//     @IsNotEmpty()
//     erdat: Date;
// }

export class TCJsonDTO {
    mandt: string;
    warpl: string;
    wapos: string;
}

export class FileTCDTO {
    mandt:      string;
    warpl:      string;
    wapos:      string;
    qmnum:      string;
    qmart:      Qmart;
    mptyp:      string;
    vDuedt:     string;
    vUnit:      VUnit;
    vLifeRem:   string;
    vTsnBld:    string;
    vTsiCyc:    string;
    vTsiHrs:    string;
    vTsoBld?:   string;
    vTstCyc?:   string;
    vTstHrs?:   string;
    vTsoCyc?:   string;
    vTsoHrs?:   string;
    vTsnCyc:    string;
    vTsnHrs:    string;
    vIntDays?:  string;
    vInstalldt: string;
    tplnr:      Tplnr;
    vPosition:  string;
    vDesc:      string;
    vSn:        string;
    vPn:        string;
    vEqunr:     string;
    vTask?:     VTask;
    vDocVer:    string;
    vDocPart:   string;
    vDocNo:     string;
    vDocType:   VDocType;
    vMpd?:      string;
    vAta?:      string;
    zstatus:    Zstatus;
    erdat:      string;
    vTsoLdg?:   string;
    vIntHrs?:   VIntHrs;
    aufnr?:     string;
    revInd?:    string;
    vIntCyc?:   string;
}

export enum Qmart {
    E8 = "E8",
}

export enum Tplnr {
    PkGma = "PK-GMA",
    PkGmf = "PK-GMF",
}

export enum VDocType {
    Ami = "AMI",
}

export enum VIntHrs {
    The1000 = "                         1000",
    The12000 = "                        12000",
    The16000 = "                        16000",
    The25000 = "                        25000",
}

export enum VTask {
    Dis = "DIS",
    Fnc = "FNC",
    Rst = "RST",
}

export enum VUnit {
    Day = "DAY",
    Hrs = "HRS",
}

export enum Zstatus {
    NotOverdue = "NOT OVERDUE",
    Overdue = "OVERDUE",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toFileTCDTO(json: string): FileTCDTO[] {
        return cast(JSON.parse(json), a(r("FileTCDTO")));
    }

    public static fileTCDTOToJson(value: FileTCDTO[]): string {
        return JSON.stringify(uncast(value, a(r("FileTCDTO"))), null, 2);
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
    "FileTCDTO": o([
        { json: "mandt", js: "mandt", typ: "" },
        { json: "warpl", js: "warpl", typ: "" },
        { json: "wapos", js: "wapos", typ: "" },
        { json: "qmnum", js: "qmnum", typ: "" },
        { json: "qmart", js: "qmart", typ: r("Qmart") },
        { json: "mptyp", js: "mptyp", typ: "" },
        { json: "vDuedt", js: "vDuedt", typ: Date },
        { json: "vUnit", js: "vUnit", typ: r("VUnit") },
        { json: "vLifeRem", js: "vLifeRem", typ: "" },
        { json: "vTsnBld", js: "vTsnBld", typ: "" },
        { json: "vTsiCyc", js: "vTsiCyc", typ: "" },
        { json: "vTsiHrs", js: "vTsiHrs", typ: "" },
        { json: "vTsoBld", js: "vTsoBld", typ: u(undefined, "") },
        { json: "vTstCyc", js: "vTstCyc", typ: u(undefined, "") },
        { json: "vTstHrs", js: "vTstHrs", typ: u(undefined, "") },
        { json: "vTsoCyc", js: "vTsoCyc", typ: u(undefined, "") },
        { json: "vTsoHrs", js: "vTsoHrs", typ: u(undefined, "") },
        { json: "vTsnCyc", js: "vTsnCyc", typ: "" },
        { json: "vTsnHrs", js: "vTsnHrs", typ: "" },
        { json: "vIntDays", js: "vIntDays", typ: u(undefined, "") },
        { json: "vInstalldt", js: "vInstalldt", typ: Date },
        { json: "tplnr", js: "tplnr", typ: r("Tplnr") },
        { json: "vPosition", js: "vPosition", typ: "" },
        { json: "vDesc", js: "vDesc", typ: "" },
        { json: "vSn", js: "vSn", typ: "" },
        { json: "vPn", js: "vPn", typ: "" },
        { json: "vEqunr", js: "vEqunr", typ: "" },
        { json: "vTask", js: "vTask", typ: u(undefined, r("VTask")) },
        { json: "vDocVer", js: "vDocVer", typ: "" },
        { json: "vDocPart", js: "vDocPart", typ: "" },
        { json: "vDocNo", js: "vDocNo", typ: "" },
        { json: "vDocType", js: "vDocType", typ: r("VDocType") },
        { json: "vMpd", js: "vMpd", typ: u(undefined, "") },
        { json: "vAta", js: "vAta", typ: u(undefined, "") },
        { json: "zstatus", js: "zstatus", typ: r("Zstatus") },
        { json: "erdat", js: "erdat", typ: Date },
        { json: "vTsoLdg", js: "vTsoLdg", typ: u(undefined, "") },
        { json: "vIntHrs", js: "vIntHrs", typ: u(undefined, r("VIntHrs")) },
        { json: "aufnr", js: "aufnr", typ: u(undefined, "") },
        { json: "revInd", js: "revInd", typ: u(undefined, "") },
        { json: "vIntCyc", js: "vIntCyc", typ: u(undefined, "") },
    ], false),
    "Qmart": [
        "E8",
    ],
    "Tplnr": [
        "PK-GMA",
        "PK-GMF",
    ],
    "VDocType": [
        "AMI",
    ],
    "VIntHrs": [
        "                         1000",
        "                        12000",
        "                        16000",
        "                        25000",
    ],
    "VTask": [
        "DIS",
        "FNC",
        "RST",
    ],
    "VUnit": [
        "DAY",
        "HRS",
    ],
    "Zstatus": [
        "NOT OVERDUE",
        "OVERDUE",
    ],
};