import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Diary } from "./diary";
import { Emoji } from "./emoji";
import { School } from "./school";
import { Comment } from "./comment";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  grade: number;

  @Column()
  sex: "Male" | "Female" | "Secret";

  @Column()
  nickname: string;
  s;

  @Column({ type: "date" })
  birthDay: Date;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany("Diary", "user")
  diaries: Diary[];

  @OneToMany("Emoji", "user")
  emojies: Emoji[];

  @OneToMany("Comment", "user")
  comments: Comment[];

  @ManyToOne("School")
  school: School;
}
