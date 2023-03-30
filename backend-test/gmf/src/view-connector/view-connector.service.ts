import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ViewConnectorService {
    constructor(private readonly prisma : PrismaService) {}

    all() {
        return this.prisma.viewConnector.findMany({
            include: {
                Connector: true,
            },
        });
    }

    findAll() {
        return this.prisma.viewConnector.findMany({
            include: {
                Connector: true,
            },
        });
    }

    async create(data: Prisma.viewConnectorCreateInput) {
        return await this.prisma.viewConnector.create({
            data: data,
        })
    }

    async getTC(id: number) {
        return await this.prisma.viewConnector.findMany({
            where: {
                connectorId: id
            },
            include: {
                Connector: true
            }
        });
    }

    async getNONTC(id: number) {
        return await this.prisma.viewConnector.findMany({
            where: {
                connectorId: id
            },
            include: {
                Connector: true
            }
        })
    }

    async assignViewConnector(id: number, connectorId: number) {
        return await this.prisma.viewConnector.update({
            where: {
                id: +id,
            },
            data: {
                Connector: {
                    connect: {
                        connector: +connectorId
                    },
                },
            },
        });
    }
}
