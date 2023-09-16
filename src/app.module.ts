import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { User } from './user/user.model';
import { ProfileController } from './profile/profile.controller';
import { ProfileModule } from './profile/profile.module';
import { FilesModule } from './files/file.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve( __dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRESS_USER,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRESS_DB,
      models: [User],
      autoLoadModels: true,
    }),
    AuthModule,
    UserModule,
    ProfileModule,
    FilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
