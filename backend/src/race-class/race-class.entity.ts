import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Team } from 'src/team/team.entity';
import { Rider } from 'src/rider/rider.entity';

@Entity()
export class RaceClass {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // Contoh: "MotoGP", "Moto2", "Moto3", "MotoE"

  @Column({ type: 'text', nullable: true })
  description: string;

  // relasi ke Team (satu kelas punya banyak tim)
  @OneToMany(() => Team, (team) => team.raceClass)
  teams: Team[];

  // relasi ke Rider (satu kelas bisa punya banyak rider juga)
  @OneToMany(() => Rider, (rider) => rider.raceClass)
  riders: Rider[];
}
