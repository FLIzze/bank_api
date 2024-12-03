"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClientsDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class CreateClientsDto {
}
exports.CreateClientsDto = CreateClientsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'numéro de telephone du client',
        example: '0620853890'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClientsDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Mail du client',
        example: 'erwan.sinck@ynov.com'
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateClientsDto.prototype, "mail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Mot de passe du client',
        example: 'Password123'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClientsDto.prototype, "passcode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date de naissance du client',
        example: '2004-02-09T00:00:00Z'
    }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateClientsDto.prototype, "birthdate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Adresse du client',
        example: '23 Rue Toulouse Lautrec'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClientsDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Zipcode de la ville du client',
        example: '33530'
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateClientsDto.prototype, "zipcode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Pays du client',
        example: 'France'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClientsDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Argent du client',
        example: '0'
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateClientsDto.prototype, "amount", void 0);
//# sourceMappingURL=Create-Clients.dto.js.map