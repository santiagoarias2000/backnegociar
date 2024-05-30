"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ViewNeighbor_1 = __importDefault(require("../../daos/neighborhood/ViewNeighbor"));
const sql_neighbor_1 = require("../../repository/sql_neighbor");
class NeighborController extends ViewNeighbor_1.default {
    getNeighbor(req, res) {
        NeighborController.getViewNeigh(sql_neighbor_1.SQL_NEIGBOR.VIEW, [], res);
    }
    getNameNei(req, res) {
        const name = req.params.neighborhood_name;
        const parameters = [name];
        NeighborController.getViewNeigh(sql_neighbor_1.SQL_NEIGBOR.VIEW_NEIG, parameters, res);
    }
}
const neighborController = new NeighborController();
exports.default = neighborController;
