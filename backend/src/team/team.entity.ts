import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Rider } from 'src/rider/rider.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country: string;

  // Relasi ke Rider
  @OneToMany(() => Rider, (rider) => rider.team)
  riders: Rider[];
}
