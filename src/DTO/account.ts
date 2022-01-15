import { ApiProperty } from "@nestjs/swagger";

export class BaseUserDTO {
  @ApiProperty({ description: "이메일" })
  email: string;

  @ApiProperty({ description: "비밀번호" })
  password: string;
}

export class RegistDTO extends BaseUserDTO {
  @ApiProperty({ description: "이름" })
  name: string;

  @ApiProperty({ description: "태어난 연도" })
  birthYear: number;

  @ApiProperty({ description: "태어난 월" })
  birthMonth: number;

  @ApiProperty({ description: "태어난 일수" })
  birthDay: number;

  @ApiProperty({ description: "시도교육청 코드" })
  ATPT_OFCDC_SC_CODE: string;

  @ApiProperty({ description: "표준학교코드" })
  SD_SCHUL_CODE: string;

  @ApiProperty({ description: "학년" })
  grade: number;

  @ApiProperty({ description: "성별" })
  sex: "Male" | "Female" | "Secret";

  @ApiProperty({ description: "닉네임" })
  nickname: string;
}

export class LoginResponseDTO {
  @ApiProperty({ description: "액세스 토큰" })
  token: string;
}

export class RegistResponseDTO {
  @ApiProperty({ description: "성공 여부" })
  success: boolean;

  @ApiProperty({ description: "유저 인덱스" })
  userIdx: number;
}
