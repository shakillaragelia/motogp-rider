import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rider } from './rider.entity';

@Injectable()
export class RiderService {
  constructor(
    @InjectRepository(Rider)
    private riderRepository: Repository<Rider>,
  ) {}

  findAll(): Promise<Rider[]> {
    return this.riderRepository.find({
      relations: ['team', 'raceClass'],
    });
  }

  create(riderData: Partial<Rider>): Promise<Rider> {
    const rider = this.riderRepository.create(riderData);
    return this.riderRepository.save(rider);
  }

  findOne(id: number) {
    return this.riderRepository.findOne({
      where: { id },
      relations: ['team', 'raceClass'],
    });
  }

  update(id: number, riderData: Partial<Rider>) {
    return this.riderRepository.update(id, riderData);
  }

  remove(id: number) {
    return this.riderRepository.delete(id);
  }
}
