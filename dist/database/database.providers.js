"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
require('dotenv').config();
exports.databaseProviders = [{
        provide: 'BANK',
        useFactory: () => mongoose.connect(process.env.DB_URI)
    }];
//# sourceMappingURL=database.providers.js.map