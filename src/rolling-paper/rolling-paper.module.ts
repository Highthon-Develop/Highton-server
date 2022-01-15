import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RepositoryList } from "../repository";
import { RollingPaperController } from "./rolling-paper.controller";
import { RollingPaperService } from "./rolling-paper.service";

@Module({
  imports: [TypeOrmModule.forFeature(RepositoryList)],
  controllers: [RollingPaperController],
  providers: [RollingPaperService],
})
export class RollingPaperModule {}
