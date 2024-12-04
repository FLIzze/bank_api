"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardsModule = void 0;
const common_1 = require("@nestjs/common");
const CreditCards_controller_1 = require("./CreditCards.controller");
const CreditCards_service_1 = require("./CreditCards.service");
const CreditCards_providers_1 = require("./CreditCards.providers");
const database_module_1 = require("../database/database.module");
let CreditCardsModule = class CreditCardsModule {
};
exports.CreditCardsModule = CreditCardsModule;
exports.CreditCardsModule = CreditCardsModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [CreditCards_controller_1.CreditCardsController],
        providers: [
            CreditCards_service_1.CreditCardsService,
            ...CreditCards_providers_1.CreditCardsProviders,
        ],
        exports: [CreditCards_service_1.CreditCardsService]
    })
], CreditCardsModule);
//# sourceMappingURL=CreditCards.module.js.map