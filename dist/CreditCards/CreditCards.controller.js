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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardsController = void 0;
const common_1 = require("@nestjs/common");
const Create_CreditCards_dto_1 = require("./dto/Create-CreditCards.dto");
const CreditCards_service_1 = require("./CreditCards.service");
let CreditCardsController = class CreditCardsController {
    constructor(CreditCardsService) {
        this.CreditCardsService = CreditCardsService;
    }
    async create(CreateCreditCardsDto) {
        return this.CreditCardsService.create(CreateCreditCardsDto);
    }
    async findAll() {
        return this.CreditCardsService.findall();
    }
};
exports.CreditCardsController = CreditCardsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Create_CreditCards_dto_1.CreateCreditCardsDto]),
    __metadata("design:returntype", Promise)
], CreditCardsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CreditCardsController.prototype, "findAll", null);
exports.CreditCardsController = CreditCardsController = __decorate([
    (0, common_1.Controller)('creditcards'),
    __metadata("design:paramtypes", [CreditCards_service_1.CreditCardsService])
], CreditCardsController);
//# sourceMappingURL=CreditCards.controller.js.map