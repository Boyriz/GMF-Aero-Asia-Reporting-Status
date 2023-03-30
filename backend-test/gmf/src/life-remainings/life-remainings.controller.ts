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
import { LifeRemainingsService } from './life-remainings.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.enum';
import { FileLifeDto } from './life-remaining-dto';

// @UseGuards(JwtAuthGuard, RolesGuard)
@Controller('life-remainings')
export class LifeRemainingsController {
    constructor(private lifeService: LifeRemainingsService) {}

    @Roles(Role.ADMIN, Role.USER)
    @Get()
    getAllLife() {
        return this.lifeService.findAll();
    }

    @Roles(Role.ADMIN, Role.USER)
    @Get(':id')
    async getLifes(@Param('id', ParseIntPipe) id: number) {
        const life = await this.lifeService.findOne(+id);
        if(!life) {
            throw new NotFoundException(
                'LIFE REMAINING NOT FOUND'
            );
        }
        return this.lifeService.findOne(+id);
    }

    @Roles(Role.ADMIN)
    @Post()
    async addLifes(
        @Body() body: FileLifeDto,
    ) {
        return await this.lifeService.create(body);
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    async removeLifes(@Param('id') id: number) {
        const life = await this.lifeService.findOne(+id);
        if(!life) {
            throw new NotFoundException(
                'LIFE REMAINING RECORD NOT FOUND',
            );
        }
        return await this.lifeService.remove(+id);
    }

    @Roles(Role.ADMIN)
    @Patch(':id')
    async updateLifes(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: FileLifeDto,
    ) {
        return await this.lifeService.update(+id, body);
    }
}
