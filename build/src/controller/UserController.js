"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDaos_1 = __importDefault(require("../daos/UserDaos"));
const sql_user_1 = require("../repository/sql_user");
class UserController extends UserDaos_1.default {
    getMeUser(req, res) {
        UserController.getUser(sql_user_1.USER.VIEW_ALL, [], res);
    }
}
const userController = new UserController();
exports.default = userController;
