import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { AccountModule } from "./account/account.module";
import { DiaryModule } from './diary/diary.module';
import { RollingPaperModule } from './rolling-paper/rolling-paper.module';
import { UserModule } from './user/user.module';
import { SchoolModule } from './school/school.module';
import { ImgModule } from './img/img.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env"],
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      database: "record",
      autoLoadEntities: true,
      synchronize: true,
      entities: [__dirname + "/**/*/entity/*.{ts,js}"],
      logging: true,
      url: process.env.DB_URL,
    }),
    AccountModule,
    DiaryModule,
    RollingPaperModule,
    UserModule,
    SchoolModule,
    ImgModule,
  ],
})
export class AppModule {}
