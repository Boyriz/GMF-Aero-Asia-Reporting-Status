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

import { PartNumbersService } from './part-numbers.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.enum';
import { FilePartnumDto } from './part-numbers.dto';

// @UseGuards(JwtAuthGuard, RolesGuard)
@Controller('part-numbers')
export class PartNumbersController {
    constructor(private partService: PartNumbersService) {}

    @Roles(Role.ADMIN, Role.USER)
    @Get()
    getAllPart() {
        return this.partService.findAll();
    }

    @Roles(Role.ADMIN, Role.USER)
    @Get(':id')
    async getParts(@Param('id', ParseIntPipe) id: number) {
        const part = await this.partService.findOne(+id);
        if(!part) {
            throw new NotFoundException(
                'PART NUMBER NOT FOUND',
            );
        }
        return this.partService.findOne(+id);
    }

    @Roles(Role.ADMIN)
    @Post()
    async addParts(
        @Body() body: FilePartnumDto,
    ) {
        return await this.partService.create(body);
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    async removeParts(@Param('id') id: number) {
        const part = await this.partService.findOne(+id);
        if(!part) {
            throw new NotFoundException(
                'PART NUMBER RECORD NOT FOUND',
            );
        }
        return await this.partService.remove(+id);
    }

    @Roles(Role.ADMIN)
    @Patch(':id')
    async updateParts(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: FilePartnumDto,
    ) {
        return await this.partService.update(+id, body);
    }

}
