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
class PropertyUpdate {
    static updateProperty(sqlUpdate, paramentros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                //Aca vamos hacer las consultas
                const dato = yield consulta.result(sqlUpdate, paramentros);
            }))
                .then((response) => {
                console.log(response);
                res.status(200).json({ respuesta: 'Update data from property' });
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuestas: 'Error for PropertyUpdate' });
            });
        });
    }
}
exports.default = PropertyUpdate;
