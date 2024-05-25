"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.opcionesPG = void 0;
const funtionConnection_1 = require("./funtionConnection");
exports.opcionesPG = {
    receive(e) { (0, funtionConnection_1.camelizeColumns)(e.data); }
};
