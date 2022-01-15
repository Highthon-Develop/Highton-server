import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SchoolEvent } from ".";
import { Diary } from "./diary";
import { User } from "./user";

@Entity()
export class Emoji {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kind: string;

  @ManyToOne("User")
  user: User;

  @ManyToOne("Diary")
  diary: Diary;

  @ManyToOne("SchoolEvent")
  schoolEvent: SchoolEvent;
}
