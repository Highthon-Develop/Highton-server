import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Emoji, School, Comment } from ".";

@Entity()
export class SchoolEvent {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany("EventImage", "schoolEvent")
  eventImages: EventImage[];

  @OneToMany("Emoji", "schoolEvent")
  emojis: Emoji[];

  @OneToMany("Comment", "schoolEvent")
  comments: Comment[];

  @ManyToOne("School")
  school: School;
}

@Entity()
export class EventImage {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  imgUrl: string;

  @ManyToOne("SchoolEvent")
  schoolEvent: SchoolEvent;
}
