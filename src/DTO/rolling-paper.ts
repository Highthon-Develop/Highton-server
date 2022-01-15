import { ApiProperty } from "@nestjs/swagger";
import { RollingPaper } from "../entity";

export class WriteRollingPaperDTO {
  @ApiProperty({ description: "대충 롤링페이퍼 내용" })
  content: string;

  @ApiProperty({ description: "유저 인덱스" })
  userIdx: number;
}

export interface WriteRollingPaperResponseDTO {
  success: boolean;
  idx: number;
}

export class JoinRollingPaperResponseDTO {
  @ApiProperty({ description: "성공 여부" })
  success: boolean;

  @ApiProperty({ description: "롤링페이퍼 리스트" })
  content: RollingPaper[];
}
