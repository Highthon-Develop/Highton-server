import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserService } from "./user.service";

@Controller("user")
@ApiTags("유저 관련된것들, ex : 생일")
export class UserController {
  constructor(private userService: UserService) {}
}
