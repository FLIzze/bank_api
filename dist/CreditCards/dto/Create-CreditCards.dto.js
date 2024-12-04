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
exports.CreateCreditCardsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateCreditCardsDto {
}
exports.CreateCreditCardsDto = CreateCreditCardsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Identifiant du compte',
        example: '6750caa88f05311c5b33c3f4'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCreditCardsDto.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Numéro de carte',
        example: '1234567891234567'
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCreditCardsDto.prototype, "cardNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Code de sécurité de la carte',
        example: '123'
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCreditCardsDto.prototype, "ccv", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date d\'expiration de la carte',
        example: '2024-08-01T00:00:00Z'
    }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateCreditCardsDto.prototype, "expirationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Type de carte',
        example: 'Visa'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCreditCardsDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Statut de la carte',
        example: 'Active'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCreditCardsDto.prototype, "status", void 0);
//# sourceMappingURL=Create-CreditCards.dto.js.map