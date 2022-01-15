import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from ".";

@Entity()
export class RollingPaper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  year: number;

  @Column()
  content: string;

  @Column()
  writer: string;

  @ManyToOne("User")
  owner: User;
}
