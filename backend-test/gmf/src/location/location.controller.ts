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
import { LocationService } from './location.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.enum';
import { FileLocationDto } from './location.dto';

// @UseGuards(JwtAuthGuard, RolesGuard)
@Controller('location')
export class LocationController {
    constructor(private locationService: LocationService) {}

    @Roles(Role.ADMIN, Role.USER)
    @Get()
    getAllLocation() {
        return this.locationService.findAll();
    }

    @Roles(Role.ADMIN, Role.USER)
    @Get(':id')
    async getLocations(@Param('id', ParseIntPipe) id: number) {
        const location = await this.locationService.findOne(+id);
        if(!location) {
            throw new NotFoundException(
                'FUNCTIONAL LOCATION NOT FOUND',
            );
        }
        return this.locationService.findOne(+id);
    }

    @Roles(Role.ADMIN)
    @Post()
    async addLocations(
        @Body() body: FileLocationDto,
    ) {
        return await this.locationService.create(body);
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    async removeLocations(@Param('id') id: number) {
        const location = await this.locationService.findOne(+id);
        if(!location) {
            throw new NotFoundException(
                'FUNCTIONAL LOCATION RECORD NOT FOUND',
            );
        }
        return await this.locationService.remove(+id);
    }

    @Roles(Role.ADMIN)
    @Patch(':id')
    async updateLocations(
        @Param('id',ParseIntPipe) id: number,
        @Body() body: FileLocationDto,
    ) {
        const location = await this.locationService.get(+id);
        if(!location) {
            throw new NotFoundException(
                'FUNCTIONAL LOCATION RECORD NOT FOUND',
            );
        }
        return await this.locationService.update(+id, body);
    }

}
