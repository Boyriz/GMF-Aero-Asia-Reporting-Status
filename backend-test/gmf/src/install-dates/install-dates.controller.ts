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
import { InstallDatesService } from './install-dates.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.enum';
import { FileDateDto } from './install-dates.dto';

// @UseGuards(JwtAuthGuard, RolesGuard)
@Controller('install-dates')
export class InstallDatesController {
    constructor(private dateService: InstallDatesService) {}

    @Roles(Role.ADMIN, Role.USER)
    @Get()
    getAllDate() {
        return this.dateService.findAll();
    }

    @Roles(Role.ADMIN, Role.USER)
    @Get(':id')
    async getDates(@Param('id', ParseIntPipe) id: number) {
        const date = await this.dateService.findOne(+id);
        if(!date) {
            throw new NotFoundException(
                'INSTALL DATE NOT FOUND',
            );
        }
        return this.dateService.findOne(+id);
    }

    @Roles(Role.ADMIN)
    @Post()
    async addDate(
        @Body() body: FileDateDto,
    ) {
        return await this.dateService.create(body);
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    async removeDates(@Param('id') id: number) {
        const date = await this.dateService.findOne(+id);
        if(!date) {
            throw new NotFoundException(
                'INSTALL DATE RECORD NOT FOUND',
            );
        }
        return await this.dateService.remove(+id);
    }

    @Roles(Role.ADMIN)
    @Patch(':id')
    async updateDates(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: FileDateDto,
    ) {
        const date = await this.dateService.get(+id);
        if(!date) {
            throw new NotFoundException(
                'INSTALL DATE RECORD NOT FOUND',
            );
        }
        return await this.dateService.update(+id, body);
    }
}
