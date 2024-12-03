"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsProviders = void 0;
const Clients_schema_1 = require("./schemas/Clients.schema");
exports.ClientsProviders = [
    {
        provide: 'CLIENTS_MODEL',
        useFactory: (connection) => connection.model('Clients', Clients_schema_1.ClientsSchema),
        inject: ['BANK'],
    }
];
//# sourceMappingURL=Clients.providers.js.map