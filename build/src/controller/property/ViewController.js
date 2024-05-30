"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = __importDefault(require("../../daos/property/View"));
const sql_property_1 = require("../../repository/sql_property");
class PropertyController extends View_1.default {
    getCouunt(req, res) {
        PropertyController.getPropertyBy(sql_property_1.SQL_PROPERTY.COUNT, [], res);
    }
    getProperty(req, res) {
        const page = req.query.page ? Number(req.query.page) : 1;
        const limit = req.query.limit ? Number(req.query.limit) : 21;
        const offset = (page - 1) * limit;
        const parameters = [limit, offset];
        PropertyController.getPropertyBy(sql_property_1.SQL_PROPERTY.VIEW, parameters, res);
    }
    getPropertySix(req, res) {
        PropertyController.getPropertyBy(sql_property_1.SQL_PROPERTY.VIEW_SIX, [], res);
    }
    getPropertyByPrice(req, res) {
        let conditions = [];
        let parameters = [];
        const minPrice = req.query.minPrice ? Number(req.query.minPrice) : 0;
        const maxPrice = req.query.maxPrice
            ? Number(req.query.maxPrice)
            : Number.MAX_SAFE_INTEGER;
        conditions.push(`p.price >= $${parameters.length + 1} AND p.price <= $${parameters.length + 2}`);
        parameters.push(minPrice, maxPrice);
        const stratum = req.query.stratum ? String(req.query.stratum) : null;
        if (stratum) {
            conditions.push(`p.estrato_social = $${parameters.length + 1}`);
            parameters.push(stratum);
        }
        const property = req.query.property ? String(req.query.property) : null;
        if (property) {
            conditions.push(`p.property_type = $${parameters.length + 1}`);
            parameters.push(property);
        }
        const state = req.query.state ? String(req.query.state) : null;
        if (state) {
            conditions.push(`p.state = $${parameters.length + 1}`);
            parameters.push(state);
        }
        const neighbourhood = req.query.neighbourhood ? String(req.query.neighbourhood) : null;
        if (neighbourhood) {
            conditions.push(`n.name = $${parameters.length + 1}`);
            parameters.push(neighbourhood);
        }
        let whereClause = "";
        if (conditions.length > 0) {
            whereClause = "WHERE " + conditions.join(" AND ");
        }
        const sqlQuery = `SELECT p.property_id, p.title, p.description, p.price, p.address, p.city, p.state, p.property_type, p.name_img, p.img_base64, n.name as neighborhood_name, p.estrato_social as social_state 
                      FROM properties p 
                      JOIN neighborhoods n ON p.neighborhood_id = n.neighborhood_id 
                      ${whereClause}`;
        PropertyController.getPropertyBy(sqlQuery, parameters, res);
    }
    // estrato
    getPropertyByStratum(req, res) {
        const stratum = req.params.stratum;
        const parameters = [stratum];
        PropertyController.getPropertyBy(sql_property_1.SQL_PROPERTY.SORT_STRATUM, parameters, res);
    }
    // property
    getPropertyByProperty(req, res) {
        const property = req.params.property;
        const parameters = [property];
        PropertyController.getPropertyBy(sql_property_1.SQL_PROPERTY.SORT_PROPERTY_TYPE, parameters, res);
    }
    // state
    getPropertyByState(req, res) {
        const state = req.params.state;
        const parameters = [state];
        PropertyController.getPropertyBy(sql_property_1.SQL_PROPERTY.SORT_STATE, parameters, res);
    }
}
const propertyController = new PropertyController();
exports.default = propertyController;
