import { School } from "../entity";
import { EntityRepository, Repository } from "typeorm";

export interface SchoolInform {
  ATPT_OFCDC_SC_CODE: string;
  SD_SCHUL_CODE: string;
}
@EntityRepository(School)
export class SchoolRepository extends Repository<School> {
  async findIdBySchoolInform(information: SchoolInform) {
    return (await this.find({ where: information }))[0]?.idx;
  }

  async insertSchool(schoolName: string, schoolInform: SchoolInform) {
    return this.insert({
      name: schoolName,
      ATPT_OFCDC_SC_CODE: schoolInform.ATPT_OFCDC_SC_CODE,
      SD_SCHUL_CODE: schoolInform.SD_SCHUL_CODE,
    });
  }
}
