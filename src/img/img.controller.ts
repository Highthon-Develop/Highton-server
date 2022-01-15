import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import {
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiProperty,
  ApiTags,
} from "@nestjs/swagger";
import { GetImgUrlList } from "src/DTO/img";
import { ImgService } from "./img.service";

export class FileUploadDto {
  @ApiProperty({ type: "file" })
  file: any;
}

@Controller("img")
@ApiTags("이미지 관련")
export class ImgController {
  constructor(private imgService: ImgService) {}

  @UseInterceptors(FileInterceptor("images"))
  @Post("event")
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    description: "profile picture update",
    type: FileUploadDto,
  })
  @ApiOkResponse({ description: "성공 시", type: GetImgUrlList })
  imgUpload(@UploadedFile("file") files: File[]) {
    return this.imgService.imagesUpload(files);
  }
}
