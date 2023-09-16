import { Controller, Get, Put, UseGuards, Request, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProfileService } from './profile.service';
import {JwtAuthGuard} from '../guards/jwt-auth.guard'
import UpdateUserDto from 'src/user/dto/update-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    getinfo(@Request() req) {
        const user = req.user;
        return this.profileService.findUserById(user.id)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/update')
    updateInfo(@Request() req, @Body() updateUserDto : UpdateUserDto,) {
        return this.profileService.updateInfo(req.user, updateUserDto)
    }
}
