import { Request, Response } from "express";
import NeighViewName from "../../daos/neighborhood/ViewNeighbor";
import { SQL_NEIGBOR } from "../../repository/sql_neighbor";


class NeighborController extends NeighViewName {

  public getNeighbor(req: Request, res: Response): void {
    NeighborController.getViewNeigh(SQL_NEIGBOR.VIEW, [], res);
  }

  public getNameNei(req: Request, res: Response): void {
    const name = req.params.neighborhood_name;
    const parameters = [name]
    NeighborController.getViewNeigh(SQL_NEIGBOR.VIEW_NEIG, parameters, res);
  }
}
const neighborController = new NeighborController();
export default neighborController;
