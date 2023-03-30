import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { FileMPNumberDto } from './mpnumbers.dto';

@Injectable()
export class MpnumbersService {
    constructor(private readonly prisma: PrismaService) {}

    all() {
        return this.prisma.mPNumber.findMany({
            include: {
                FunctionalLocation: true,
                PartNumber: true,
                SerialNumber: true,
                Description: true,
                Task: true,
                InstallDate: true,
                TSN: true,
                Interval: true,
                TSLA: true,
                LifeRemaining: true,
            },
        });
    }

    get(id: number) {
        return this.prisma.mPNumber.findFirst({
            where: {
                id: id,
            },
        });
    }

    async create(data: Prisma.MPNumberCreateInput) {
        return await this.prisma.mPNumber.create({
            data: data,
        });
    }

    findAll() {
        return this.prisma.mPNumber.findMany({
            include: {
                FunctionalLocation: true,
                PartNumber: true,
                SerialNumber: true,
                Description: true,
                Task: true,
                InstallDate: true,
                TSN: true,
                Interval: true,
                TSLA: true,
                LifeRemaining: true,
            },
        });
    }

    findOne(id: number) {
        return this.prisma.mPNumber.findUnique({
            where: {
                id: +id,
            },
        });
    }

    async remove(id: number) {
        return await this.prisma.mPNumber.delete({
            where: {
                id: id,
            },
        });
    }

    async update(id: number, data: Prisma.MPNumberUpdateInput) {
        return await this.prisma.mPNumber.update({
            where: {
                id: id,
            },
            data,
        });
    }

    async assignMPNumberLocations(id: number, functionalLocationId: number) {
        return await this.prisma.mPNumber.update({
            where: {
                id: +id,
            },
            data: {
                FunctionalLocation: {
                    connect: {
                        id: +functionalLocationId,
                    },
                },
            },
        });
    }

    async assignMPNumberParts(id: number, partNumberId: number) {
        return await this.prisma.mPNumber.update({
            where: {
                id: +id,
            },
            data: {
                PartNumber: {
                    connect: {
                        id: +partNumberId,
                    },
                },
            },
        });
    }

    async assignMPNumberSerials(id: number, serialNumberId: number) {
        return await this.prisma.mPNumber.update({
            where: {
                id: +id,
            },
            data: {
                SerialNumber: {
                    connect: {
                        id: +serialNumberId,
                    },
                },
            },
        });
    }

    async assignMPNumberDescriptions(id: number, descriptionId: number) {
        return await this.prisma.mPNumber.update({
            where: {
                id: +id,
            },
            data: {
                Description: {
                    connect: {
                        id: +descriptionId,
                    },
                },
            },
        });
    }

    async assignMPNumberTasks(id: number, taskId: number) {
        return await this.prisma.mPNumber.update({
            where: {
                id: +id,
            },
            data: {
                Task: {
                    connect: {
                        id: +taskId,
                    },
                },
            },
        });
    }

    async assignMPNumberDates(id: number, installDateId: number) {
        return await this.prisma.mPNumber.update({
            where: {
                id: +id,
            },
            data: {
                InstallDate: {
                    connect: {
                        id: +installDateId,
                    },
                },
            },
        });
    }

    async assignMPNumberTimeSinceNews(id: number, tsnId: number) {
        return await this.prisma.mPNumber.update({
            where: {
                id: +id,
            },
            data: {
                TSN: {
                    connect: {
                        id: +tsnId,
                    },
                },
            },
        });
    }

    async assignMPNumberIntervals(id: number, intervalId: number) {
        return await this.prisma.mPNumber.update({
            where: {
                id: +id,
            },
            data: {
                Interval: {
                    connect: {
                        id: +intervalId,
                    },
                },
            },
        });
    }

    async assignMPNumberTimeSinceLasts(id: number, tslaId: number) {
        return await this.prisma.mPNumber.update({
            where: {
                id: +id,
            },
            data: {
                TSLA: {
                    connect: {
                        id: +tslaId,
                    },
                },
            },
        });
    }

    async assignMPNumberLifes(id: number, lifeRemainingId: number) {
        return await this.prisma.mPNumber.update({
            where: {
                id: +id,
            },
            data: {
                LifeRemaining: {
                    connect: {
                        id: +lifeRemainingId,
                    },
                },
            },
        });
    }
}
