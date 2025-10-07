import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RaceClass } from './race-class.entity';

@Injectable()
export class RaceService {
  constructor(
    @InjectRepository(RaceClass)
    private raceClassRepository: Repository<RaceClass>,
  ) {}

  findAll() {
    return this.raceClassRepository.find({ relations: ['teams'] });
  }

  findOne(id: number) {
    return this.raceClassRepository.findOne({
      where: { id },
      relations: ['teams'],
    });
  }

  create(data: Partial<RaceClass>) {
    const raceClass = this.raceClassRepository.create(data);
    return this.raceClassRepository.save(raceClass);
  }

  update(id: number, data: Partial<RaceClass>) {
    return this.raceClassRepository.update(id, data);
  }

  remove(id: number) {
    return this.raceClassRepository.delete(id);
  }
}
