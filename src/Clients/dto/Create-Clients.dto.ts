import { IsString, IsEmail, IsDate, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateClientsDto {
    @IsString()
    readonly phone:string;

    @IsEmail()
    readonly mail:string;

    @IsString()
    readonly passcode:string;

    @IsDate()
    @Type(() => Date)
    readonly birthdate:Date;

    @IsString()
    readonly address:string;

    @IsNumber()
    readonly zipcode:number;

    @IsString()
    readonly country:string;

    @IsNumber()
    readonly amount:number;
}