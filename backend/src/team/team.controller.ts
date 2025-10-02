import { Controller, Get, Post, Body } from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from './team.entity';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  findAll(): Promise<Team[]> {
    return this.teamService.findAll();
  }

  @Post()
  create(@Body() teamData: Partial<Team>): Promise<Team> {
    return this.teamService.create(teamData);
  }
}
