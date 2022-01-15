import { EntityRepository, Repository } from "typeorm";
import { Emoji } from "../entity";

@EntityRepository(Emoji)
export class EmojiRepository extends Repository<Emoji> {
  addEmoji(userIdx, schoolEventIdx, kind) {
    return this.insert({
      kind,
      user: { id: userIdx },
      schoolEvent: { idx: schoolEventIdx },
    });
  }
}
