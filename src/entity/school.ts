import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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
}
