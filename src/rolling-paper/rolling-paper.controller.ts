import { Controller, Post, Headers, Body } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { WriteRollingPaperDTO } from "src/DTO/rolling-paper";
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
}
