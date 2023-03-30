import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConnectorsService {
    constructor(private readonly prisma: PrismaService) {}

    all() {
        return this.prisma.connector.findMany({
            include: {
                Tc: true,
                NonTc: true,
                Registration: true
            },
        });
    }

    get(id: number) {
        return this.prisma.connector.findFirst({
            where: {
                connector: id,
            },
        });
    }

    async create(data: Prisma.ConnectorCreateInput) {
        return await this.prisma.connector.create({
            data: data,
        });
    }

    findAll() {
        return this.prisma.connector.findMany({
            include: {
                Tc: true,
                NonTc: true,
                Registration: true
            },
        });
    }

    findOne(connector: number) {
        return this.prisma.connector.findUnique({
            where: {
                connector: +connector,
            },
            include: {
                Tc: true,
                NonTc: true,
                Registration: true
            },
        });
    }

    // async getTC(registrationId: number) {
    //     return await this.prisma.connector.findUnique({
    //         where: {
    //             connector: +registrationId
    //         }
    //     })
    // }

    async remove(connector: number) {
        return await this.prisma.connector.delete({
            where: {
                connector: connector,
            },
        });
    }

    async update(connector: number, data: Prisma.ConnectorUpdateInput) {
        return await this.prisma.connector.update({
            where: {
                connector: +connector,
            },
            data,
        });
    }


    async assignConnectorTC(connector: number, warplId: number) {
        return await this.prisma.connector.update({
            where: {
                connector: +connector,
            },
            data: {
               Tc: {
                connect: {
                    warpl: +warplId,
                },
               },
            },
        });
    }

    async assignConnectorNONTC(connector: number, vEqunrId: number) {
        return await this.prisma.connector.update({
            where: {
                connector: +connector,
            },
            data: {
                NonTc: {
                    connect: {
                        vEqunr: +vEqunrId,
                    },
                },
            },
        });
    }

    async assignConnectorRegis(connector: number, registrationId: number) {
        return await this.prisma.connector.update({
            where: {
                connector: +connector,
            },
            data: {
                Registration: {
                    connect: {
                        id: +registrationId,
                    },
                },
            },
        });
    }

    async CompareRegisTC(registrationId: number) {
        return await this.prisma.connector.findUnique({
            where: {
                connector: +registrationId
            },
        })
    }

    async CompareRegisNONTC(registrationIdnon: number) {
        return await this.prisma.connector.findUnique({
            where: {
                connector: +registrationIdnon
            },
        })
    }
}
