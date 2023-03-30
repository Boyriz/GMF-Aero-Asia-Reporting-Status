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
import { TslaService } from './tsla.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.enum';
import { FileTSLADto } from './tsla.dto';

// @UseGuards(JwtAuthGuard, RolesGuard)
@Controller('tsla')
export class TslaController {
    constructor(private tslaService: TslaService) {}

    @Roles(Role.ADMIN, Role.USER)
    @Get()
    getAllTSLA() {
        return this.tslaService.findAll();
    }

    @Roles(Role.ADMIN, Role.USER)
    @Get(':id')
    async getTSLA(@Param('id', ParseIntPipe) id: number) {
        const tsla = await this.tslaService.findOne(+id);
        if(!tsla) {
            throw new NotFoundException(
                'TIMES SINCE LAST ACCOMPLISHMENT NOT FOUND',
            );
        }
        return this.tslaService.findOne(+id);
    }

    @Roles(Role.ADMIN)
    @Post()
    async addTSLA(
        @Body() body: FileTSLADto,
    ) {
        return await this.tslaService.create(body);
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    async removeTSLA(@Param('id') id: number) {
        const tsla = await this.tslaService.findOne(+id);
        if(!tsla) {
            throw new NotFoundException(
                'TIMES SINCE LAST ACCOMPLISHMENT RECORD NOT FOUND',
            );
        }
        return await this.tslaService.remove(+id);
    }

    @Roles(Role.ADMIN)
    @Patch(':id')
    async updateTSLA(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: FileTSLADto,
    ) {
        return await this.tslaService.update(+id, body);
    }
}
