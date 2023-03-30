import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ComponentsService {
    constructor(private readonly prisma: PrismaService) {}

    all() {
        return this.prisma.componentStatus.findMany({
            include: {
                Registration: true,
                AircraftDoc: true,
            },
        });
    }

    get(id?: number) {
        return this.prisma.componentStatus.findFirst({
            where: {
                id: id,
            },
            include: {
                AircraftDoc: true,
            }
        });
    }

    async create(data: Prisma.ComponentStatusCreateInput) {
        return await this.prisma.componentStatus.create({
            data,
        });
    }
    
    findAll() {
        return this.prisma.componentStatus.findMany({
            include: {
                Registration: true,
            },
        });
    }

    findOne(id: number) {
        return this.prisma.componentStatus.findUnique({
            where: {
                id: +id,
            },
        });
    }

    async remove(id: number) {
        return this.prisma.componentStatus.delete({
            where: {
                id: +id,
            },
        });
    }

    async update(id: number, data: Prisma.ComponentStatusUpdateInput) {
        return await this.prisma.componentStatus.update({
            where: {
                id: +id,
            },
            data,
        });
    }

    async assignComponentStatus(statusId: number, registrationId: number) {
        return await this.prisma.componentStatus.update({
            where: {
                id: +statusId,
            },
            data: {
                Registration: {
                    connect: {
                        id: +registrationId,
                    },
                },
            },
        });
    }
}
