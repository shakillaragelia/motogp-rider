import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RaceSchedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  circuit: string;

  @Column()
  country: string;

  @Column({ type: 'date' })
  date: string;

  @Column({ nullable: true })
  image: string;
}
