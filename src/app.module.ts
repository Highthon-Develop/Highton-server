import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env"],
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      database: "record",
      autoLoadEntities: true,
      synchronize: false,
      entities: [__dirname + "/**/*/entity/*{.ts,.js}"],
      logging: true,
      url: process.env.DB_URL,
    }),
  ],
})
export class AppModule {}
