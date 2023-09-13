import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../user/user.model';
import UserResponseDto from 'src/user/dto/user-response.dto';
import { JwtService } from '@nestjs/jwt';
import UpdateUserDto from 'src/user/dto/update-user.dto';
import { FilesService } from 'src/files/file.service';

@Injectable()
export class ProfileService {
    constructor(@InjectModel(User) private userRepository: typeof User,
                private jwtService: JwtService,
                private fileService: FilesService) {}

    async getinfo(token: string) {

    }
    
    async updateInfo(user: User, dto: UpdateUserDto) {
        const existingUser = await this.findUserById(user.id)
        existingUser.firstName = dto.firstName || existingUser.firstName;
        existingUser.lastName = dto.lastName || existingUser.lastName;
        await existingUser.save()
        return existingUser
    }

    async findUserById (id: number) {
        const user = await this.userRepository.findOne({where: {id}})
        return user
    }
}
