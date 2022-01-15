import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserRepository } from "../repository/user";
import { AccountController } from "./account.controller";
import { AccountService } from "./account.service";
import { SchoolRepository } from "../repository/school";
import { Diary, Emoji, Comment } from "../entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserRepository,
      SchoolRepository,
      Diary,
      Emoji,
      Comment,
    ]),
  ],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
