import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AircraftsService {
    constructor(private readonly prisma: PrismaService) {}

    all() {
        return this.prisma.aircraftDoc.findMany({
            include: {
                Operator: true,
                Registration: true,
                ACType: true,
                ComponentStatus: true,
            },
        });
    }

    get(id: number) {
        return this.prisma.aircraftDoc.findFirst({
            where: {
                id: id,
            },
        });
    }

    async create(data: Prisma.AircraftDocCreateInput) {
        return await this.prisma.aircraftDoc.create({
            data: data,
        });
    }

    findAll() {
        return this.prisma.aircraftDoc.findMany({
            include: {
                Operator: true,
                Registration: true,
                ACType: true,
                ComponentStatus: true,
            },
        });
    }

    findOne(id: number) {
        return this.prisma.aircraftDoc.findUnique({
            where: {
                id: +id,
            },
        });
    } 

    async remove(id: number) {
        return await this.prisma.aircraftDoc.delete({
            where: {
                id: id,
            },
        });
    }

    async update(id: number, data: Prisma.AircraftDocUpdateInput) {
        return await this.prisma.aircraftDoc.update({
            where: {
                id: id,
            },
            data,
        });
    }

    async assignAircraftOperators(id: number, operatorId: number) {
        return await this.prisma.aircraftDoc.update({
            where: {
                id: +id,
            },
            data: {
                Operator: {
                    connect: {
                        id: +operatorId,
                    },
                },
            },
        });
    }
    async assignAircraftRegistrations(id: number, registrationId: number) {
        return await this.prisma.aircraftDoc.update({
            where: {
                id: +id,
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

    async assignAircraftACTypes(id: number, acTypeId: number) {
        return await this.prisma.aircraftDoc.update({
            where: {
                id: +id,
            },
            data: {
                ACType: {
                    connect: {
                        id: +acTypeId,
                    },
                },
            },
        });
    }
    async assignAircraftComponentStatus(id: number, statusId: number) {
        return await this.prisma.aircraftDoc.update({
            where: {
                id: +id,
            },
            data: {
                ComponentStatus: {
                    connect: {
                        id: +statusId,
                    },
                },
            },
        });
    }

}
