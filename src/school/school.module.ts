import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RepositoryList } from "../repository";
import { SchoolController } from "./school.controller";
import { SchoolService } from "./school.service";

@Module({
  imports: [TypeOrmModule.forFeature(RepositoryList)],
  controllers: [SchoolController],
  providers: [SchoolService],
})
export class SchoolModule {}
