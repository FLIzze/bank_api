import { ApiProperty } from "@nestjs/swagger";

export class SignInDto {
        @ApiProperty({ description: "User's phone number", example: "0620853890" })
        phone: string;

        @ApiProperty({ description: "User's passcode", example: "123456" })
        password: string;
}
