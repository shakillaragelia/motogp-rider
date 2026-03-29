import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RiderService } from './rider.service';
import { Rider } from './rider.entity';

@Controller('riders')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @Get()
  findAll(): Promise<Rider[]> {
    return this.riderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.riderService.findOne(id);
  }

  @Post()
  create(@Body() riderData: Partial<Rider>): Promise<Rider> {
    return this.riderService.create(riderData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() riderData: Partial<Rider>) {
    return this.riderService.update(id, riderData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.riderService.remove(id);
  }
}
