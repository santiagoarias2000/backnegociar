import { Request, Response } from "express";
import { SQL_PROPERTY } from "../../repository/sql_property";
import PropertyUpdate from "../../daos/property/Update";

class PropertyController extends PropertyUpdate {
    public updateProperty(req: Request, res: Response): void {
        const { title, description, price, address, city, state, propertyType, nameImg, imgBase64,propertyId, socialState } = req.body;
        
        // Verifica que los campos obligatorios no sean nulos
        if (!title || !price || !address || !city || !state) {
            res.status(400).json({ error: "Missing required fields" });
            return;
        }

        const params = [title, description, price, address, city, state, propertyType, nameImg, imgBase64,propertyId,socialState];

        try {
            PropertyController.updateProperty(SQL_PROPERTY.UPDATE, params, res);
        } catch (error) {
            console.log(error);
            res.status(400).json({ response: 'Error en controller createProperty' });
            return;
            
        }
    }
}

const updatePropertyController = new PropertyController();
export default updatePropertyController;
