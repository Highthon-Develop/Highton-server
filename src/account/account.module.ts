import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccountController } from "./account.controller";
import { AccountService } from "./account.service";
import { RepositoryList } from "../repository";

@Module({
  imports: [TypeOrmModule.forFeature(RepositoryList)],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
