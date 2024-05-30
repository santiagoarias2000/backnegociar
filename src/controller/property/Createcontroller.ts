import { Request, Response } from "express";
import PropertyCreate from "../../daos/property/Insert";
import { SQL_PROPERTY } from "../../repository/sql_property";

class PropertyController extends PropertyCreate {
    public createProperty(req: Request, res: Response): void {
        const { title, description, price, address, city, state, propertyType, nameImg, imgBase64,neighborhoodId,socialState , areaConstruida , bannos, habitaciones, parqueadero} = req.body;
        
        // Verifica que los campos obligatorios no sean nulos
        if (!title || !price || !address || !city || !state) {
            res.status(400).json({ error: "Missing required fields" });
            return;
        }

        const params = [title, description, price, address, city, state, propertyType, nameImg, imgBase64,neighborhoodId, socialState, areaConstruida , bannos, habitaciones, parqueadero];

        try {
            PropertyController.createProperty(SQL_PROPERTY.INSERT, params, res);
        } catch (error) {
            console.log(error);
            res.status(400).json({ response: 'Error en controller createProperty' });
            return;
            
        }
    }
}

const createPropertyController = new PropertyController();
export default createPropertyController;
