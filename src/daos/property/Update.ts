import { Response } from "express";
import pool from "../../config/connection/connection";

class PropertyUpdate {
    public static async updateProperty(sqlUpdate: string, paramentros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
            //Aca vamos hacer las consultas
            const dato = await consulta.result(sqlUpdate, paramentros);
        })
            .then((response) => {
                console.log(response);
                res.status(200).json({ respuesta: 'Update data from property' });
            })
            .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuestas: 'Error for PropertyUpdate' });

            });
    }
}
export default PropertyUpdate;