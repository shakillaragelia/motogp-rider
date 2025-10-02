import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Team } from 'src/team/team.entity';
import { RaceClass } from 'src/race-class/race-class.entity';

@Entity()
export class Rider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Team, (team) => team.riders)
  team: Team;

  @ManyToOne(() => RaceClass, (raceClass) => raceClass.riders)
  raceClass: RaceClass;
}
