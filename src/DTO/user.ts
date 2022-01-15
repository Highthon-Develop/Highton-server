import { ApiProperty } from "@nestjs/swagger";
import { User } from "../entity";
import { BaseResponseDTO } from "./http";

export class TargetUserIdxObject {
  @ApiProperty({ description: "타겟 유저의 idx 값" })
  targetUserIdx: number;
}

export class GetFolloUser extends BaseResponseDTO {
  @ApiProperty({ description: "검색 결과" })
  content: User[];
}
