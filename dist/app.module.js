"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const Clients_module_1 = require("./Clients/Clients.module");
const database_module_1 = require("./database/database.module");
const Clients_controller_1 = require("./Clients/Clients.controller");
const CreditCards_module_1 = require("./CreditCards/CreditCards.module");
const CreditCards_controller_1 = require("./CreditCards/CreditCards.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, Clients_module_1.ClientsModule, CreditCards_module_1.CreditCardsModule],
        controllers: [app_controller_1.AppController, Clients_controller_1.ClientsController, CreditCards_controller_1.CreditCardsController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map