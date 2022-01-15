import { Body, Controller, Post, Headers } from "@nestjs/common";
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import { BadRequestResponseDTO } from "../DTO/http";
import { WriteDiaryRequestDTO, WriteDiaryResponseDTO } from "../DTO/diary";
import { DiaryService } from "./diary.service";

@Controller("diary")
@ApiTags("한줄일기 관련 API들")
export class DiaryController {
  constructor(private readonly diaryService: DiaryService) {}

  @Post("")
  @ApiOperation({
    summary: "한 줄 일기 쓰기",
    description: "일기를 씁니다. 헤더에 토큰 필수",
  })
  @ApiOkResponse({ description: "성공 시", type: WriteDiaryResponseDTO })
  @ApiBadRequestResponse({
    description: "값이 잘못됐을 때",
    type: BadRequestResponseDTO,
  })
  writeDiary(
    @Headers("authorization") token: string,
    @Body() data: WriteDiaryRequestDTO
  ) {
    return this.diaryService.writeDiary(token, data.content);
  }
}
