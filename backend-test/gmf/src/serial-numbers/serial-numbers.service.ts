import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SerialNumbersService {
    constructor(private prisma: PrismaService) {}

    all() {
        return this.prisma.serialNumber.findMany({
            include: {
                MPNumber: true,
            },
        });
    }

    get(id?: number) {
        return this.prisma.serialNumber.findFirst({
            where: {
                id: id,
            },
            include: {
                MPNumber: true,
            }
        });
    }

    async create(data: Prisma.SerialNumberCreateInput) {
        return await this.prisma.serialNumber.create({
            data,
        });
    }

    findAll() {
        return this.prisma.serialNumber.findMany({
            include: {
                MPNumber: true,
            },
        });
    }

    findOne(id: number) {
        return this.prisma.serialNumber.findUnique({
            where: {
                id: +id,
            },
        });
    }

    async remove(id: number) {
        return await this.prisma.serialNumber.delete({
            where: {
                id: id,
            },
        });
    }

    async update(id: number, data: Prisma.SerialNumberUpdateInput) {
        return await this.prisma.serialNumber.update({
            where: {
                id: id,
            },
            data,
        });
    }

}
