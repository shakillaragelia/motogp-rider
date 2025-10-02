import { Controller, Get, Post, Body } from '@nestjs/common';
import { RiderService } from './rider.service';
import { Rider } from './rider.entity';

@Controller('riders')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @Get()
  findAll(): Promise<Rider[]> {
    return this.riderService.findAll();
  }

  @Post()
  create(@Body() riderData: Partial<Rider>): Promise<Rider> {
    return this.riderService.create(riderData);
  }
}
