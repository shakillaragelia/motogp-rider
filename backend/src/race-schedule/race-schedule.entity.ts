import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RaceSchedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  grandPrix: string; // contoh: "Qatar Grand Prix"

  @Column()
  country: string; // contoh: "Qatar"

  @Column({ type: 'date' })
  date: string; // tanggal balapan

  @Column({ nullable: true })
  circuitImage: string; // gambar sirkuit

  @Column({ type: 'text', nullable: true })
  description: string; // deskripsi singkat
}
