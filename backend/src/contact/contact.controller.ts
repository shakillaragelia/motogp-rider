import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './contact.entity';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  findAll(): Promise<Contact[]> {
    return this.contactService.findAll();
  }

  @Post()
  create(@Body() data: Partial<Contact>): Promise<Contact> {
    return this.contactService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.contactService.remove(id);
  }
}
