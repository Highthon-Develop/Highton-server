import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Diary } from "./diary";
import { User } from "./user";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column({ type: "tinyint" })
  isRecordComment: boolean;

  @ManyToOne("User")
  user: User;

  @ManyToOne("Diary")
  diary: Diary;
}
