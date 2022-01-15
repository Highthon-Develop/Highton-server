import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RepositoryList } from "../repository";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [TypeOrmModule.forFeature(RepositoryList)],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
