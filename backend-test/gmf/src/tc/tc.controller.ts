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
    UploadedFile,
    UseInterceptors
  } from '@nestjs/common';
import { TcService } from './tc.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.enum';
import { FileTCDTO, TCJsonDTO } from './tc.dto';
import * as fs from 'fs';
import { Response } from 'express';
import { Tc } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';



// @UseGuards(JwtAuthGuard, RolesGuard)
@Controller('tc')
export class TcController {
    constructor(private readonly tcService: TcService) {}

    @Roles(Role.ADMIN, Role.USER)
    @Get()
    getAllTC(@Res() res: Response) {
            const jsonString = fs.readFileSync('DATA_TC.json', 'utf-8'); 
            const timecontrolled: FileTCDTO[] = JSON.parse(jsonString);

            console.log(timecontrolled);
            
            timecontrolled.forEach(value => {
                timecontrolled.values()
            });
            // const result = from(timecontrolled)
            // .pipe(
            //     tap(c => console.log(c))
            // );
            return res.status(200).send(timecontrolled);
    }       
    
    @Get('/trim')
    trimSpaces(): MyObject {
        const obj: MyObject = {
            vTsnBld: '3506',
            vTsiCyc: '                         8318',
            vTsiHrs: '                        15029',
            vTstCyc: '                         3531',
            vTstHrs: '                         5457',
            vTsoCyc: '                         3531',
            vTsoHrs: '                         5457',
            vTsnCyc: '                         8318',
            vTsnHrs: '                        15029',
            vIntDays: '                          365',
        };
        return this.tcService.trimSpaces(obj);
    }
            
 
        // const result = from(timecontrolled)
        //     .pipe(
        //         tap(c => console.log(c))
        //     );

        // timecontrolled.forEach(value => {
        //     timecontrolled.values()
        // })
        // return res.status(200).send();
        // // return this.tcService.findAll();
 

    @Roles(Role.ADMIN, Role.USER)
    @Get(':id')
    async getTC(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const tc = await this.tcService.findOne(+id);
        if(!tc) {
            throw new NotFoundException(
                'TIME CONTROLLED DATABASE NOT FOUND',
            );
        }
        return this.tcService.findOne(+id);

        // return res.status(200).send(timecontrolled);
    }

    // @Roles(Role.ADMIN)
    // @Post()
    // async addTC(
    //     @Body() body: FileTCDTO,
    // ) {
    //     return await this.tcService.create(body);
    // }

    // @Roles(Role.ADMIN)
    // @Post('migrate')
    // @UseInterceptors(FileInterceptor('file'))
    // async migrateJsonToPostgres(@UploadedFile() file: Express.Multer.File): Promise<void> {
    //     await this.tcService.migrateJsonToPostgres(file.path);
    // }

    // @Roles(Role.ADMIN)
    // @Post()
    // async create(@Body() data: FileTCDTO): Promise<Tc> {
    //     return await this.tcService.saveData(data);
    // }

    @Roles(Role.ADMIN)
    @Post()
    async saveToDatabase(@Res() res: Response, @Body() myData: FileTCDTO) {
        // await this.tcService.createMany({ data: myData });
        await this.tcService.saveToDatabase({
            mandt: Number(myData.mandt) || -1,
            warpl: Number(myData.warpl) || -1,
            wapos: Number(myData.wapos) || -1,
            qmnum: myData.qmnum,
            qmart: myData.qmart,
            mptyp: myData.mptyp,
            vDuedt: new Date(myData.vDuedt) || new Date(),
            vUnit: myData.vUnit,
            vLifeRem: myData.vLifeRem,
            vTsnBld: myData.vTsnBld,
            vTsiCyc: myData.vTsiCyc,
            vTsiHrs: myData.vTsiHrs,
            vTsoBld: myData.vTsoBld,
            vTstCyc: myData.vTstCyc,
            vTstHrs: myData.vTstHrs,
            vTsoCyc: myData.vTsoHrs,
            vTsoHrs: myData.vTsoHrs,
            vTsnCyc: myData.vTsnCyc,
            vTsnHrs: myData.vTsnHrs,
            vIntDays: myData.vIntDays,
            vInstalldt: new Date(myData.vInstalldt),
            tplnr: myData.tplnr,
            vPosition: myData.vPosition,
            vDesc: myData.vDesc,
            vSn: myData.vSn,
            vPn: myData.vPn,
            vEqunr: myData.vEqunr,
            vTask: myData.vTask,
            vDocVer: myData.vDocVer,
            vDocPart: myData.vDocPart,
            vDocNo: myData.vDocNo,
            vDocType: myData.vDocType,
            vMpd: myData.vMpd,
            vAta: myData.vAta,
            zstatus: myData.zstatus,
            erdat: new Date(myData.erdat) || new Date(),
        });
        return res
                .status(200)
                .send({ 
                    message: 'Data saved succesfully', 
                    data: myData 
                });
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    async removeTC(@Param('id') id: number) {
        const tc = await this.tcService.findOne(+id);
        if(!tc) {
            throw new NotFoundException(
                'TIME CONTROLLED DATABASE NOT FOUND',
            );
        }
        return await this.tcService.remove(+id);
    }

    // @Roles(Role.ADMIN)
    // @Patch(':id')
    // async updateTC(
    //     @Param('id', ParseIntPipe) id: number,
    //     @Body() body: FileTCDTO,
    // ) {
    //     const tc = await this.tcService.get(+id);
    //     if(!tc) {
    //         throw new NotFoundException(
    //             'TIME CONTROLLED DATABASE NOT FOUND',
    //         );
    //     }
    //     return await this.tcService.update(+id, body);
    // }

    // @Roles(Role.ADMIN)
    // @Patch('update/tc-registration')
    // async assignTCRegis(@Body() body: { id: number, tplnr: string }) {
    //     return await this.tcService.assignTCRegis(body.id, body.tplnr);
    // }

  
}
