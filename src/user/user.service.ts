import { Injectable } from "@nestjs/common";
import { getUserIdxByAccessToken } from "src/util/crypto";
import { UserRepository } from "../repository";

@Injectable()
export class UserService {
  constructor(private userRepo: UserRepository) {}

  async followUser(token, targetUserIdx) {
    const userIdx = getUserIdxByAccessToken(token);
    const result = await this.userRepo.followUser(userIdx, targetUserIdx);
    return result;
  }
  async unfollowUser(token, targetUserIdx) {
    const userIdx = getUserIdxByAccessToken(token);
    const result = await this.userRepo.unfollowUser(userIdx, targetUserIdx);
    return result;
  }
}
