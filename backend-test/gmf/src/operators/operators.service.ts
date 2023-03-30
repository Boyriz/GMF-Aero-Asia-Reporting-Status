import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OperatorsService {
    constructor(private prisma: PrismaService) {}

    all() {
        return this.prisma.operator.findMany({
            include: {
                ACType: true,
                AircraftDoc: true,
            },
        });
    }

    get(id?: number) {
        return this.prisma.operator.findFirst({
           where: {
            id: id,
           },
           include: {
            ACType: true,
            AircraftDoc: true,
           } 
        });
    }

    async create(data: Prisma.OperatorCreateInput) {
        return await this.prisma.operator.create({
            data,
        });
    }

    async remove(id: number) {
        return await this.prisma.operator.delete({
            where: {
                id: id,
            },
        });
    }

    async update(id: number, data: Prisma.OperatorUpdateInput) {
        return await this.prisma.operator.update({
            where: {
                id: id,
            },
            data,
        });
    }
}
