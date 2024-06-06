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
class PropertyController {
    static createProperty(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, description, price, address, city, state, propertyType, neighborhoodId, socialState, areaConstruida, bannos, habitaciones, parqueadero, images, } = req.body;
                // Verifica que los campos obligatorios no sean nulos o vacíos
                if (!title || !price || !address || !city || !state || !propertyType || !neighborhoodId) {
                    res.status(400).json({ error: "Missing required fields" });
                    return;
                }
                console.log('Inserting property with the following details:', {
                    title,
                    description,
                    price,
                    address,
                    city,
                    state,
                    propertyType,
                    neighborhoodId,
                    socialState,
                    areaConstruida,
                    bannos,
                    habitaciones,
                    parqueadero,
                });
                // Insertar la propiedad
                const propertyResult = yield connection_1.default.query("INSERT INTO properties(title, description, price, address, city, state, property_type, neighborhood_id, estrato_social, area_construida, bannos, habitaciones, parqueadero) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING property_id", [
                    title,
                    description,
                    price,
                    address,
                    city,
                    state,
                    propertyType,
                    neighborhoodId,
                    socialState,
                    areaConstruida,
                    bannos,
                    habitaciones,
                    parqueadero,
                ]);
                console.log('Property insert result:', propertyResult);
                // Verificar que se ha insertado la propiedad y obtener el ID
                const propId = propertyResult && propertyResult[0] ? propertyResult[0].propertyId : null;
                console.log("Inserted property ID:", propId);
                if (propId) { // Corrección aquí: Verificamos si propId es válido
                    for (const image of images) {
                        console.log('Inserting image:', image);
                        yield connection_1.default.query("INSERT INTO property_images(property_id, image_base64, name_img) VALUES($1, $2, $3)", [propId, image.image_base64, image.name_img]);
                    }
                    res.status(200).json({ response: "Property created successfully" });
                }
                else {
                    console.log('Property insertion failed:', propertyResult);
                    res.status(400).json({ response: "Failed to create property" });
                }
            }
            catch (error) {
                console.error("Error creating property:", error);
                res.status(500).json({ response: "Internal server error" });
            }
        });
    }
}
exports.default = PropertyController;
