import {
  Controller,
  Post,
  Headers,
  Body,
  Get,
  Header,
  Param,
} from "@nestjs/common";
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import { BadRequestResponseDTO } from "../DTO/http";
import {
  WriteRollingPaperDTO,
  JoinRollingPaperResponseDTO,
} from "../DTO/rolling-paper";
import { RollingPaperService } from "./rolling-paper.service";

@Controller("rolling-paper")
@ApiTags("롤링페이퍼 관련 API들")
export class RollingPaperController {
  constructor(private readonly rollingPaperService: RollingPaperService) {}

  @Post("")
  @ApiOperation({
    summary: "대충 롤링페이퍼 생성",
    description: "대충 롤링페이퍼를 해당 유저가 쓸 수 있또록 하는 것.",
  })
  @ApiOkResponse({ description: "성공 시" })
  @ApiBadRequestResponse({
    description: "요청이 잘못들어오면",
    type: BadRequestResponseDTO,
  })
  writeRollingPaper(
    @Headers("authorization") token: string,
    @Body() data: WriteRollingPaperDTO
  ) {
    return this.rollingPaperService.writeRollingPaper(
      data.content,
      data.userIdx,
      token
    );
  }

  @Get(":year")
  @ApiOperation({
    summary: "대충 롤링페이퍼 조회",
    description: "롤링페이퍼를 조회합니다. 이쁘고 귀엽고 깜찍하게.",
  })
  @ApiBadRequestResponse({
    description: "요청 좀 똑디 안보냉께 이게 뜨지",
    type: BadRequestResponseDTO,
  })
  @ApiOkResponse({ description: "성공 시", type: JoinRollingPaperResponseDTO })
  joinMyRollingPaper(
    @Headers("authorization") token: string,
    @Param("year") year: number
  ) {
    return this.rollingPaperService.getRollingPaperByYear(token, year);
  }
}
