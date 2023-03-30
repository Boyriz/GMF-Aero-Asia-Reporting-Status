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
import { TsnService } from './tsn.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.enum';
import { FileTSNDto } from './tsn.dto';

// @UseGuards(JwtAuthGuard, RolesGuard)
@Controller('tsn')
export class TsnController {
    constructor(private tsnService: TsnService) {}

    @Roles(Role.ADMIN, Role.USER)
    @Get()
    getAlltsn() {
        return this.tsnService.findAll();
    }

    @Roles(Role.ADMIN, Role.USER)
    @Get(':id')
    async getTSN(@Param('id', ParseIntPipe) id: number) {
        const tsn = await this.tsnService.findOne(+id);
        if(!tsn) {
            throw new NotFoundException(
                'TIMES SINCE NEW NOT FOUND',
            );
        }
        return this.tsnService.findOne(+id);
    }

    @Roles(Role.ADMIN)
    @Post()
    async addTSN(
        @Body() body: FileTSNDto,
    ) {
        return await this.tsnService.create(body);
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    async removeTSN(@Param('id') id: number) {
        const tsn = await this.tsnService.findOne(+id);
        if(!tsn) {
            throw new NotFoundException(
                'TIMES SINCE NEW RECORD NOT FOUND',
            );
        }
        return await this.tsnService.remove(+id);
    }

    @Roles(Role.ADMIN)
    @Patch(':id')
    async updateTSN(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: FileTSNDto,
    ) {
        const tsn = await this.tsnService.get(+id);
        if(!tsn) {
            throw new NotFoundException(
                'TIME SINCE NEW RECORD NOT FOUND',
            );
        }
        return await this.tsnService.update(+id, body);
    }
}
