"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardsProviders = void 0;
const CreditCards_schema_1 = require("./shemas/CreditCards.schema");
exports.CreditCardsProviders = [
    {
        provide: 'CREDITCARDS_MODEL',
        useFactory: (connection) => connection.model('CreditCards', CreditCards_schema_1.CreditCardsSchema),
        inject: ['BANK'],
    }
];
//# sourceMappingURL=CreditCards.providers.js.map