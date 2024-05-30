"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_property_1 = require("../../repository/sql_property");
const Update_1 = __importDefault(require("../../daos/property/Update"));
class PropertyController extends Update_1.default {
    updateProperty(req, res) {
        const { title, description, price, address, city, state, propertyType, nameImg, imgBase64, propertyId, socialState, area_construida, baños, habitaciones, parqueadero } = req.body;
        // Verifica que los campos obligatorios no sean nulos
        if (!title || !price || !address || !city || !state) {
            res.status(400).json({ error: "Missing required fields" });
            return;
        }
        const params = [title, description, price, address, city, state, propertyType, nameImg, imgBase64, propertyId, socialState, area_construida, baños, habitaciones, parqueadero];
        try {
            PropertyController.updateProperty(sql_property_1.SQL_PROPERTY.UPDATE, params, res);
        }
        catch (error) {
            console.log(error);
            res.status(400).json({ response: 'Error en controller createProperty' });
            return;
        }
    }
}
const updatePropertyController = new PropertyController();
exports.default = updatePropertyController;
