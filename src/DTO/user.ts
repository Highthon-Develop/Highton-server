import { ApiProperty } from "@nestjs/swagger";
import { School, User } from "../entity";
import { BaseResponseDTO } from "./http";

export class TargetUserIdxObject {
  @ApiProperty({ description: "타겟 유저의 idx 값" })
  targetUserIdx: number;
}

export class GetFolloUser extends BaseResponseDTO {
  @ApiProperty({ description: "검색 결과" })
  content: UserDTO[];
}

export class ProfileResponseDTO extends BaseResponseDTO {
  content: UserDTO;
}
export class UserDTO {
  @ApiProperty({ description: "인덱스" })
  id: number;

  @ApiProperty({ description: "이름" })
  name: string;

  @ApiProperty({ description: "학년" })
  grade: number;

  @ApiProperty({ description: "성별" })
  sex: "Male" | "Female" | "Secret";

  @ApiProperty({ description: "닉네임" })
  nickname: string;

  @ApiProperty({ description: "생일" })
  brithday: Date;

  @ApiProperty({ description: "이메일" })
  email: string;

  @ApiProperty({ description: "생성일자" })
  createdAt: Date;

  @ApiProperty({ description: "스쿨" })
  school: School;
}
