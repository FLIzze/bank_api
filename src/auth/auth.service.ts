import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ClientsService } from "../clients/clients.service";
import { JwtService } from '@nestjs/jwt';
import { CreateClientsDto } from "../clients/dto/create-clients.dto";

@Injectable()
export class AuthService {
        constructor(private clientsService: ClientsService, private jwtService: JwtService) {}
        async signIn(phone: string, passcode: string) {
                const client = await this.clientsService.findOneBy(phone);
                if (client?.passcode !== passcode) {
                        throw new UnauthorizedException();
                }
                const payload = { sub: client.id, phone: client.phone };
                return {
                        access_token: await this.jwtService.signAsync(payload),
                };
        }

        async signUp(payload: CreateClientsDto) {
                const client = await this.clientsService.create(payload);
                return client;
        }
}
