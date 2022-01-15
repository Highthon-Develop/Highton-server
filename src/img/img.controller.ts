import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBody, ApiConsumes, ApiProperty, ApiTags } from "@nestjs/swagger";
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
  imgUpload(@UploadedFile("file") files: File[]) {
    return this.imgService.imagesUpload(files);
  }
}
