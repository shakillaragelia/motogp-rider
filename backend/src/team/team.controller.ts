import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from './team.entity';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  findAll(): Promise<Team[]> {
    return this.teamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.teamService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Team>) {
    return this.teamService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Team>) {
    return this.teamService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.teamService.remove(id);
  }
}
