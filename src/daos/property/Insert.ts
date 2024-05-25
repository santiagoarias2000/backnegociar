import { Response } from "express";
import pool from "../../config/connection/connection";

class PropertyCreate {
  public static async createProperty(
    sqlCreate: string,
    parameter: any,
    res: Response
  ): Promise<any> {
    await pool
      .task(async (consult) => {
        return await consult.one(sqlCreate, parameter);
      })
      .then((response) => {
        if (response?.property_id != 0) {
          res
            .status(200)
            .json({ answer: "Create property", newCode: response?.propertyId });
        } else {
          res
            .status(402)
            .json({ response: "Error register property in the database" });
        }
      })
      .catch((error) => {
        console.log(error);
        
        res.status(400).json({ response: "Error en Daos createProperty" });
      });
  }
}
export default PropertyCreate;
