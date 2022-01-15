import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class School {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  domain: string;
}
