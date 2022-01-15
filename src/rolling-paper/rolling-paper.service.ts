import { BadRequestException, Injectable } from "@nestjs/common";
import { UserRepository } from "src/repository";
import { RollingPaperRepository } from "src/repository/rollingPaper";
import { getUserIdxByAccessToken } from "src/util/crypto";

@Injectable()
export class RollingPaperService {
  constructor(
    private rollingPaperRepo: RollingPaperRepository,
    private userRepo: UserRepository
  ) {}

  async writeRollingPaper(
    content: string,
    userIdx: number,
    accessToken: string
  ) {
    try {
      const writerIdx: number = getUserIdxByAccessToken(accessToken);
      const writerNickname: string = (await this.userRepo.findOne(writerIdx))
        .nickname;
      const result = await this.rollingPaperRepo.writeRollingPaper(
        content,
        writerNickname,
        userIdx
      );

      return { success: true, idx: result.generatedMaps[0].id };
    } catch (e: unknown) {
      throw new BadRequestException({
        message: "토큰이 잘못되었을지도",
        success: false,
      });
    }
  }
}
