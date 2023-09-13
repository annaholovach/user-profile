import {IsEmail, IsString, Length, MinLength} from "@nestjs/class-validator";

export class CreateUserDto {

    @IsString({message: 'тільки строкові значення'})
    @IsEmail({}, {message: "не коректний email"})
    readonly email: string;

    @IsString({message: 'тільки строкові значення'})
    @Length(4, 16, {message: 'не менше 4 і не більше 16 символів'})
    readonly password: string;

    @MinLength(2, {message: 'занадто коротке ім`я',})
    @IsString({message: 'тільки строкові значення'})
    readonly firstName: string;

    @MinLength(2, {message: 'занадто коротке прізвище',})
    @IsString({message: 'тільки строкові значення'})
    readonly lastName: string;
}