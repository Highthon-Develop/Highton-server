import {
  Controller,
  Delete,
  Patch,
  Headers,
  Body,
  Get,
  Param,
} from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import {
  BaseResponseDTO,
  GetFolloUser,
  TargetUserIdxObject,
} from "../DTO/user";
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
  @ApiOkResponse({ description: "성공 시 ", type: BaseResponseDTO })
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
  @ApiOkResponse({ description: "성공 시 ", type: BaseResponseDTO })
  unfollowUser(
    @Headers("authorization") token: string,
    @Body() data: TargetUserIdxObject
  ) {
    return this.userService.unfollowUser(token, data.targetUserIdx);
  }

  @Get(":id/follower")
  @ApiOperation({
    summary: "유저 팔로워 조회",
    description: "유저 팔로워들 조회하기",
  })
  @ApiOkResponse({ description: "성공 시 ", type: GetFolloUser })
  getFollower(@Param("id") id: number) {
    return this.userService.getFollower(id);
  }

  @Get(":id/following")
  @ApiOperation({
    summary: "유저 팔로윙 조회",
    description: "유저 팔로윙 조회하기",
  })
  @ApiOkResponse({ description: "성공 시 ", type: GetFolloUser })
  getFollwing(@Param("id") id: number) {
    return this.userService.getFollowing(id);
  }

  @Get("")
  @ApiOperation({
    summary: "추천 유저 리스트 조회",
    description: "유저 추천 리스트 조회해버리기",
  })
  @ApiOkResponse({ description: "성공 시 ", type: GetFolloUser })
  getRecommendationUserList() {
    return this.userService.getRecommendationUser();
  }
}
