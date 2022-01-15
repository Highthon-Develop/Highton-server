import { ApiProperty } from "@nestjs/swagger";
import { User } from "../entity";

export class TargetUserIdxObject {
  @ApiProperty({ description: "타겟 유저의 idx 값" })
  targetUserIdx: number;
}

export class BaseResponseDTO {
  @ApiProperty({ description: "성공 여부" })
  success: boolean;
}

export class GetFolloUser extends BaseResponseDTO {
  @ApiProperty({ description: "검색 결과" })
  content: User[];
}
