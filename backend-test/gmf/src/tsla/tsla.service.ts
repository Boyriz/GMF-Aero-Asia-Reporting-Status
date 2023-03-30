import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TslaService {
    constructor(private prisma: PrismaService) {}

    all() {
        return this.prisma.tSLA.findMany({
            include: {
                MPNumber: true,
            },
        });
    }

    get(id?: number) {
        return this.prisma.tSLA.findFirst({
            where: {
                id: id,
            },
            include: {
                MPNumber: true,
            }
        });
    }

    async create(data: Prisma.TSLACreateInput) {
        return await this.prisma.tSLA.create({
            data,
        });
    }

    findAll() {
        return this.prisma.tSLA.findMany({
            include: {
                MPNumber: true,
            },
        });
    }

    findOne(id: number) {
        return this.prisma.tSLA.findUnique({
            where: {
                id: +id,
            },
        });
    }

    async remove(id: number) {
        return await this.prisma.tSLA.delete({
            where: {
                id: id,
            },
        });
    }

    async update(id: number, data: Prisma.TSLAUpdateInput) {
        return await this.prisma.tSLA.update({
            where: {
                id: id,
            },
            data,
        });
    }
}
