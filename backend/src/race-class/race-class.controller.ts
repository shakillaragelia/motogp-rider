import { Controller, Get, Post, Body } from '@nestjs/common';
import { RaceService } from './race-class.service';
import { RaceClass } from './race-class.entity';

@Controller('race-classes')
export class RaceController {
  constructor(private readonly raceService: RaceService) {}

  @Get()
  findAll(): Promise<RaceClass[]> {
    return this.raceService.findAll();
  }

  @Post()
  create(@Body() raceClassData: Partial<RaceClass>): Promise<RaceClass> {
    return this.raceService.create(raceClassData);
  }
}
