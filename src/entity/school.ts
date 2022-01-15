import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { SchoolEvent } from ".";

@Entity()
export class School {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  name: string;

  // @Column({ unique: true })
  // domain: string;

  @Column()
  ATPT_OFCDC_SC_CODE: string;

  @Column()
  SD_SCHUL_CODE: string;

  @OneToMany("SchoolEvent", "school")
  schoolEvents: SchoolEvent[];
}
