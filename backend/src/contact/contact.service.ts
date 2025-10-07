import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  findAll() {
    return this.contactRepository.find();
  }

  findOne(id: number) {
    return this.contactRepository.findOne({ where: { id } });
  }

  create(data: Partial<Contact>) {
    const contact = this.contactRepository.create(data);
    return this.contactRepository.save(contact);
  }

  remove(id: number) {
    return this.contactRepository.delete(id);
  }
}
