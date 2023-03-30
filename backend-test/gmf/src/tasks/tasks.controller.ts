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
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.enum';
import { FileTaskDto } from './tasks.dto';

// @UseGuards(JwtAuthGuard, RolesGuard)
@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}

    @Roles(Role.ADMIN, Role.USER)
    @Get()
    getAllTask() {
        return this.taskService.findAll();
    }

    @Roles(Role.ADMIN, Role.USER)
    @Get(':id')
    async getTasks(@Param('id', ParseIntPipe) id: number) {
        const task = await this.taskService.findOne(+id);
        if(!task) {
            throw new NotFoundException(
                'TASKS NOT FOUND',
            );
        }
        return this.taskService.findOne(+id);
    }

    @Roles(Role.ADMIN)
    @Post()
    async addTasks(
        @Body() body: FileTaskDto,
    ) {
        return await this.taskService.create(body);
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    async removeTasks(@Param('id') id: number) {
        const task = await this.taskService.findOne(+id);
        if(!task) {
            throw new NotFoundException(
                'TASK RECORD NOT FOUND',
            );
        }
        return await this.taskService.remove(+id);
    }

    @Roles(Role.ADMIN)
    @Patch(':id')
    async updateTasks(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: FileTaskDto,
    ) {
        const task = await this.taskService.get(+id);
        if(!task) {
            throw new NotFoundException(
                'TASK RECORD NOT FOUND',
            );
        }
        return await this.taskService.update(+id, body);
    }    
}
