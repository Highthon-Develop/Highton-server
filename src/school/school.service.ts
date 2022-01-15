import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/repository";

@Injectable()
export class SchoolService {
  constructor(private userRepo: UserRepository) {}

  async getBirthDayListBySchoolIdx(schoolIdx: number) {
    const result = await this.userRepo.find({
      select: ["birthDay", "name"],
      where: { school: { idx: schoolIdx } },
    });

    return { success: true, content: result };
  }
}
