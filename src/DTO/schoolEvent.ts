import { ApiProperty } from "@nestjs/swagger";
import { SchoolEvent } from "../entity";
import { BaseUserDTO } from "./account";

export class SchoolEventArgDTO {
  @ApiProperty({ description: "타이틀" })
  title: string;

  @ApiProperty({ description: "설명" })
  description: string;

  @ApiProperty({ description: "스쿨 idx" })
  schoolIdx: number;

  @ApiProperty({ description: "이미지 링크 리스트" })
  imgUrlList: string[];
}

export class JoinSchoolEvent extends BaseUserDTO {
  @ApiProperty({ description: "피드 리스트" })
  content: SchoolEvent[];
}
