import { Request, Response } from "express";
import PropertyDelete from "../../daos/property/Delete";
import { SQL_PROPERTY } from "../../repository/sql_property";

class PropertyController extends PropertyDelete {

    public deleteController(req: Request, res: Response):void{
        const property_id = req.params.propertyId;
        const parameters = [property_id]
        if(parameters != null){
        PropertyController.deleteById(SQL_PROPERTY.DELETE, parameters, res);
        }else{
            res.status(400).json({ response: 'No tiene id' });
        }
    }
}
const deleteProperty = new PropertyController();
export default deleteProperty;
