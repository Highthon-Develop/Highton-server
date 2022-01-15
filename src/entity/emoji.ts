import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Diary } from "./diary";
import { User } from "./user";

@Entity()
export class Emoji {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne("User")
  user: User;

  @ManyToOne("Diary")
  diary: Diary;
}
