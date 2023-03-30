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
import { OperatorsService } from './operators.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.enum';
import { FileOperatorDto } from './operators.dto';

// @UseGuards(JwtAuthGuard, RolesGuard)
@Controller('operators')
export class OperatorsController {
    constructor(private operatorService: OperatorsService) {}

    @Roles(Role.ADMIN, Role.USER)
    @Get()
    getAllOperator() {
        return this.operatorService.all();
    }

    @Roles(Role.ADMIN, Role.USER)
    @Get(':id')
    async getOperators(@Param('id', ParseIntPipe) id: number) {
        const operator = await this.operatorService.get(+id);
        if(!operator) {
            throw new NotFoundException(
                'OPERATOR RECORD NOT FOUND',
            );
        }
        return this.operatorService.get(+id);
    }

    @Roles(Role.ADMIN)
    @Post()
    async addOperators(
        @Body() body: FileOperatorDto,
    ) {
        return await this.operatorService.create(body);
    }


    @Roles(Role.ADMIN)
    @Delete(':id')
    async removeOperators(@Param('id', ParseIntPipe) id: number) {
        const operator = await this.operatorService.get(+id);
        if(!operator) {
            throw new NotFoundException(
                'OPERATOR RECORD NOT FOUND',
            );
        }
        return await this.operatorService.remove(+id);
    }

    @Roles(Role.ADMIN)
    @Patch(':id')
    async updateOperators(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: FileOperatorDto,
    ) {
        const operator = await this.operatorService.get(+id);
        if(!operator) {
            throw new NotFoundException(
                'OPERATOR RECORD NOT FOUND',
            );
        }
        return await this.operatorService.update(+id, body);
    }
}
