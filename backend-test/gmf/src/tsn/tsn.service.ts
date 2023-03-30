import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TsnService {
    constructor(private prisma: PrismaService) {}

    all() {
        return this.prisma.tSN.findMany({
            include: {
                MPNumber: true,
            },
        });
    }

    get(id?: number) {
        return this.prisma.tSN.findFirst({
            where: {
                id: id,
            },
            include: {
                MPNumber: true,
            }
        });
    }

    async create(data: Prisma.TSNCreateInput) {
        return await this.prisma.tSN.create({
            data,
        });
    }

    findAll() {
        return this.prisma.tSN.findMany({
            include: {
                MPNumber: true,
            },
        });
    }

    findOne(id: number) {
        return this.prisma.tSN.findUnique({
            where: {
                id: +id,
            },
        });
    }

    async remove(id: number) {
        return await this.prisma.tSN.delete({
            where: {
                id: id,
            },
        });
    }

    async update(id: number, data: Prisma.TSNUpdateInput) {
        return await this.prisma.tSN.update({
            where: {
                id: id,
            },
            data,
        });
    }
}
