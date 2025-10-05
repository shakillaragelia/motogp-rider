import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RaceSchedule } from './race-schedule.entity';

@Injectable()
export class RaceScheduleService {
  constructor(
    @InjectRepository(RaceSchedule)
    private raceScheduleRepository: Repository<RaceSchedule>,
  ) {}

  findAll(): Promise<RaceSchedule[]> {
    return this.raceScheduleRepository.find();
  }

  create(data: Partial<RaceSchedule>): Promise<RaceSchedule> {
    const race = this.raceScheduleRepository.create(data);
    return this.raceScheduleRepository.save(race);
  }

  update(id: number, data: Partial<RaceSchedule>) {
    return this.raceScheduleRepository.update(id, data);
  }

  remove(id: number) {
    return this.raceScheduleRepository.delete(id);
  }
}
