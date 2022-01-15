import { Injectable } from "@nestjs/common";
import { uploadToS3 } from "../util/image";

@Injectable()
export class ImgService {
  constructor() {}

  async imagesUpload(files: any[]) {
    const imgUrlList = <string[]>await Promise.all(
      (files ?? []).map(
        async (file) =>
          await uploadToS3({
            fileName: file.originalname,
            file,
          })
      )
    );

    return { success: true, urlList: imgUrlList };
  }
}
