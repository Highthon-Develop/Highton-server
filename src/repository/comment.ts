import { EntityRepository, Repository } from "typeorm";
import { Comment } from "../entity";

@EntityRepository(Comment)
export class CommentRepository extends Repository<Comment> {}
