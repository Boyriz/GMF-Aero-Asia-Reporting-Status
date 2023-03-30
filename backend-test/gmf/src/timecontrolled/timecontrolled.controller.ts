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
import { TimecontrolledService } from './timecontrolled.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.enum';
import { FileTimeDto } from './timecontrolled.dto';

// @UseGuards(JwtAuthGuard, RolesGuard)
@Controller('timecontrolled')
export class TimecontrolledController {
    constructor(private timeService: TimecontrolledService) {}

    @Roles(Role.ADMIN, Role.USER)
    @Get()
    getAllTime() {
        return this.timeService.findAll();
    }

    @Roles(Role.ADMIN, Role.USER)
    @Get(':id')
    async getTimes(@Param('id', ParseIntPipe) id: number) {
        const time = await this.timeService.findOne(+id);
        if(!time) {
            throw new NotFoundException(
                'TIME CONTROLLED DOCUMENT NOT FOUND',
            );
        }
        return this.timeService.findOne(+id);
    }

    @Roles(Role.ADMIN)
    @Post()
    async addTimes(
        @Body() body: FileTimeDto,
    ) {
        return await this.timeService.create(body);
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    async removeTimes(@Param('id') id: number) {
        const time = await this.timeService.findOne(+id);
        if(!time) {
            throw new NotFoundException(
                'TIME CONTROLLED RECORD NOT FOUND',
            );
        }
        return await this.timeService.remove(+id);
    }

    @Roles(Role.ADMIN)
    @Patch(':id')
    async updateTimes(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: FileTimeDto,
    ) {
        const time = await this.timeService.get(+id);
        if(!time) {
            throw new NotFoundException(
                'TIME CONTROLLED RECORD NOT FOUND',
            );
        }
        return await this.timeService.update(+id, body);
    }

    @Roles(Role.ADMIN)
    @Patch('update/time-controlled-mpnumbers')
    async assignTimeMPNumbers(@Body() Body: { id: number, mpNumberId: number }) {
        return await this.timeService.assignTimeMPNumbers(Body.id, Body.mpNumberId);
    }

    @Roles(Role.ADMIN)
    @Patch('update/time-controlled-aircrafts')
    async assignTimeAircrafts(@Body() body: { id: number, aircraftDocId: number }) {
        return await this.timeService.assignTimeAircrafts(body.id, body.aircraftDocId);
    }
}
