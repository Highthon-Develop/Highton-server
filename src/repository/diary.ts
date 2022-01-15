import { EntityRepository, Repository } from "typeorm";
import { Diary } from "../entity";

@EntityRepository(Diary)
export class DiaryRepository extends Repository<Diary> {}
