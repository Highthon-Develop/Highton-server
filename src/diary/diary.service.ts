import { BadRequestException, Injectable } from "@nestjs/common";
import { getUserIdxByAccessToken } from "../util/crypto";
import { DiaryRepository } from "../repository";

@Injectable()
export class DiaryService {
  constructor(private diaryRepo: DiaryRepository) {}

  async writeDiary(accessToken: string, content: string) {
    try {
      const userIdx = getUserIdxByAccessToken(accessToken);

      const result = await this.diaryRepo.writeDiary(userIdx, content);
      const writedDiaryIdx: number = result.generatedMaps[0].id;

      return { success: true, id: writedDiaryIdx };
    } catch {
      throw new BadRequestException({
        message: "토큰이 유효하지않습니다",
        success: false,
      });
    }
  }
}
