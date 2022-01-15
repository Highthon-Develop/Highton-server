import { EntityRepository, Repository } from "typeorm";
import { RollingPaper } from "../entity";

@EntityRepository(RollingPaper)
export class RollingPaperRepository extends Repository<RollingPaper> {
  writeRollingPaper(
    content: string,
    writerNickname: string,
    targetUserIdx: number
  ) {
    return this.insert({
      owner: { id: targetUserIdx },
      writer: writerNickname,
      content,
      year: new Date().getFullYear(),
    });
  }

  getRollingPaperByYear(
    userIdx: number,
    year: number
  ): Promise<RollingPaper[]> {
    return this.find({ where: { owner: { id: userIdx }, year } });
  }
}
