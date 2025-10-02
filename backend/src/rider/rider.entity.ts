import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Team } from 'src/team/team.entity';

@Entity()
export class Rider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  nationality: string;

  @Column()
  bike: string;

  @Column()
  raceClass: string; // MotoGP, Moto2, Moto3

  // Relasi ke Team
  @ManyToOne(() => Team, (team) => team.riders)
  team: Team;
}
