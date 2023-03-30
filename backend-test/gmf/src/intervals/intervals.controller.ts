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
import { IntervalsService } from './intervals.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.enum';
import { FileIntervalDto } from './intervals.dto';

// @UseGuards(JwtAuthGuard, RolesGuard)
@Controller('intervals')
export class IntervalsController {
    constructor(private intervalService: IntervalsService) {}

    @Roles(Role.ADMIN, Role.USER)
    @Get()
    getAllInterval() {
        return this.intervalService.findAll();
    }

    @Roles(Role.ADMIN, Role.USER)
    @Get(':id')
    async getIntervals(@Param('id', ParseIntPipe) id: number) {
        const interval = await this.intervalService.findOne(+id);
        if(!interval) {
            throw new NotFoundException(
                'INTERVAL NOT FOUND',
            );
        }
        return this.intervalService.findOne(+id);
    }

    @Roles(Role.ADMIN)
    @Post()
    async addIntervals(
        @Body() body: FileIntervalDto,
    ) {
        return await this.intervalService.create(body);
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    async removeIntervals(@Param('id') id: number) {
        const interval = await this.intervalService.findOne(+id);
        if(!interval) {
            throw new NotFoundException(
                'INTERVAL RECORD NOT FOUND',
            );
        }
        return await this.intervalService.remove(+id);
    }

    @Roles(Role.ADMIN)
    @Patch(':id')
    async updateIntervals(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: FileIntervalDto,
    ) {
        return await this.intervalService.update(+id, body);
    }
}
