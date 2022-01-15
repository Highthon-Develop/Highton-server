import { Body, Controller, Post } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { BaseUserDTO, LoginResponseDTO, RegistDTO } from "./account.DTO";
import { AccountService } from "./account.service";

@Controller("account")
@ApiTags("계정 관련 API들")
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post("")
  @ApiOperation({
    summary: "회원가입",
    description: "회원가입합니다, 아이디 패스워드 필수",
  })
  @ApiOkResponse({ description: "성공 시", status: 201 })
  regist(@Body() data: RegistDTO) {
    return this.accountService.regist(data);
  }

  @Post("login")
  @ApiOperation({
    summary: "로그인",
    description: "로그인입니다. 아이디 패스워드 넘겨주세용",
  })
  @ApiOkResponse({ description: "성공 시", type: LoginResponseDTO })
  login(@Body() data: BaseUserDTO) {
    return this.accountService.login(data);
  }
}
