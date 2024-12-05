import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEmail, IsString } from "class-validator";

export class CreateAdvisorsDto {
    @ApiProperty({
        description: 'Advisor ID',
        example: '1'
    })
    @IsString()
    readonly name: string;

    @ApiProperty({
        description: 'Advisor email',
        example: 'mail@gmail.com'
    })
    @IsEmail()
    readonly email: string;

    @ApiProperty({
        description: 'Advisor phone number',
        example: '0620853890'
    })
    @IsString()
    readonly phone: string;

    @ApiProperty({
        description: 'Managed clients',
        example: ['1', '2']
    })
    @IsArray()
    @IsString({ each: true })
    readonly managedClients: string[];

    @ApiProperty({
        description: 'Region',
        example: 'France'
    })
    @IsString()
    readonly region: string;
}
