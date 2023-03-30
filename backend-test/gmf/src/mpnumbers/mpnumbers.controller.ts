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
    Res,
    UseGuards,
  } from '@nestjs/common';
import { MpnumbersService } from './mpnumbers.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.enum';
import { FileMPNumberDto } from './mpnumbers.dto';
import { MPNumber, NonTc } from '@prisma/client';

// @UseGuards(JwtAuthGuard, RolesGuard)
@Controller('mpnumbers')
export class MpnumbersController {
    constructor(private readonly mpService: MpnumbersService) {}

    @Roles(Role.ADMIN, Role.USER)
    @Get()
    getAllMP() {
        return this.mpService.findAll();
    }

    @Roles(Role.ADMIN, Role.USER)
    @Get(':id')
    async getMPs(@Param('id', ParseIntPipe) id: number) {
        const mp = await this.mpService.findOne(+id);
        if(!mp) {
            throw new NotFoundException(
                'MP NUMBER DOCUMENT NOT FOUND'
            );
        }
        return this.mpService.findOne(+id);
    }

    @Roles(Role.ADMIN)
    @Post()
    async addMP(@Res() res: Response, @Body() data: FileMPNumberDto): Promise<MPNumber> {
        return await this.mpService.create({});
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    async removeMP(@Param('id') id: number) {
        const mp = await this.mpService.findOne(+id);
        if(!mp) {
            throw new NotFoundException(
                'MP NUMBER RECORD NOT FOUND',
            );
        }
        return await this.mpService.remove(+id);
    }

    // @Roles(Role.ADMIN)
    // @Patch(':id')
    // async updateMP(
    //     @Param('id', ParseIntPipe) id: number,
    //     @Body() body: FileMPNumberDto,
    // ) {
    //     const mp = await this.mpService.get(+id);
    //     if(!mp) {
    //         throw new NotFoundException(
    //             'MP NUMBER RECORD NOT FOUND',
    //         );
    //     }
    //     return await this.mpService.update(+id, body);
    // }

    @Roles(Role.ADMIN)
    @Patch('update/mp-funcloc')
    async assignMPNumberLocations(@Body() body: { id: number, functionalLocationId: number}) {
        return await this.mpService.assignMPNumberLocations(body.id, body.functionalLocationId);
    }

    @Roles(Role.ADMIN)
    @Patch('update/mp-partnum')
    async assignMPNumberParts(@Body() body: { id: number, partNumberId: number}) {
        return await this.mpService.assignMPNumberParts(body.id, body.partNumberId);
    }
    @Roles(Role.ADMIN)
    @Patch('update/mp-serialnum')
    async assignMPNumberSerials(@Body() body: { id: number, serialNumberId: number}) {
        return await this.mpService.assignMPNumberSerials(body.id, body.serialNumberId);
    }

    @Roles(Role.ADMIN)
    @Patch('update/mp-description')
    async assignMPNumberDescriptions(@Body() body: { id: number, descriptionId: number}) {
        return await this.mpService.assignMPNumberDescriptions(body.id, body.descriptionId);
    }

    @Roles(Role.ADMIN)
    @Patch('update/mp-task')
    async assignMPNumberTasks(@Body() body: { id: number, taskId: number }) {
        return await this.mpService.assignMPNumberTasks(body.id, body.taskId);
    }

    @Roles(Role.ADMIN)
    @Patch('update/mp-date')
    async assignMPNumberDates(@Body() body: { id: number, installDateId: number }) {
        return await this.mpService.assignMPNumberDates(body.id, body.installDateId);
    }

    @Roles(Role.ADMIN)
    @Patch('update/mp-tsn')
    async assignMPNumberTimeSinceNews(@Body() body: { id: number, tsnId: number }) {
        return await this.mpService.assignMPNumberTimeSinceNews(body.id, body.tsnId);
    }

    @Roles(Role.ADMIN)
    @Patch('update/mp-interval')
    async assignMPNumberIntervals(@Body() body: { id: number, intervalId: number }) {
        return await this.mpService.assignMPNumberIntervals(body.id, body.intervalId);
    }

    @Roles(Role.ADMIN)
    @Patch('update/mp-tsla')
    async assignMPNumberTimeSinceLasts(@Body() body: { id: number, tslaId: number }) {
        return await this.mpService.assignMPNumberTimeSinceLasts(body.id, body.tslaId);
    }

    @Roles(Role.ADMIN)
    @Patch('update/mp-life-remaining')
    async assignMPNumberLifes(@Body() body: { id: number, lifeRemainingId: number }) {
        return await this.mpService.assignMPNumberLifes(body.id, body.lifeRemainingId);
    }
}
