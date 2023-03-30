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
import { ComponentsService } from './components.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.enum';
import { FileComponentDto } from './components.dto';

// @UseGuards(JwtAuthGuard, RolesGuard)
@Controller('components')
export class ComponentsController {
    constructor(private componentsService: ComponentsService) {}

    @Roles(Role.ADMIN, Role.USER)
    @Get()
    getAllComponentStatus() {
        return this.componentsService.findAll();
    }

    @Roles(Role.ADMIN, Role.USER)
    @Get(':id')
    async getComponentStatus(@Param('id', ParseIntPipe) id: number) {
        const component = await this.componentsService.findOne(+id);
        if(!component) {
            throw new NotFoundException(
                'COMPONENT STATUS NOT FOUND',
            );
        }
        return this.componentsService.findOne(+id);
    }

    @Roles(Role.ADMIN)
    @Post()
    async addComponentStatus(
        @Body() body: FileComponentDto,
    ) {
        return await this.componentsService.create(body);
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    async removeComponentStatus(@Param('id') id: number) {
        const component = await this.componentsService.findOne(+id);
        if (!component) {
            throw new NotFoundException(
                'COMPONENT STATUS RECORD NOT FOUND',
            );
        }
        return await this.componentsService.remove(+id);
    }

    @Roles(Role.ADMIN)
    @Patch(':id')
    async updateComponentStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: FileComponentDto,
    ) {
        const component = await this.componentsService.get(+id);
        if(!component) {
            throw new NotFoundException(
                'COMPONENT STATUS RECORD NOT FOUND',
            );
        }
        return await this.componentsService.update(+id, body);
    }

    @Roles(Role.ADMIN)
    @Patch('update/assign-registrations')
    async assignComponentStatus(@Body() body: { statusId: number, registrationId: number}) {
        return await this.componentsService.assignComponentStatus(body.statusId, body.registrationId);
    }
}
