import { Injectable } from '@nestjs/common';
import { Prisma, Tc } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import fs from 'fs';
import { Client } from 'pg';
import { FileTCDTO } from './tc.dto';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class TcService {
    createMany(arg0: { data: FileTCDTO; }) {
        return FileTCDTO;
    }
    // create(_arg0: { data: any; }) {
    //     return FileTCDTO;
    // }

    async saveToDatabase(data: Prisma.TcCreateInput) {
        return await this.prisma.tc.create({
            data: data,
        });
    }

    private readonly client: Client;
    constructor(private prisma: PrismaService) {
        this.client = new Client({
            user: 'utilsdevelopmenttc',
            host: '172.16.41.107',
            database: 'db_utils_tc',
            password: 'utilsd3v3l0pm3nttc',
            port: 25433,
        });
        this.client.connect();
    }

    // async migrateJsonToPostgres(filePath: string): Promise<void> {
    //     const jsonData = fs.readFileSync(filePath, 'utf-8');
    //     const data: FileTCDTO[] = JSON.parse(jsonData);

    //     for(const TCDTO of data) {
    //         await this.prisma.tc.create({
    //             data: {
    //                 mandt: TCDTO.mandt,
    //                 warpl: TCDTO.warpl,
    //                 wapos: TCDTO.wapos,
    //                 qmnum: TCDTO.qmnum,
    //                 qmart: TCDTO.qmart,
    //                 mptyp: TCDTO.mptyp,
    //                 vDuedt: TCDTO.vDuedt,
    //                 vUnit: TCDTO.vUnit,
    //                 vLifeRem: TCDTO.vLifeRem,
    //                 vTsnBld: TCDTO.vTsnBld,
    //                 vTsiCyc: TCDTO.vTsiCyc,
    //                 vTsiHrs: TCDTO.vTsiHrs,
    //                 vTsoBld: TCDTO.vTsoBld,
    //                 vTstCyc: TCDTO.vTstCyc,
    //                 vTstHrs: TCDTO.vTstHrs,
    //                 vTsoCyc: TCDTO.vTsoCyc,
    //                 vTsoHrs: TCDTO.vTsoHrs,
    //                 vTsnCyc: TCDTO.vTsnCyc,
    //                 vTsnHrs: TCDTO.vTsnHrs,
    //                 vIntDays: TCDTO.vIntDays,
    //                 vInstalldt: TCDTO.vInstalldt,
    //                 tplnr: TCDTO.tplnr,
    //                 vPosition: TCDTO.vPosition,
    //                 vDesc: TCDTO.vDesc,
    //                 vSn: TCDTO.vSn,
    //                 vPn: TCDTO .vPn,
    //                 vEqunr: TCDTO .vEqunr,
    //                 vTask: TCDTO .vTask,
    //                 vDocVer: TCDTO .vDocVer,
    //                 vDocPart: TCDTO.vDocPart,
    //                 vDocNo: TCDTO.vDocNo,
    //                 vDocType: TCDTO.vDocType,
    //                 vMpd: TCDTO.vMpd,
    //                 vAta: TCDTO.vAta,
    //                 zstatus: TCDTO.zstatus,
    //                 erdat: TCDTO.erdat,
    //             }
    //         })
    //     }
    // }

    async closeConnection(): Promise<void> {
        await this.client.end();
    }


    // async getDataFromJson() {
    //     const data = require('../../../gmf/DATA_TC.json');
    //     const mappedData = plainToClass(FileTCDTO, data);
    //     const errors = await validate(mappedData);
    //     if (errors.length > 0) {
    //         throw new Error(`Validation failed: ${JSON.stringify(errors)}`);            
    //     }
    //     return mappedData;
    // }

    all(timecontrolled: MyObject): MyObject {
        Object.keys(timecontrolled)
            .forEach(key => {
                timecontrolled[key] = String(timecontrolled[key]).trim();
            });
        return timecontrolled;
    }

    get(id: number) {
        return this.prisma.tc.findFirst({
            where: {
                warpl: id,
            },
        });
    }

    async create(data: Prisma.TcCreateInput) {
        return await this.prisma.tc.create({
            data,
        });
    }

    findAll() {
        return this.prisma.tc.findMany({
            include: {
              Connector: true
            },
        });
    }

    findOne(id: number) {
        return this.prisma.tc.findUnique({
            where: {
                warpl: +id,
            },
        });
    }

    async remove(id: number) {
        return await this.prisma.tc.delete({
            where: {
                warpl: id,
            },
        });
    }

    async update(id: number, data: Prisma.TcUpdateInput) {
        return await this.prisma.tc.update({
            where: {
                warpl: +id,
            },
            data,
        });
    }

 
    
    // async assignTCRegis(id: number, tplnr: string) {
    //     return await this.prisma.tc.update({
    //         where: {
    //             warpl: +id,
    //         },
    //         data: {
    //             Registration: {
    //                 connect: {
    //                     id: +tplnr,
    //                 }
    //             }
    //         },
    //     });
    // }

    // async saveData(data: FileTCDTO): Promise<Tc> {
    //     return await this.prisma.tc.create({
    //         data: {
    //             mandt: data.mandt,
    //             warpl: data.warpl,
    //             wapos: data.wapos,
    //             qmnum: data.qmnum,
    //             qmart: data.qmart,
    //             mptyp: data.mptyp,
    //             vDuedt: data.vDuedt,
    //             vUnit: data.vUnit,
    //             vLifeRem: data.vLifeRem,
    //             vTsnBld: data.vTsnBld,
    //             vTsiCyc: data.vTsiCyc,
    //             vTsiHrs: data.vTsiHrs,
    //             vTsoBld: data.vTsoBld,
    //             vTstCyc: data.vTstCyc,
    //             vTstHrs: data.vTstHrs,
    //             vTsoCyc: data.vTsoCyc,
    //             vTsoHrs: data.vTsoHrs,
    //             vTsnCyc: data.vTsnCyc,
    //             vTsnHrs: data.vTsnHrs,
    //             vIntDays: data.vIntDays,
    //             vInstalldt: data.vInstalldt,
    //             tplnr: data.tplnr,
    //             vPosition: data.vPosition,
    //             vDesc: data.vDesc,
    //             vSn: data.vSn,
    //             vPn: data.vPn,
    //             vEqunr: data.vEqunr,
    //             vTask: data.vTask,
    //             vDocVer: data.vDocVer,
    //             vDocPart: data.vDocPart,
    //             vDocNo: data.vDocNo,
    //             vDocType: data.vDocType,
    //             vMpd: data.vMpd,
    //             vAta: data.vAta,
    //             zstatus: data.zstatus,
    //             erdat: data.erdat,
    //         },
    //     });
    // }

    trimSpaces(obj: MyObject): MyObject {
        Object.keys(obj)
            .forEach(key => {
                obj[key] = String(obj[key]).trim();
            });
        return obj;
    } 
}
