import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { AboutService } from './about.service';
import { About } from './about.entity';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get()
  findAll(): Promise<About[]> {
    return this.aboutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.aboutService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<About>) {
    return this.aboutService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<About>) {
    return this.aboutService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.aboutService.remove(id);
  }
}
