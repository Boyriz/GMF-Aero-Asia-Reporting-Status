import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
    constructor(private prisma: PrismaService) {}

    all() {
        return this.prisma.task.findMany({
            include: {
                MPNumber: true,
            },
        });
    }

    get(id?: number) {
        return this.prisma.task.findFirst({
            where: {
                id: id,
            },
            include: {
                MPNumber: true,
            }
        });
    }

    async create(data: Prisma.TaskCreateInput) {
        return await this.prisma.task.create({
            data,
        });
    }

    
    findAll() {
        return this.prisma.task.findMany({
            include: {
                MPNumber: true,
            },
        });
    }

    
    findOne(id: number) {
        return this.prisma.task.findUnique({
            where: {
                id: +id,
            },
        });
    }

    async remove(id: number) {
        return await this.prisma.task.delete({
            where: {
                id: id,
            },
        });
    }

    async update(id: number, data: Prisma.TaskUpdateInput) {
        return await this.prisma.task.update({
            where: {
                id: id,
            },
            data,
        });
    }
}
