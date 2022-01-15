import { EntityRepository, Repository } from "typeorm";
import { Comment } from "../entity";

@EntityRepository(Comment)
export class CommentRepository extends Repository<Comment> {
  async postComment(content: string, userIdx: number, schoolEventIdx: number) {
    return this.insert({
      content,
      isRecordComment: true,
      schoolEvent: { idx: schoolEventIdx },
      user: { id: userIdx },
    });
  }
}
