import {
  Controller,
  Delete,
  Patch,
  Headers,
  Body,
  Get,
  Param,
  Post,
} from "@nestjs/common";
import {
  ApiOkResponse,
  ApiOperation,
  ApiProperty,
  ApiTags,
} from "@nestjs/swagger";
import {
  GetFolloUser,
  ProfileResponseDTO,
  TargetUserIdxObject,
} from "../DTO/user";
import { BaseResponseDTO } from "../DTO/http";
import { UserService } from "./user.service";

export class SomeContnetDTO {
  @ApiProperty({ description: "집행할 값" })
  content: string;
}
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

  @Get("profile")
  @ApiOperation({
    summary: "프로필 조회",
    description: "현재 로그인한 유저의 프로필 조회하기",
  })
  @ApiOkResponse({ description: "성공 시", type: ProfileResponseDTO })
  joinProfile(@Headers("authorization") token: string) {
    return this.userService.getProfile(token);
  }

  @Post("profile")
  @ApiOperation({
    summary: "프로필 사진 수정",
    description: "프로필 사진을 업데이트한다고!?!",
  })
  @ApiOkResponse({ description: "성공 시", type: BaseResponseDTO })
  updateProfileImg(
    @Headers("authorization") token: string,
    @Body() data: SomeContnetDTO
  ) {
    return this.userService.setProfileImg(data.content, token);
  }
}
