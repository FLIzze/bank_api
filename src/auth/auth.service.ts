import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ClientsService } from "../clients/clients.service";
import { JwtService } from '@nestjs/jwt';
import { CreateClientsDto } from "../clients/dto/create-clients.dto";

@Injectable()
export class AuthService {
        constructor(private clientsService: ClientsService, private jwtService: JwtService) {}
        async signIn(mail: any, pass: any) {
                const client = await this.clientsService.findOneBy(mail);
                if (client?.passcode !== pass) {
                        throw new UnauthorizedException();
                }
                const payload = { sub: client.id, mail: client.mail };
                return {
                        access_token: await this.jwtService.signAsync(payload),
                };
        }
        async signUp(payload: CreateClientsDto) {
                const client = await this.clientsService.create(payload);
                return client;
        }
}
