import { SchoolEventArgDTO } from "../DTO/schoolEvent";
import { EntityRepository, Repository } from "typeorm";
import { SchoolEvent } from "../entity";

@EntityRepository(SchoolEvent)
export class SchoolEventRepository extends Repository<SchoolEvent> {
  async insertSchoolEvent(data: Omit<SchoolEventArgDTO, "imgUrl">) {
    return this.insert({
      school: { idx: data.schoolIdx },
      title: data.title,
      description: data.description,
    });
  }

  async joinSchoolEvent(page: number, criteria: "popular" | "recently") {
    return this.find({
      take: 20,
      skip: (page - 1) * 20,
      order: criteria === "popular" ? { emojis: "ASC" } : { createdAt: "DESC" },
    });
  }
}
