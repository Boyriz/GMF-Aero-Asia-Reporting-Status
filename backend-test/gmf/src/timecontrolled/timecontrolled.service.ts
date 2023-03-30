import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TimecontrolledService {
    constructor(private prisma: PrismaService) {}

    all() {
        return this.prisma.timeControlled.findMany({
            include: {
                MPNumber: true,
                AircraftDoc: true,
            },
        });
    }

    get(id: number) {
        return this.prisma.timeControlled.findFirst({
            where: {
                id: id,
            },
        });
    }

    async create(data: Prisma.timeControlledCreateInput) {
        return await this.prisma.timeControlled.create({
            data,
        });
    }

    findAll() {
        return this.prisma.timeControlled.findMany({
            include: {
                MPNumber: true,
                AircraftDoc: true,
            },
        });
    }

    findOne(id: number) {
        return this.prisma.timeControlled.findUnique({
            where: {
               id: +id
            },
        });
    }

    async remove(id: number) {
        return await this.prisma.timeControlled.delete({
            where: {
                id: id,
            },
        });
    }

    async update(id: number, data: Prisma.timeControlledUpdateInput) {
        return await this.prisma.timeControlled.update({
            where: {
                id: id,
            },
            data,
        });
    }

    async assignTimeMPNumbers(id: number, mpNumberId: number) {
        return await this.prisma.timeControlled.update({
            where: {
                id: +id,
            },
            data: {
                MPNumber: {
                    connect: {
                        id: +mpNumberId,
                    },
                },
            },
        });
    }

    async assignTimeAircrafts(id: number, aircraftDocId: number) {
        return await this.prisma.timeControlled.update({
            where: {
                id: +id,
            },
            data: {
                AircraftDoc: {
                    connect: {
                        id: +aircraftDocId,
                    },
                },
            },
        });
    }
}
