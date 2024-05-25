"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../../config/connection/connection"));
class PropertyCreate {
    static createProperty(sqlCreate, parameter, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection_1.default
                .task((consult) => __awaiter(this, void 0, void 0, function* () {
                return yield consult.one(sqlCreate, parameter);
            }))
                .then((response) => {
                if ((response === null || response === void 0 ? void 0 : response.property_id) != 0) {
                    res
                        .status(200)
                        .json({ answer: "Create property", newCode: response === null || response === void 0 ? void 0 : response.propertyId });
                }
                else {
                    res
                        .status(402)
                        .json({ response: "Error register property in the database" });
                }
            })
                .catch((error) => {
                console.log(error);
                res.status(400).json({ response: "Error en Daos createProperty" });
            });
        });
    }
}
exports.default = PropertyCreate;
