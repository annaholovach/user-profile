import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    controllers: [],
    providers: [UserService],
    imports: [
        SequelizeModule.forFeature([User])
    ],
    exports: [
        UserService,
    ]
})
export class UserModule {}
