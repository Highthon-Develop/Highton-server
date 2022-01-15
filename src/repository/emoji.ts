import { EntityRepository, Repository } from "typeorm";
import { Emoji } from "../entity";

@EntityRepository(Emoji)
export class EmojiRepository extends Repository<Emoji> {}
