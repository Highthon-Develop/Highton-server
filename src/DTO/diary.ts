import { ApiProperty } from "@nestjs/swagger";
import { Diary } from "../entity";

export class WriteDiaryResponseDTO {
  @ApiProperty({ description: "성공 여부" })
  success: boolean;

  @ApiProperty({ description: "유저 인덱스" })
  userIdx: number;
}

export class JoinDiaryResponseDTO {
  @ApiProperty({ description: "성공 여부" })
  success: boolean;

  @ApiProperty({ description: "다이어리들" })
  content: Diary[];
}

export class WriteDiaryRequestDTO {
  @ApiProperty({ description: "일기 내역" })
  content: string;
}
