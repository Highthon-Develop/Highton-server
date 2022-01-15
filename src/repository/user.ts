import { User } from "../entity";
import { EntityRepository, Repository } from "typeorm";

export class BaseUserInform {
  email: string;
  password: string;
}
export class UserInform extends BaseUserInform {
  name: string;
  birthYear: number;
  birthMonth: number;
  birthDay: number;
  schoolIdx: number;
  grade: number;
  sex: "Male" | "Female" | "Secret";
  nickname: string;
}

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  regist({
    name,
    email,
    password,
    schoolIdx,
    birthDay,
    birthMonth,
    birthYear,
    grade,
    sex,
    nickname,
  }: UserInform) {
    return this.insert({
      name,
      grade,
      password,
      sex,
      nickname,
      email,
      birthDay: new Date(`${birthYear}-${birthMonth}-${birthDay}`),
      school: { idx: schoolIdx },
    });
  }

  async findByEmailAndPassword({
    email,
    password,
  }: BaseUserInform): Promise<User> {
    return (await this.find({ where: { email, password } }))[0];
  }

  async followUser(userIdx: number, targetUserIdx: number) {
    try {
      const user = await this.findOne(userIdx, {
        join: {
          alias: "user",
          leftJoinAndSelect: { following: "user.following" },
        },
      });
      const targetUser = await this.findOne(targetUserIdx, {
        join: {
          alias: "user",
          leftJoinAndSelect: { following: "user.following" },
        },
      });
      console.log(user);
      user.following = [...(user.following ?? []), targetUser];
      await this.save(user);

      targetUser.followers = [...(targetUser.followers ?? []), user];
      await this.save(targetUser);

      return true;
    } catch (e: unknown) {
      console.error(e);
      return false;
    }
  }

  async unfollowUser(userIdx: number, targetUserIdx: number) {
    try {
      const user = await this.findOne(userIdx, {
        join: {
          alias: "user",
          leftJoinAndSelect: { following: "user.following" },
        },
      });
      const targetUser = await this.findOne(targetUserIdx, {
        join: {
          alias: "user",
          leftJoinAndSelect: { following: "user.following" },
        },
      });

      user.following = (user.following as User[]).filter(
        (user) => user.id !== targetUser.id
      );
      await this.save(user);

      targetUser.followers = (targetUser.following as User[]).filter(
        (fUser) => fUser.id !== user.id
      );
      await this.save(targetUser);

      return true;
    } catch (e: unknown) {
      console.error(e);
      return false;
    }
  }
}
