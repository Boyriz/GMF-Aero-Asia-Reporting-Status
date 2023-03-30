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
import { DescriptionsService } from './descriptions.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.enum';
import { FileDescriptionDto } from './descriptions.dto';

// @UseGuards(JwtAuthGuard, RolesGuard)
@Controller('descriptions')
export class DescriptionsController {
    constructor(private descService: DescriptionsService) {}

    @Roles(Role.ADMIN, Role.USER)
    @Get()
    getAllDescription() {
        return this.descService.findAll();
    }

    @Roles(Role.ADMIN, Role.USER)
    @Get(':id')
    async getDescriptions(@Param('id', ParseIntPipe) id: number) {
        const description = await this.descService.findOne(+id);
        if(!description) {
            throw new NotFoundException(
                'DESCRIPTION NOT FOUND',
            );
        }
        return this.descService.findOne(+id);
    }

    @Roles(Role.ADMIN)
    @Post()
    async addDescriptions(
        @Body() body: FileDescriptionDto,
    ) {
        return await this.descService.create(body);
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    async removeDescriptions(@Param('id') id: number) {
        const description = await this.descService.findOne(+id);
        if(!description) {
            throw new NotFoundException(
                'DESCRIPTION RECORD NOT FOUND',
            );
        }
        return await this.descService.remove(+id);
    }

    @Roles(Role.ADMIN)
    @Patch(':id')
    async updateDescriptions(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: FileDescriptionDto,
    ) {
        const description = await this.descService.get(+id);
        if(!description) {
            throw new NotFoundException(
                'DESCRIPTION RECORD NOT FOUND',
            );
        }
        return await this.descService.update(+id, body);
    }
}
