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
import { SerialNumbersService } from './serial-numbers.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.enum';
import { FileSerialnumDto } from './serial-numbers.dto';

// @UseGuards(JwtAuthGuard, RolesGuard)
@Controller('serial-numbers')
export class SerialNumbersController {
    constructor(private serialService: SerialNumbersService) {}

    @Roles(Role.ADMIN, Role.USER)
    @Get()
    getAllSerial() {
        return this.serialService.findAll();
    }

    @Roles(Role.ADMIN, Role.USER)
    @Get(':id')
    async getSerials(@Param('id', ParseIntPipe) id: number) {
        const serial = await this.serialService.findOne(+id);
        if(!serial) {
            throw new NotFoundException(
                'SERIAL NUMBER NOT FOUND',
            );
        }
        return this.serialService.findOne(+id);
    }

    @Roles(Role.ADMIN)
    @Post()
    async addSerials(
        @Body() body: FileSerialnumDto,
    ) {
        return await this.serialService.create(body);
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    async removeSerials(@Param('id') id: number) {
        const serial = await this.serialService.findOne(+id);
        if(!serial) {
            throw new NotFoundException(
                'SERIAL NUMBER RECORD NOT FOUND',
            );
        }
        return await this.serialService.remove(+id);
    }

    @Roles(Role.ADMIN)
    @Patch(':id')
    async updateSerials(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: FileSerialnumDto,
    ) {
        return await this.serialService.update(+id, body);
    }

}
