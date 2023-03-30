import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IntervalsService {
    constructor(private prisma: PrismaService) {}

    all() {
        return this.prisma.interval.findMany({
            include: {
                MPNumber: true,
            },
        });
    }

    get(id?: number) {
        return this.prisma.interval.findFirst({
            where: {
                id: id,
            },
            include: {
                MPNumber: true,
            }
        });
    }

    async create(data: Prisma.IntervalCreateInput) {
        return await this.prisma.interval.create({
            data,
        });
    }

    findAll() {
        return this.prisma.interval.findMany({
            include: {
                MPNumber: true,
            },
        });
    }

    findOne(id: number) {
        return this.prisma.interval.findUnique({
            where: {
                id: +id,
            },
        });
    }

    async remove(id: number) {
        return await this.prisma.interval.delete({
            where: {
                id: id,
            },
        });
    }

    async update(id: number, data: Prisma.IntervalUpdateInput) {
        return await this.prisma.interval.update({
            where: {
                id: id,
            },
            data,
        });
    }
}
