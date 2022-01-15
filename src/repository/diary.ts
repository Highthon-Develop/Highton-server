import { EntityRepository, Repository } from "typeorm";
import { Diary } from "../entity";

@EntityRepository(Diary)
export class DiaryRepository extends Repository<Diary> {
  async writeDiary(userIdx: number, content: string) {
    return this.insert({ user: { id: userIdx }, content });
  }

  async findDiaryByUserIdx(userIdx: number): Promise<Diary[]> {
    return this.createQueryBuilder("diary")
      .leftJoinAndSelect("diary.comments", "comment")
      .leftJoinAndSelect("diary.emojies", "emoji")
      .where("userId = :userIdx", { userIdx })
      .getMany();
  }
}
