import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Emoji {
  @PrimaryGeneratedColumn()
  id: number;
}
