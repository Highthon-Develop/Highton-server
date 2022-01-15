import { Injectable } from "@nestjs/common";
import { getUserIdxByAccessToken } from "src/util/crypto";
import { UserRepository } from "../repository";

@Injectable()
export class UserService {
  constructor(private userRepo: UserRepository) {}

  async followUser(token, targetUserIdx) {
    const userIdx = getUserIdxByAccessToken(token);
    const result = await this.userRepo.followUser(userIdx, targetUserIdx);
    return { success: result };
  }
  async unfollowUser(token, targetUserIdx) {
    const userIdx = getUserIdxByAccessToken(token);
    const result = await this.userRepo.unfollowUser(userIdx, targetUserIdx);
    return { success: result };
  }

  async getFollower(userIdx: number) {
    const result = await this.userRepo.getFollower(userIdx);
    return { success: true, content: result };
  }
  async getFollowing(userIdx: number) {
    const result = await this.userRepo.getFollowing(userIdx);
    return { success: true, content: result };
  }

  async getRecommendationUser() {
    const result = await this.userRepo.findRecommendationUser();
    return { success: true, content: result };
  }

  async getProfile(token: string) {
    const idx = getUserIdxByAccessToken(token);
    const result = await this.userRepo.findOne(idx, {
      join: { alias: "user", leftJoinAndSelect: { school: "user.school" } },
    });

    return { success: true, content: result };
  }
}
