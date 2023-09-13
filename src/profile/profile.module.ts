import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { User } from 'src/user/user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { FilesModule } from 'src/files/file.module';

@Module({
  providers: [ProfileService],
  controllers: [ProfileController],
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_KEY || 'SECRET',
      signOptions: {
        expiresIn: '2h'
      }
    }),
    SequelizeModule.forFeature([User]),
    FilesModule
  ],
  exports: [ProfileService]
})
export class ProfileModule {}
