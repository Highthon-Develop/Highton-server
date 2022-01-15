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
      console.log(data.generatedMaps);

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
      });
      return result;
    } catch (e: any) {
      throw new InternalServerErrorException("왜 에러가 날까");
    }
  }

  async login(data: BaseUserDTO) {
    if (!data.email || !data.password) {
      throw new BadRequestException("아이이 또는 패스워드 값이 없네요");
    }
    const result = await this.userRepo.findByEmailAndPassword({
      email: data.email,
      password: hashPassword(data.password),
    });
    const token = generateAccessToken(result.id);
    return { token };
  }
}
