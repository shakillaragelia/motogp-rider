import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RaceSchedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  grandPrix: string;

  @Column()
  country: string;

  @Column()
  date: string;

  @Column({ nullable: true })
  circuitImage: string;

  @Column({ type: 'text', nullable: true })
  description: string;
}
