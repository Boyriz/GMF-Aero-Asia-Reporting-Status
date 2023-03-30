import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InstallDatesService {
    constructor(private prisma: PrismaService) {}

    all() {
        return this.prisma.installDate.findMany({
            include: {
                MPNumber: true,
            },
        });
    }

    get(id?: number) {
        return this.prisma.installDate.findFirst({
            where: {
                id: id,
            },
            include: {
                MPNumber: true,
            }
        });
    }

    async create(data: Prisma.InstallDateCreateInput) {
        return await this.prisma.installDate.create({
            data,
        });
    }

    findAll() {
        return this.prisma.installDate.findMany({
            include: {
                MPNumber: true,
            },
        });
    }

    findOne(id: number) {
        return this.prisma.installDate.findUnique({
            where: {
                id: +id,
            },
        });
    }

    
    async remove(id: number) {
        return await this.prisma.installDate.delete({
            where: {
                id: id,
            },
        });
    }

    async update(id: number, data: Prisma.InstallDateUpdateInput) {
        return await this.prisma.installDate.update({
            where: {
                id: id,
            },
            data,
        });
    }
}
