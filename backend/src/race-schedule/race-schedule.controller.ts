import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { RaceScheduleService } from './race-schedule.service';
import { RaceSchedule } from './race-schedule.entity';

@Controller('race-schedules')
export class RaceScheduleController {
  constructor(private readonly raceScheduleService: RaceScheduleService) {}

  @Get()
  findAll(): Promise<RaceSchedule[]> {
    return this.raceScheduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.raceScheduleService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<RaceSchedule>) {
    return this.raceScheduleService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<RaceSchedule>) {
    return this.raceScheduleService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.raceScheduleService.remove(id);
  }
}
