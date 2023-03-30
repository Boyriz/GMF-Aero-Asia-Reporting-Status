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
    UploadedFile,
    UseInterceptors,
    Res
  } from '@nestjs/common';
import { NontcService } from './nontc.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.enum';
import { FileNONTCDTO } from './non-tc.dto';
import * as fs from 'fs';
import { Response } from 'express';
import { NonTc, Tc } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';
import { Tplnr } from 'src/tc/tc.dto';

@Controller('nontc')
export class NontcController {
  constructor(private nontcService: NontcService) {}

  @Roles(Role.ADMIN, Role.USER)
  @Get()
  getAllNonTC(@Res() res: Response) {
    const jsonString = fs.readFileSync('DATA_NONTC.json', 'utf-8');
    const nontimecontrolled:  FileNONTCDTO[] = JSON.parse(jsonString);

    console.log(nontimecontrolled);

    nontimecontrolled.forEach(value => {
      nontimecontrolled.values()
    });

    return res.status(200).send(nontimecontrolled);
    // return this.nontcService.findAll();
  }

  @Roles(Role.ADMIN, Role.USER)
  @Get(':id')
  async getNonTC(@Param('id', ParseIntPipe) id: number) {
    const nontc = await this.nontcService.findOne(+id);
    if(!nontc) {
      throw new NotFoundException(
        'NON TIME CONTROLLED DATABASE NOT FOUND',
      );
    }
    return this.nontcService.findOne(+id);
  }

  // @Roles(Role.ADMIN)
  //   @Post('migrate')
  //   @UseInterceptors(FileInterceptor('file'))
  //   async migrateJsonToPostgresNONTC(@UploadedFile() file: Express.Multer.File): Promise<void> {
  //       await this.nontcService.migrateJsonToPostgresNONTC(file.path);
  // }

  @Roles(Role.ADMIN)
  @Post()
  async saveToDatabase(@Res() res: Response, @Body() myData: FileNONTCDTO) {
    await this.nontcService.saveToDatabase({
      mandt: Number(myData.mandt) || -1,
      vEqunr: Number(myData.vEqunr) || -1,
      vTsnBld: myData.vTsnBld,
      vTsiCyc: myData.vTsiCyc,
      vTsiHrs: myData.vTsiHrs,
      vTsnCyc: myData.vTsnCyc,
      vTsnHrs: myData.vTsnHrs,
      vInstalldt: new Date(myData.vInstalldt) || new Date(),
      tplnr: myData.tplnr,
      vPosition: myData.vPosition,
      vDesc: myData.vDesc,
      vSn: myData.vSn,
      vPn: myData.vPn,
      zstatus: myData.zstatus,
      erdat: new Date(myData.erdat) || new Date(),
    });
    return res
            .status(200)
            .send({
              message: 'Data saved succesfully', 
              data: myData
            })
  }

  // @Roles(Role.ADMIN)
  //   @Post()
  //   async create(@Body() data: FileNONTCDTO): Promise<NonTc> {
  //       return await this.nontcService.saveData(data);
  //   }
  // @Roles(Role.ADMIN)
  // @Post()
  // async addNonTC(
  //   @Body() body: FileNONTCDTO,
  // ) {
  //   return await this.nontcService.create(body);
  // }

  @Roles(Role.ADMIN)
  @Delete(':id')
  async removeNonTC(@Param('id') id: number) {
    const nontc = await this.nontcService.findOne(+id);
    if(!nontc) {
      throw new NotFoundException(
        'NON TIME CONTROLLED DATABASE NOT FOUND',
      );
    }
    return await this.nontcService.remove(+id);
  }

  // @Roles(Role.ADMIN)
  // @Patch(':id')
  // async updateNonTC(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() body: FileNONTCDTO,
  // ) {
  //   const nontc = await this.nontcService.get(+id);
  //   if(!nontc) {
  //         throw new NotFoundException(
  //           'NON TIME CONTROLLED DATABASE NOT FOUND'
  //         );
  //   }
  //   return await this.nontcService.update(+id, body);
  // }

//   @Roles(Role.ADMIN)
//   @Patch('update/non-tc-registration')
//   async assignNONTCRegis(@Body() body: { id: number, tplnr: string }) {
//     return await this.nontcService.assignNONTCRegis(body.id, body.tplnr);
//   }
}
