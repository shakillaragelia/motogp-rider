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

  findAll(): Promise<About[]> {
    return this.aboutRepository.find();
  }

  create(data: Partial<About>): Promise<About> {
    const about = this.aboutRepository.create(data);
    return this.aboutRepository.save(about);
  }

  update(id: number, data: Partial<About>): Promise<any> {
    return this.aboutRepository.update(id, data);
  }

  remove(id: number): Promise<any> {
    return this.aboutRepository.delete(id);
  }
}
