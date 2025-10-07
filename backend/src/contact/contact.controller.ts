import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './contact.entity';

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  findAll(): Promise<Contact[]> {
    return this.contactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.contactService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Contact>) {
    return this.contactService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.contactService.remove(id);
  }
}
