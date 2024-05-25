"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controller/UserController"));
class UserRoutes {
    constructor() {
        this.routesApiUser = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.routesApiUser.get("/view", UserController_1.default.getMeUser);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.routesApiUser;
