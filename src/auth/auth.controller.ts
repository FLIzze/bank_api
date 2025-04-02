import { Body, Controller, Post, HttpCode, HttpStatus } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dto/sign-in.dto";
import { Public } from "./public-strategy";
import { CreateClientsDto } from "src/clients/dto/create-clients.dto";

@Controller("auth")
export class AuthController {
        constructor(private authService: AuthService) {}

        @Public()
        @HttpCode(HttpStatus.OK)
        @Post("login")
        @ApiOperation({ summary: "User Login" })
        @ApiResponse({
                status: 200,
                description: "Successful login",
        })
        signIn(@Body() signInDto: SignInDto) {
                return this.authService.signIn(signInDto.phone, signInDto.password);
        }


        @Public()
        @HttpCode(HttpStatus.OK)
        @Post("signup")
        @ApiOperation({ summary: "User Signup" })
        @ApiResponse({
                status: 200,
                description: "Successful signup",
                type: CreateClientsDto,
        })
        signUp(@Body() signUpDto: CreateClientsDto) {
                const payload = {
                        phone: signUpDto.phone,
                        mail: signUpDto.mail,
                        passcode: signUpDto.passcode,
                        birthdate: signUpDto.birthdate,
                        address: signUpDto.address,
                        zipcode: signUpDto.zipcode,
                        country: signUpDto.country,
                        amount: signUpDto.amount,
                        createdAt: new Date(),
                };
                return this.authService.signUp(payload);
        }
}
