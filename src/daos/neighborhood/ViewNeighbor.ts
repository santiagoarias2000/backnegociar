import { Response } from "express";
import pool from "../../config/connection/connection";

class NeighViewName {
  public static async getViewNeigh(
    sqlConsul: string,
    parameter: any,
    res: Response
  ) {
    await pool
      .result(sqlConsul, parameter)
      .then((result) => {
        res.status(200).json(result.rows);
      })
      .catch((error) => {
        res.status(400).json({ respons: "Don´t work getViewNeigh in Daos" });
      });
  }
}
export default NeighViewName;