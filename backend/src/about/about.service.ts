import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { About } from './about.entity';

@Injectable()
export class AboutService {
  constructor(
    @InjectRepository(About)
    private aboutRepository: Repository<About>,
  ) {}

  findAll() {
    return this.aboutRepository.find();
  }

  findOne(id: number) {
    return this.aboutRepository.findOne({ where: { id } });
  }

  create(data: Partial<About>) {
    const about = this.aboutRepository.create(data);
    return this.aboutRepository.save(about);
  }

  update(id: number, data: Partial<About>) {
    return this.aboutRepository.update(id, data);
  }

  remove(id: number) {
    return this.aboutRepository.delete(id);
  }
}
