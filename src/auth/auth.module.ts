import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ClientsModule } from '../clients/clients.module';
import { JwtModule } from '@nestjs/jwt'; 
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsSchema } from '../clients/schemas/clients.schema';
import { AuthGuard } from './auth.guard';
import { AuthController } from './auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
        imports: [
                ConfigModule,
                forwardRef(() => ClientsModule),
                JwtModule.registerAsync({
                        imports: [ConfigModule],
                        useFactory: async (configService: ConfigService) => ({
                                secret: configService.get<string>('JWT_SECRET'),
                                signOptions: { expiresIn: '1d' },
                        }),
                        inject: [ConfigService],
                }),
                MongooseModule.forFeature([{ name: 'Client', schema: ClientsSchema }]),
        ],
        controllers: [AuthController],
        providers: [
                AuthService,
                AuthGuard,
        ],
        exports: [
                AuthService, 
                JwtModule, 
                AuthGuard,
                ConfigModule,
        ], 
})

export class AuthModule {}
