import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RepositoryList } from "../repository";
import { DiaryController } from "./diary.controller";
import { DiaryService } from "./diary.service";

@Module({
  imports: [TypeOrmModule.forFeature(RepositoryList)],
  controllers: [DiaryController],
  providers: [DiaryService],
})
export class DiaryModule {}
