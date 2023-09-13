import { IsOptional, IsString } from '@nestjs/class-validator';

export default class UpdateUserDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsString()
  image: string
}