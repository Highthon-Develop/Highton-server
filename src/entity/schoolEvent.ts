import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SchoolEvent {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  title: string;

  @Column()
  description: string;
}
