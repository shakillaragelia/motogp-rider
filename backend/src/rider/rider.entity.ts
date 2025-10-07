import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Team } from 'src/team/team.entity';
import { RaceClass } from 'src/race-class/race-class.entity';

@Entity()
export class Rider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  number: number;

  @Column({ nullable: true })
  birthPlaceDate: string;

  @Column({ nullable: true })
  country: string;

  @Column({ type: 'text', nullable: true })
  bio: string;

  @Column({ nullable: true })
  image: string;

  // Relasi ke Team (banyak rider dalam satu tim)
  @ManyToOne(() => Team, (team) => team.riders)
  team: Team;

  // Relasi ke RaceClass (misal MotoGP, Moto2, dsb)
  @ManyToOne(() => RaceClass, (raceClass) => raceClass.riders)
  raceClass: RaceClass;
}
