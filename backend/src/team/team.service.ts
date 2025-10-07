import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  findAll() {
    return this.teamRepository.find({ relations: ['riders', 'raceClass'] });
  }

  findOne(id: number) {
    return this.teamRepository.findOne({
      where: { id },
      relations: ['riders', 'raceClass'],
    });
  }

  create(data: Partial<Team>) {
    const team = this.teamRepository.create(data);
    return this.teamRepository.save(team);
  }

  update(id: number, data: Partial<Team>) {
    return this.teamRepository.update(id, data);
  }

  remove(id: number) {
    return this.teamRepository.delete(id);
  }
}
