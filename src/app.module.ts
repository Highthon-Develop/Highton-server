import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { AccountModule } from "./account/account.module";

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
  ],
})
export class AppModule {}
