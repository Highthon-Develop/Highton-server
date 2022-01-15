import { ApiProperty } from "@nestjs/swagger";

export class BadRequestResponseDTO {
  @ApiProperty({ description: "메세지" })
  message: string;

  @ApiProperty({ description: "성공 여부" })
  success: boolean;
}
export class BaseResponseDTO {
  @ApiProperty({ description: "성공 여부" })
  success: boolean;
}
