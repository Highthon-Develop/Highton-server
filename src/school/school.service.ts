import { Injectable, UnauthorizedException } from "@nestjs/common";
import { EventImage } from "../entity";
import { getUserIdxByAccessToken } from "src/util/crypto";
import { Repository } from "typeorm";
import { SchoolEventArgDTO } from "../DTO/schoolEvent";
import { SchoolEventRepository, UserRepository } from "../repository";
import { InjectRepository } from "@nestjs/typeorm";
@Injectable()
export class SchoolService {
  constructor(
    private userRepo: UserRepository,
    private schoolEventRepo: SchoolEventRepository,
    @InjectRepository(EventImage)
    private eventImageRepository: Repository<EventImage>
  ) {}

  async getBirthDayListBySchoolIdx(schoolIdx: number) {
    const result = await this.userRepo.find({
      select: ["birthDay", "name"],
      where: { school: { idx: schoolIdx } },
    });

    return { success: true, content: result };
  }

  async createSchoolEvent(token: string, data: SchoolEventArgDTO) {
    const userIdx = getUserIdxByAccessToken(token);
    const schoolIdx = (
      await this.userRepo.findOne(userIdx, {
        join: { alias: "user", leftJoinAndSelect: { school: "user.school" } },
      })
    ).school.idx;

    if (data.schoolIdx !== schoolIdx) {
      throw new UnauthorizedException("어... 유저가 해당 학교 출신이 아닌 듯");
    }

    const result = await this.schoolEventRepo.insertSchoolEvent(data);
    const resultIdx = result.generatedMaps[0].id;
    if (!!data.imgUrlList) {
      const imgData = data.imgUrlList?.map((url) => ({
        imgUrl: url,
        schoolEvnet: { idx: resultIdx },
      }));

      await this.eventImageRepository.insert(imgData);
    }

    return { success: true };
  }
  async joinSchoolEvent() {}
}
