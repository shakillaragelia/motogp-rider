import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { RaceService } from './race-class.service';
import { RaceClass } from './race-class.entity';

@Controller('race-classes')
export class RaceController {
  constructor(private readonly raceClassService: RaceService) {}

  @Get()
  findAll(): Promise<RaceClass[]> {
    return this.raceClassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.raceClassService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<RaceClass>) {
    return this.raceClassService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<RaceClass>) {
    return this.raceClassService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.raceClassService.remove(id);
  }
}
