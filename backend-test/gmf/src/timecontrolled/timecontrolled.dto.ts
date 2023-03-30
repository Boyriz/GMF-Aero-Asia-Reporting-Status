import { IsNotEmpty, IsNumber } from "class-validator";

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

export class FileTimeDto{
    @IsNotEmpty()
    functionalLocation: string;

    @IsNotEmpty()
    partNumber: string;

    @IsNotEmpty()
    serialNumber: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    task: string;

    @IsNotEmpty()
    installDate: Date;

    @IsNotEmpty()
    @IsNumber()
    tsnHRS: number;

    @IsNotEmpty()
    @IsNumber()
    tsnCYC: number;

    @IsNotEmpty()
    @IsNumber()
    intervalHRS: number;

    @IsNotEmpty()
    @IsNumber()
    intervalCYC: number;

    @IsNotEmpty()
    @IsNumber()
    intervalDAYS: number;

    @IsNotEmpty()
    @IsNumber()
    tslaHRS: number;

    @IsNotEmpty()
    @IsNumber()
    tslaCYC: number;

    @IsNotEmpty()
    @IsNumber()
    tslaDAYS: number;

    @IsNotEmpty()
    @IsNumber()
    lifeRemaining: number;
}