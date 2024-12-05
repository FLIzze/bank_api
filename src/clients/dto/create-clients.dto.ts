import { IsString, IsEmail, IsDate, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClientsDto {
    @ApiProperty({
        description: 'numéro de telephone du client',
        example: '0620853890'
    })
    @IsString()
    readonly phone:string;

    @ApiProperty({
        description: 'Mail du client',
        example: 'erwan.sinck@ynov.com'
    })
    @IsEmail()
    readonly mail:string;

    @ApiProperty({
        description: 'Mot de passe du client',
        example: 'Password123'
    })
    @IsString()
    readonly passcode:string;

    @ApiProperty({
        description: 'Date de naissance du client',
        example: '2004-02-09T00:00:00Z'
    })
    @IsDate()
    @Type(() => Date)
    readonly birthdate:Date;

    @ApiProperty({
        description: 'Adresse du client',
        example: '23 Rue Toulouse Lautrec'
    })
    @IsString()
    readonly address:string;

    @ApiProperty({
        description: 'Zipcode de la ville du client',
        example: '33530'
    })
    @IsNumber()
    readonly zipcode:number;

    @ApiProperty({
        description: 'Pays du client',
        example: 'France'
    })
    @IsString()
    readonly country:string;

    @ApiProperty({
        description: 'Argent du client',
        example: '0'
    })
    @IsNumber()
    readonly amount:number;
}