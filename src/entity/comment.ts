import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { SchoolEvent, Diary, User } from ".";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  isRecordComment: boolean;

  @ManyToOne("User")
  user: User;

  @ManyToOne("Diary")
  diary: Diary;

  @ManyToOne("SchoolEvent")
  schoolEvent: SchoolEvent;
}
