import { Router } from "express";
import neighborController from "../controller/neighborhood/NeighborController";


class NeighborhoodRoutes {
  public routesApiNeighborhood: Router;
  constructor() {
    this.routesApiNeighborhood = Router();
    this.config();
  }
  public config() {
    this.routesApiNeighborhood.get("/view/:neighborhood_name", neighborController.getNameNei);

  }
}
const neighborhoodRoutes = new NeighborhoodRoutes();
export default neighborhoodRoutes.routesApiNeighborhood;