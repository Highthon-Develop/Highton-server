import { ApiProperty } from "@nestjs/swagger";

export class GetBirthdayResponse {
  @ApiProperty({ description: "성공 여부" })
  success: boolean;

  @ApiProperty({ description: "생일 리스트, birthday는 yyyy-mm-dd로 나옴" })
  content: { name: string; birthDay: string };
}
