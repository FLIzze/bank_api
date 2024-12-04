"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardsSchema = void 0;
const mongoose = require("mongoose");
exports.CreditCardsSchema = new mongoose.Schema({
    accountId: { type: mongoose.Schema.Types.ObjectId, ref: 'Clients', required: true },
    cardNumber: { type: Number, required: true },
    ccv: { type: Number, required: true },
    expirationDate: { type: Date, required: true },
    type: { type: String, required: true },
    status: { type: String, required: true },
});
//# sourceMappingURL=CreditCards.schema.js.map