"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const NeighborController_1 = __importDefault(require("../controller/neighborhood/NeighborController"));
class NeighborhoodRoutes {
    constructor() {
        this.routesApiNeighborhood = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.routesApiNeighborhood.get("/view/:neighborhood_name", NeighborController_1.default.getNameNei);
        this.routesApiNeighborhood.get("/view", NeighborController_1.default.getNeighbor);
    }
}
const neighborhoodRoutes = new NeighborhoodRoutes();
exports.default = neighborhoodRoutes.routesApiNeighborhood;
