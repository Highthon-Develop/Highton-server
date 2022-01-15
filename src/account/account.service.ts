import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { BaseUserDTO, RegistDTO } from "./account.DTO";
import { UserRepository } from "../repository/user";
import { SchoolRepository } from "../repository/school";
import { generateAccessToken, hashPassword } from "../util/crypto";
import { parseSchoolInform } from "../util/school";

@Injectable()
export class AccountService {
  constructor(
    private userRepo: UserRepository,
    private schoolRepo: SchoolRepository
  ) {}
  async regist(data: RegistDTO) {
    const { ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE } = data;
    if (!ATPT_OFCDC_SC_CODE || !SD_SCHUL_CODE) {
      throw new BadRequestException("학교 관련값이 부족합니다");
    }

    let schoolIdx = await this.schoolRepo.findIdBySchoolInform({
      ATPT_OFCDC_SC_CODE,
      SD_SCHUL_CODE,
    });

    if (!schoolIdx) {
      const schoolData = (
        await parseSchoolInform({ ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE })
      ).data.schoolInfo[1].row[0];
      const data = await this.schoolRepo.insertSchool(schoolData.SCHUL_NM, {
        ATPT_OFCDC_SC_CODE,
        SD_SCHUL_CODE,
      });

      schoolIdx = data[0];
    }

    try {
      const result = await this.userRepo.regist({
        birthDay: data.birthDay,
        birthMonth: data.birthMonth,
        birthYear: data.birthYear,
        email: data.email,
        name: data.name,
        schoolIdx,
        password: hashPassword(data.password),
        grade: data.grade,
        sex: data.sex,
        nickname: data.nickname,
      });
      return { success: true, userIdx: result.generatedMaps[0].id };
    } catch (e: any) {
      throw new BadRequestException({
        message:
          "왜 에러가 날까, 대부분은 인자값 덜 넣어서 에러가 일어납니다.\n또는 같은 이메일은 중복이라 걸러질지도",
        success: false,
      });
    }
  }

  async login(data: BaseUserDTO) {
    if (!data.email || !data.password) {
      throw new BadRequestException({
        message:
          "왜 에러가 날까, 대부분은 인자값 덜 넣어서 에러가 일어납니다.\n또는 같은 이메일은 중복이라 걸러질지도",
        success: false,
      });
    }
    const result = await this.userRepo.findByEmailAndPassword({
      email: data.email,
      password: hashPassword(data.password),
    });
    const token = generateAccessToken(result.id);
    return { token, success: true };
  }
}
