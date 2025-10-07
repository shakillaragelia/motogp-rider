import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // nama pengirim

  @Column()
  email: string; // email pengirim

  @Column({ type: 'text' })
  message: string; // isi pesan

  @CreateDateColumn()
  createdAt: Date; // waktu otomatis tersimpan
}
