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
  }: UserInform) {
    return this.insert({
      name,
      email,
      password,
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
}
