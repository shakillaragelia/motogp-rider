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

  findAll(): Promise<RaceClass[]> {
    return this.raceClassRepository.find({
      relations: ['teams'], // ✅ perbaikan di sini
    });
  }

  create(raceClassData: Partial<RaceClass>): Promise<RaceClass> {
    const raceClass = this.raceClassRepository.create(raceClassData);
    return this.raceClassRepository.save(raceClass);
  }
}
