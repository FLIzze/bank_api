"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsSchema = void 0;
const mongoose = require("mongoose");
exports.ClientsSchema = new mongoose.Schema({
    phone: String,
    mail: String,
    passcode: String,
    birthdate: Date,
    address: String,
    zipcode: Number,
    country: String,
    amount: Number,
});
//# sourceMappingURL=Clients.schema.js.map