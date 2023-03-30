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
import { viewConnector } from '@prisma/client';
import { FileViewConnectorDTO } from './view-connector.dto';
import { ViewConnectorService } from './view-connector.service';
import { Response } from 'express';


@Controller('view-connector')
export class ViewConnectorController {
    constructor(private readonly viewConnectorService: ViewConnectorService) {}

    @Get()
    async getAllData() {
        return this.viewConnectorService.findAll();
    }

    @Get(':id')
    async getData(@Param('id', ParseIntPipe) id: number) {
        const viewConnector = await this.viewConnectorService.getTC(+id);
        if(!viewConnector) {
            throw new NotFoundException(
                'TC NOT FOUND'
            );
        }
        return this.viewConnectorService.getTC(+id);
    }

    // @Post()
    // async addData(@Res() res: Response, @Body() data: FileViewConnectorDTO) {
    //     await this.viewConnectorService.getTC({});
    //     return res
    //             .status(200)
    //             .send({
    //                 message: 'Data Connected Succesfully',
    //                 data: data
    //             })
    // }
}
