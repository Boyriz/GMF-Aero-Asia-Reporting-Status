import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class LifeRemainingsService {
    constructor(private prisma: PrismaService) {}

    all() {
        return this.prisma.lifeRemaining.findMany({
            include: {
                MPNumber: true,
            },
        });
    }

    get(id?: number) {
        return this.prisma.lifeRemaining.findFirst({
            where: {
                id: id,
            },
            include: {
                MPNumber: true,
            }
        });
    }

    async create(data: Prisma.LifeRemainingCreateInput) {
        return await this.prisma.lifeRemaining.create({
            data,
        });
    }

    findAll() {
        return this.prisma.lifeRemaining.findMany({
            include: {
                MPNumber: true,
            },
        });
    }

    findOne(id: number) {
        return this.prisma.lifeRemaining.findUnique({
            where: {
                id: +id,
            },
        });
    }

    async remove(id: number) {
        return await this.prisma.lifeRemaining.delete({
            where: {
                id: id,
            },
        });
    }

    async update(id: number, data: Prisma.LifeRemainingUpdateInput) {
        return await this.prisma.lifeRemaining.update({
            where: {
                id: id,
            },
            data,
        });
    }
}
