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
import { ConnectorsService } from './connectors.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.enum';
import { FileConnectorDTO } from './connectors.dto';
import { Response } from 'express';

// @UseGuards(JwtAuthGuard, RolesGuard)
@Controller('connectors')
export class ConnectorsController {
    constructor(private readonly connectorService: ConnectorsService) {}

    @Roles(Role.ADMIN)
    @Get()
    getAllData() {
        return this.connectorService.findAll();
    }

    @Roles(Role.ADMIN)
    @Get(':id')
    async getDatas(@Param('id', ParseIntPipe) id: number) {
        const connector = await this.connectorService.findOne(+id);
        if(!connector) {
            throw new NotFoundException(
                'DATA FROM JSON NOT FOUND'
            );
        }
        return this.connectorService.findOne(+id);
    }

    @Get('compare/:registrationId')
    async CompareRegisTC(@Param('registrationId', ParseIntPipe) registrationId: number) {
        return this.connectorService.CompareRegisTC(+registrationId);
    }

    @Roles(Role.ADMIN)
    @Post()
    async addData(@Res() res: Response, @Body() data: FileConnectorDTO) {
        await this.connectorService.create({});
        return res
                .status(200)
                .send({
                    message: 'Data connector succesfully moved',
                    data: data
                });
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    async removeData(@Param('id') id: number) {
        const connector = await this.connectorService.findOne(+id);
        if(!connector) {
            throw new NotFoundException(
                'DATA FROM JSON NOT FOUND',
            );
        }
        return await this.connectorService.remove(+id);
    }

    @Roles(Role.ADMIN)
    @Patch('update/data-tc')
    async assignConnectorTC(@Body() body: { connector: number, warpl: number }) {
        return await this.connectorService.assignConnectorTC(body.connector, body.warpl);
    }

    @Roles(Role.ADMIN)
    @Patch('update/data-nontc')
    async assignConnectorNONTC(@Body() body: { connector: number, vEqunr: number }) {
        return await this.connectorService.assignConnectorNONTC(body.connector, body.vEqunr);
    }

    @Roles(Role.ADMIN)
    @Patch('update/data-regis')
    async assignConnectorRegis(@Body() body: { connector: number, id: number }) {
        return await this.connectorService.assignConnectorRegis(body.connector, body.id);
    }
}
