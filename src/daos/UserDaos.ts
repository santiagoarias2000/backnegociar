import { Request, Response } from "express";
import pool from "../config/connection/connection";

class UserDaos {
    public static async getUser(sqlConsult: string, parameter: any, res: Response): Promise<any> {
        try {
            const result = await pool.result(sqlConsult, parameter);
            res.status(200).json(result.rows);
        } catch (myError) {
            console.log('Error in daos: ', myError);
            res.status(400).json({ response: 'Error en Daos getUser' });
        }
    }
}

export default UserDaos;
