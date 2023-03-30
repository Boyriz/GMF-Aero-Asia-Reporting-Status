import { Injectable } from '@nestjs/common';
import { NonTc, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import fs from 'fs';
import { Client } from 'pg';
import { FileNONTCDTO } from './non-tc.dto';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class NontcService {
    createMany(arg0: { data: FileNONTCDTO; }) {
        return FileNONTCDTO;
    }

    async saveToDatabase(data: Prisma.NonTcCreateInput) {
        return await this.prisma.nonTc.create({
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

    // async migrateJsonToPostgresNONTC(filePath: string): Promise<void> {
    //     const jsonData = fs.readFileSync(filePath, 'utf-8');
    //     const data: FileNONTCDTO[] = JSON.parse(jsonData);

    //     for(const NONTCDTO of data) {
    //         await this.prisma.nonTc.create({
    //             data: {
    //                 mandt: NONTCDTO.mandt,
    //                 vEqunr: NONTCDTO.vEqunr,
    //                 vTsnBld: NONTCDTO.vTsnBld,
    //                 vTsiCyc: NONTCDTO.vTsiCyc,
    //                 vTsiHrs: NONTCDTO.vTsiHrs,
    //                 vTsnCyc: NONTCDTO.vTsnCyc,
    //                 vTsnHrs: NONTCDTO.vTsnHrs,
    //                 vInstalldt: NONTCDTO.vInstalldt,
    //                 tplnr: NONTCDTO.tplnr,
    //                 vPosition: NONTCDTO.vPosition,
    //                 vDesc: NONTCDTO.vDesc,
    //                 vSn: NONTCDTO.vSn,
    //                 vPn: NONTCDTO.vPn,
    //                 zstatus: NONTCDTO.zstatus,
    //                 erdat: NONTCDTO.erdat
    //             }
    //         })
    //     }
    // }

    async closeConnection(): Promise<void> {
        await this.client.end();
    }

    async getDataFromJson() {
        const data = require('../../../gmf/DATA_NONTC.json');
        const mappedData = plainToClass(FileNONTCDTO, data);
        const errors = await validate(mappedData);
        if (errors.length > 0) {
            throw new Error(`Validation Failed: ${JSON.stringify(errors)}`);
        }
        return mappedData;
    }

    all() {
        return this.prisma.nonTc.findMany({
            // include: {
            //     AircraftDoc: true,
            // },
        });
    }

    get(id: number) {
        return this.prisma.nonTc.findFirst({
            where: {
                vEqunr: id,
            },
        });
    }

    async create(data: Prisma.NonTcCreateInput) {
        return await this.prisma.nonTc.create({
            data,
        });
    }

    findAll() {
        return this.prisma.nonTc.findMany({
            // include: {
            //     AircraftDoc: true,
            // },
        });
    }

    findOne(id: number) {
        return this.prisma.nonTc.findUnique({
            where: {
                vEqunr: +id,
            },
        });
    }

    async remove(id: number) {
        return this.prisma.nonTc.findUnique({
            where: {
                vEqunr: id,
            },
        });
    }

    async update(id: number, data: Prisma.NonTcUpdateInput) {
        return await this.prisma.nonTc.update({
            where: {
                vEqunr: id,
            },
            data,
        });
    }

    // async assignNONTCRegis(id: number, tplnr: string) {
    //     return await this.prisma.nonTc.update({
    //         where: {
    //             vEqunr: +id,
    //         },
    //         data: {
    //             Registration: {
    //                 connect: {
    //                     id: +tplnr,
    //                 },
    //             },
    //         },
    //     });
    // }

    // async saveData(data: FileNONTCDTO): Promise<NonTc> {
    //     return await this.prisma.nonTc.create({
    //         data: {
    //             mandt: data.mandt,
    //             vEqunr: data.vEqunr,
    //             vTsnBld: data.vTsnBld,
    //             vTsiCyc: data.vTsiCyc,
    //             vTsiHrs: data.vTsiHrs,
    //             vTsnCyc: data.vTsnCyc,
    //             vTsnHrs: data.vTsnHrs,
    //             vInstalldt: data.vInstalldt,
    //             tplnr: data.tplnr,
    //             vPosition: data.vPosition,
    //             vDesc: data.vDesc,
    //             vSn: data.vSn,
    //             vPn: data.vPn,
    //             zstatus: data.zstatus,
    //             erdat: data.erdat
    //         }
    //     })
    // }

    // async assignNONTCAircrafts(id: number, aircraftDocId: number) {
    //     return await this.prisma.nonTc.update({
    //         where: {
    //             vEqunr: id,
    //         },
    //         data : {
    //             AircraftDoc: {
    //                 connect: {
    //                     id: +aircraftDocId,
    //                 },
    //             },
    //         },
    //     });
    // }
}
