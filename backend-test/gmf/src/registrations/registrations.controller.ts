import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    UseGuards,
  } from '@nestjs/common';
import { RegistrationsService } from './registrations.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.enum';
import { FileRegistartionDto } from './registrations.dto';

// @UseGuards(JwtAuthGuard, RolesGuard)
@Controller('registrations')
export class RegistrationsController {
    constructor(private registrationService: RegistrationsService) {}

    @Roles(Role.ADMIN, Role.USER)
    @Get()
    getAllRegistration() {
        return this.registrationService.findAll();
    }

    @Roles(Role.ADMIN, Role.USER)
    @Get(':id')
    async getRegistrations(@Param('id', ParseIntPipe) id: number) {
        const registration = await this.registrationService.findOne(+id);
        if (!registration) {
            throw new NotFoundException(
                'REGISTRATION RECORD NOT FOUND',
            );
        }
        return this.registrationService.findOne(+id);
    }

    @Roles(Role.ADMIN)
    @Post()
    async addRegistrations(
        @Body() body: FileRegistartionDto,
    ) {
        return await this.registrationService.create(body);
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    async removeRegistrations(@Param('id') id: number) {
        const registration = await this.registrationService.findOne(+id);
        if (!registration) {
            throw new NotFoundException(
                'REGISTRATION RECORD NOT FOUND',
            );
        }
        return await this.registrationService.remove(+id);
    }

    @Roles(Role.ADMIN)
    @Patch(':id')
    async updateRegistrations(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: FileRegistartionDto,
    ) {
        const registration = await this.registrationService.get(+id);
        if(!registration) {
            throw new NotFoundException(
                'REGISTRATION RECORD NOT FOUND',
            );
        }
        return await this.registrationService.update(+id, body);
    }

    @Roles(Role.ADMIN)
    @Patch('update/assign-actypes')
    async assignRegistrations(@Body() body: { registrationId: number, acTypeId: number }) {
        return await this.registrationService.assignRegistrations(body.registrationId, body.acTypeId);
    }
}
