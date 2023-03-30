import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DescriptionsService {
    constructor(private prisma: PrismaService) {}

    
    all() {
        return this.prisma.description.findMany({
            include: {
                MPNumber: true,
            },
        });
    }
    
    
    get(id?: number) {
        return this.prisma.description.findFirst({
            where: {
                id: id,
            },
            include: {
                MPNumber: true,
            }
        });
    }

    async create(data: Prisma.DescriptionCreateInput) {
        return await this.prisma.description.create({
            data,
        });
    }

    findAll() {
        return this.prisma.description.findMany({
            include: {
                MPNumber: true,
            },
        });
    }

    findOne(id: number) {
        return this.prisma.description.findUnique({
            where: {
                id: +id,
            },
        });
    }

    async remove(id: number) {
        return await this.prisma.description.delete({
            where: {
                id: id,
            },
        });
    }

    async update(id: number, data: Prisma.DescriptionUpdateInput) {
        return await this.prisma.description.update({
            where: {
                id: id,
            },
            data,
        });
    }
}
