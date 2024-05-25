"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Delete_1 = __importDefault(require("../../daos/property/Delete"));
const sql_property_1 = require("../../repository/sql_property");
class PropertyController extends Delete_1.default {
    deleteController(req, res) {
        const property_id = req.params.propertyId;
        const parameters = [property_id];
        if (parameters != null) {
            PropertyController.deleteById(sql_property_1.SQL_PROPERTY.DELETE, parameters, res);
        }
        else {
            res.status(400).json({ response: 'No tiene id' });
        }
    }
}
const deleteProperty = new PropertyController();
exports.default = deleteProperty;
