import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PartNumbersService {
    constructor(private prisma: PrismaService) {}

    all() {
        return this.prisma.partNumber.findMany({
            include: {
                MPNumber: true,
            },
        });
    }

    get(id?: number) {
        return this.prisma.partNumber.findFirst({
            where: {
                id: id,
            },
            include: {
                MPNumber: true,
            }
        });
    }

    async create(data: Prisma.PartNumberCreateInput) {
        return await this.prisma.partNumber.create({
            data,
        });
    }

    findAll() {
        return this.prisma.partNumber.findMany({
            include: {
                MPNumber: true,
            },
        });
    }

    findOne(id: number) {
        return this.prisma.partNumber.findUnique({
            where: {
                id: +id,
            },
        });
    }

    async remove(id: number) {
        return await this.prisma.partNumber.delete({
            where: {
                id: id,
            },
        });
    }

    async update(id: number, data: Prisma.PartNumberUpdateInput) {
        return await this.prisma.partNumber.update({
            where: {
                id: id,
            },
            data,
        });
    }
}
