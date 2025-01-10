import { ApiProperty } from "@nestjs/swagger";

export class SignInDto {
  @ApiProperty({ description: "User's mail address", example: "user@example.com" })
  mail: string;

  @ApiProperty({ description: "User's password", example: "password123" })
  password: string;
}
