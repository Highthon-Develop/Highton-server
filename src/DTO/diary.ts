import { ApiProperty } from "@nestjs/swagger";

export class WriteDiaryResponseDTO {
  @ApiProperty({ description: "성공 여부" })
  success: boolean;

  @ApiProperty({ description: "유저 인덱스" })
  userIdx: number;
}

export class WriteDiaryRequestDTO {
  @ApiProperty({ description: "일기 내역" })
  content: string;
}
