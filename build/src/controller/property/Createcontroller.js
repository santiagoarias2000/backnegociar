"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Insert_1 = __importDefault(require("../../daos/property/Insert"));
const sql_property_1 = require("../../repository/sql_property");
class PropertyController extends Insert_1.default {
    createProperty(req, res) {
        const { title, description, price, address, city, state, propertyType, nameImg, imgBase64, neighborhoodId, socialState, areaConstruida, bannos, habitaciones, parqueadero } = req.body;
        // Verifica que los campos obligatorios no sean nulos
        if (!title || !price || !address || !city || !state) {
            res.status(400).json({ error: "Missing required fields" });
            return;
        }
        const params = [title, description, price, address, city, state, propertyType, nameImg, imgBase64, neighborhoodId, socialState, areaConstruida, bannos, habitaciones, parqueadero];
        try {
            PropertyController.createProperty(sql_property_1.SQL_PROPERTY.INSERT, params, res);
        }
        catch (error) {
            console.log(error);
            res.status(400).json({ response: 'Error en controller createProperty' });
            return;
        }
    }
}
const createPropertyController = new PropertyController();
exports.default = createPropertyController;
