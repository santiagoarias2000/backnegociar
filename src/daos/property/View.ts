import { Response } from "express";
import pool from "../../config/connection/connection";

class PropertyView {
  public static async getProperty(
    sqlConsult: string,
    parameter: any,
    res: Response
  ): Promise<any> {
    await pool
      .result(sqlConsult, parameter)
      .then((result) => {
        res.status(200).json(result.rows);
      })
      .catch((meErr) => {
        res.status(400).json({ respons: "Don´t work getproperty in Daos" });
      });
  }
  public static async getPropertyBy(
    sqlConsult: string,
    parameter: any,
    res: Response
  ): Promise<any> {
    await pool
      .result(sqlConsult, parameter)
      .then((result) => {
        res.status(200).json(result.rows);
      })
      .catch((error) => {
        res.status(400).json({ respons: "Don’t work getPropertyByPrice in Daos", error });
      });
  }
}
export default PropertyView;
