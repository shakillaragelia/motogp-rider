import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Rider } from 'src/rider/rider.entity';
import { Team } from 'src/team/team.entity';

@Entity()
export class RaceClass {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // contoh: MotoGP, Moto2, Moto3

  @OneToMany(() => Rider, (rider) => rider.raceClass)
  riders: Rider[];

  @OneToMany(() => Team, (team) => team.raceClass)
  teams: Team[];
}
