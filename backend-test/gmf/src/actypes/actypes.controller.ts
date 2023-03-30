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
import { ActypesService } from './actypes.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.enum';
import { FileActypesDto } from './actypes.dto';

// @UseGuards(JwtAuthGuard, RolesGuard)
@Controller('actypes')
export class ActypesController {
    constructor(private actypesService: ActypesService) {}

    @Roles(Role.ADMIN, Role.USER)
    @Get()
    getAllACTypes() {
        return this.actypesService.findAll();
    }

    @Roles(Role.ADMIN, Role.USER)
    @Get(':id')
    async getACTypes(@Param('id', ParseIntPipe) id: number) {
        const actype = await this.actypesService.findOne(+id);
        if (!actype) {
            throw new NotFoundException(
                'AC TYPE RECORD NOT FOUND',
            );
        }
        return this.actypesService.findOne(+id);
    }

    @Roles(Role.ADMIN)
    @Post()
    async addACTypes(
        @Body() body: FileActypesDto,
    ) {
        return await this.actypesService.create(body);
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    async removeACTypes(@Param('id') id: number) {
        const actype = await this.actypesService.findOne(+id);
        if (!actype) {
            throw new NotFoundException(
                'AC TYPE RECORD NOT FOUND',
            );
        }
        return await this.actypesService.remove(+id);
    }

    @Roles(Role.ADMIN)
    @Patch(':id')
    async updateACTypes(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: FileActypesDto,
    ) {
        const actype = await this.actypesService.get(+id);
        if(!actype) {
            throw new NotFoundException(
                'AC TYPES RECORD NOT FOUND',
            );
        }
        return await this.actypesService.update(+id, body);
    }

    @Roles(Role.ADMIN)
    @Patch('update/assign-operators')
    async assignACTypes(@Body() body: { acTypeId: number, operatorId: number}) {
        return await this.actypesService.assignACTypes(body.acTypeId, body.operatorId);
    }
}
