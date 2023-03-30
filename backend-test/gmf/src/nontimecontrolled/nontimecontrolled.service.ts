import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NontimecontrolledService {
    constructor(private prisma: PrismaService) {}

    all() {
        return this.prisma.nontimeControlled.findMany({
            include: {
                MPNumber: true,
                AircraftDoc: true,
            },
        });
    }

    get(id: number) {
        return this.prisma.nontimeControlled.findFirst({
            where: {
                id: id,
            },
        });
    }

    async create(data: Prisma.nontimeControlledCreateInput) {
        return await this.prisma.nontimeControlled.create({
            data,
        });
    }

    findAll() {
        return this.prisma.nontimeControlled.findMany({
            include: {
                MPNumber: true,
                AircraftDoc: true,
            },
        });
    }

    findOne(id: number) {
        return this.prisma.nontimeControlled.findUnique({
            where: {
                id: +id,
            },
        });
    }

    async remove(id: number) {
        return await this.prisma.nontimeControlled.delete({
            where: {
                id: id,
            },
        });
    }

    async update(id: number, data: Prisma.nontimeControlledUpdateInput) {
        return await this.prisma.nontimeControlled.update({
            where: {
                id: id,
            },
            data,
        });
    }

    async assignNonTimeMPNumbers(id: number, mpNumberId: number) {
        return await this.prisma.nontimeControlled.update({
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

    async assignNonTimeAircrafts(id: number, aircraftDocId: number) {
        return await this.prisma.nontimeControlled.update({
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
