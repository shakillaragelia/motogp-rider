import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { RaceClass } from '../race-class/race-class.entity';
import { Rider } from '../rider/rider.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => RaceClass, (raceClass) => raceClass.teams)
  raceClass: RaceClass;

  @OneToMany(() => Rider, (rider) => rider.team)
  riders: Rider[];
}
