import { Response } from "express";
import pool from "../../config/connection/connection";
import { SQL_PROPERTY } from "../../repository/sql_property";

class PropertyView {
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
        res
          .status(400)
          .json({ respons: "Don’t work getPropertyByPrice in Daos", error });
      });
  }
}
export default PropertyView;
