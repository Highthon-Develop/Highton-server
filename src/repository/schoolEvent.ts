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
}
