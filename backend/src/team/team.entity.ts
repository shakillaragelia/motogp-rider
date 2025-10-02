import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Rider } from 'src/rider/rider.entity';
import { RaceClass } from 'src/race-class/race-class.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Rider, (rider) => rider.team)
  riders: Rider[];

  @ManyToOne(() => RaceClass, (raceClass) => raceClass.teams)
  raceClass: RaceClass;
}
