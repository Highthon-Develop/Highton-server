import {
  Controller,
  Get,
  Param,
  Headers,
  Body,
  Post,
  Query,
} from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { BaseResponseDTO } from "src/DTO/http";
import { GetBirthdayResponse } from "../DTO/school";
import { JoinSchoolEvent, SchoolEventArgDTO } from "../DTO/schoolEvent";
import { SchoolService } from "./school.service";

@Controller("school")
@ApiTags("대충 학교 관련된것들")
export class SchoolController {
  constructor(private schoolService: SchoolService) {}

  @Get(":id/birthday")
  @ApiOperation({
    summary: "생일 리스트 받아오기",
    description: "인자값으로 준 학교에 해당하는 학생들의 생일들을 모아서 준다.",
  })
  @ApiOkResponse({ description: "성공 시", type: GetBirthdayResponse })
  getBirthDayListBySchool(@Param("id") schoolIdx: number) {
    return this.schoolService.getBirthDayListBySchoolIdx(schoolIdx);
  }

  @Post("event")
  @ApiOperation({ description: "피드 생성" })
  @ApiOkResponse({ description: "성공 시", type: BaseResponseDTO })
  createSchoolEvent(
    @Headers("authorization") token: string,
    @Body() data: SchoolEventArgDTO
  ) {
    return this.schoolService.createSchoolEvent(token, data);
  }

  @Get("event")
  @ApiOperation({ description: "피드 조회" })
  @ApiOkResponse({ description: "성공 시", type: JoinSchoolEvent })
  joinSchoolEvent(
    @Query("page") page: number,
    @Query("criteria") criteria: "popular" | "recently"
  ) {
    return this.schoolService.joinSchoolEvent(page, criteria);
  }
}
