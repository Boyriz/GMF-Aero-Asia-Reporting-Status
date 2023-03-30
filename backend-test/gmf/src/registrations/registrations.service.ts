import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RegistrationsService {
    constructor(private readonly prisma: PrismaService) {}

    all() {
        return this.prisma.registration.findMany({
            include: {
                ComponentStatus: true,
                AircraftDoc: true,
                ACType: true
            },
        });
    }

    get(id?: number) {
        return this.prisma.registration.findFirst({
            where: {
                id: id,
            },
            include: {
                ComponentStatus: true,
                AircraftDoc: true,
            }
        });
    }

   async create(data: Prisma.RegistrationCreateManyInput) {
    return await this.prisma.registration.create({
        data,
    });
   }

   findAll() {
    return this.prisma.registration.findMany({
        include: {
            ComponentStatus: true,
        },
    });
   }

   findOne(id: number) {
    return this.prisma.registration.findUnique({
        where: {
            id: +id,
        },
    });
   }

    async remove(id: number) {
        return this.prisma.registration.delete({
            where: {
                id: +id,
            },
        });
    }

    async update(id: number, data: Prisma.RegistrationUpdateInput) {
        return await this.prisma.registration.update({
            where: {
                id: +id,
            },
            data,
        });
    }

    async assignRegistrations(registrationId: number, acTypeId: number) {
        return await this.prisma.registration.update({
            where: {
                id: +registrationId,
            },
            data: {
                ACType: {
                    connect: {
                        id: +acTypeId,
                    },
                },
            },
        });
    }
}
