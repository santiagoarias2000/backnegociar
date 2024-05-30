"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_user_1 = require("./../../repository/sql_user");
const UserAccessLogin_1 = __importDefault(require("../../daos/userlogin/UserAccessLogin"));
class UserAccessController extends UserAccessLogin_1.default {
    searchOneAccess(req, res) {
        const mail_access = req.body.username;
        const password_access = req.body.passwordHash;
        const parametro = [mail_access, password_access];
        UserAccessController.searchIdAccess(sql_user_1.USER.lOGIN_ACCESS, parametro, res);
    }
}
const userAccessController = new UserAccessController();
exports.default = userAccessController;
