import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ActypesService {
    constructor(private readonly prisma: PrismaService) {}

    all() {
        return this.prisma.aCType.findMany({
            include: {
                Registration: true,
                AircraftDoc: true,
            },
        });
    }

    get(id?: number) {
        return this.prisma.aCType.findFirst({
            where: {
                id: id,
            },
            include: {
                Registration: true,
                AircraftDoc: true,
            }
        });
    }

    async create(data: Prisma.ACTypeCreateInput) {
        return await this.prisma.aCType.create({
            data,
        });
    }
    
    findAll() {
        return this.prisma.aCType.findMany({
            include: {
                Registration: true,
            },
        });
    }

    findOne(id: number) {
        return this.prisma.aCType.findUnique({
            where: {
                id: +id,
            },
        });
    }

    async remove(id: number) {
        return this.prisma.aCType.delete({
            where: {
                id: +id,
            },
        });
    }

    async update(id: number, data: Prisma.ACTypeUpdateInput) {
        return await this.prisma.aCType.update({
            where: {
                id: +id,
            },
            data,
        });
    }

    async assignACTypes(acTypeId: number, operatorId: number) {
        return await this.prisma.aCType.update({
            where: {
                id: +acTypeId,
            },
            data: {
                Operator: {
                    connect: {
                        id: +operatorId,
                    },
                },
            },
        });
    }
}
