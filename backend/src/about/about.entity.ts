import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class About {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string; // contoh: "Tentang MotoGP World Championship"

  @Column({ type: 'text' })
  content: string; // isi konten utama

  @Column({ nullable: true })
  image: string; // gambar pendukung (opsional)
}
