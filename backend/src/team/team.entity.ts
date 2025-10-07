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

  @Column()
  country: string;

  @Column()
  principal: string;

  // gambar motor, bukan logo
  @Column({ nullable: true })
  image: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  // hubungan ke kelas balap (MotoGP, Moto2, dll)
  @ManyToOne(() => RaceClass, (raceClass) => raceClass.teams, {
    onDelete: 'SET NULL',
  })
  raceClass: RaceClass;

  // satu tim punya banyak rider
  @OneToMany(() => Rider, (rider) => rider.team)
  riders: Rider[];
}
