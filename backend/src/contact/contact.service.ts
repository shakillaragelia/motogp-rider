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

  findAll(): Promise<Contact[]> {
    return this.contactRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  create(data: Partial<Contact>): Promise<Contact> {
    const contact = this.contactRepository.create(data);
    return this.contactRepository.save(contact);
  }

  remove(id: number) {
    return this.contactRepository.delete(id);
  }
}
