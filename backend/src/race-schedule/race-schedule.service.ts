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

  findAll() {
    return this.raceScheduleRepository.find();
  }

  findOne(id: number) {
    return this.raceScheduleRepository.findOne({ where: { id } });
  }

  create(data: Partial<RaceSchedule>) {
    const schedule = this.raceScheduleRepository.create(data);
    return this.raceScheduleRepository.save(schedule);
  }

  update(id: number, data: Partial<RaceSchedule>) {
    return this.raceScheduleRepository.update(id, data);
  }

  remove(id: number) {
    return this.raceScheduleRepository.delete(id);
  }
}
