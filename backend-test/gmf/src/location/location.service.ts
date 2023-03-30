import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LocationService {
    constructor(private prisma: PrismaService) {}

    all() {
        return this.prisma.functionalLocation.findMany({
            include: {
                MPNumber: true,
            },
        });
    }

    get(id?: number) {
        return this.prisma.functionalLocation.findFirst({
            where: {
                id: id,
            },
            include: {
                MPNumber: true,
            }
        });
    }

    async create(data: Prisma.FunctionalLocationCreateInput) {
        return await this.prisma.functionalLocation.create({
            data,
        });
    }

    findAll() {
        return this.prisma.functionalLocation.findMany({
            include: {
                MPNumber: true,
            },
        });
    }

    findOne(id: number) {
        return this.prisma.functionalLocation.findUnique({
            where: {
                id: +id,
            },
        });
    }

    async remove(id: number) {
        return await this.prisma.functionalLocation.delete({
            where: {
                id: id,
            },
        });
    }

    async update(id: number, data: Prisma.FunctionalLocationUpdateInput) {
        return await this.prisma.functionalLocation.update({
            where: {
                id: id,
            },
            data,
        });
    }

}
