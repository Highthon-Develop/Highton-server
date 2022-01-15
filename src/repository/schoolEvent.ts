import { EntityRepository, Repository } from "typeorm";
import { SchoolEvent } from "../entity";

@EntityRepository(SchoolEvent)
export class SchoolEventRepository extends Repository<SchoolEvent> {}
