import { Controller, Delete, Patch, Headers, Body } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { TargetUserIdxObject } from "../DTO/user";
import { UserService } from "./user.service";

@Controller("user")
@ApiTags("유저 관련된것들, ex : 팔로우")
export class UserController {
  constructor(private userService: UserService) {}

  @Patch("")
  @ApiOperation({
    summary: "유저 팔로우",
    description: "유저 팔로우하기, 토큰 필수",
  })
  followUser(
    @Headers("authorization") token: string,
    @Body() data: TargetUserIdxObject
  ) {
    return this.userService.followUser(token, data.targetUserIdx);
  }

  @Delete("")
  @ApiOperation({
    summary: "유저 언팔로우",
    description: "유저 언팔로우하기, 토큰 필수",
  })
  unfollowUser(
    @Headers("authorization") token: string,
    @Body() data: TargetUserIdxObject
  ) {
    return this.userService.unfollowUser(token, data.targetUserIdx);
  }
}
