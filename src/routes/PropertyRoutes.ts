import { Router } from "express";
import propertyController from "../controller/property/ViewController";
import createPropertyController from "../controller/property/Createcontroller";
import updatePropertyController from "../controller/property/UpdateController";
import deleteProperty from "../controller/property/DeleteController";

class PropertyRoutes {
  public routesApiProperty: Router;
  constructor() {
    this.routesApiProperty = Router();
    this.config();
  }
  public config() {
    this.routesApiProperty.get("/view", propertyController.getProperty);
    this.routesApiProperty.get("/viewsix", propertyController.getPropertySix);
    this.routesApiProperty.post("/create", createPropertyController.createProperty);
    this.routesApiProperty.put("/update", updatePropertyController.updateProperty);
    this.routesApiProperty.delete("/delete/:propertyId", deleteProperty.deleteController);
    this.routesApiProperty.get("/sortByPrice", propertyController.getPropertyByPrice);
    this.routesApiProperty.get("/sortByStratum/:stratum", propertyController.getPropertyByStratum);
    this.routesApiProperty.get("/sortByProperty/:property", propertyController.getPropertyByProperty);
    this.routesApiProperty.get("/sortBystate/:state", propertyController.getPropertyByState);
    
  }
}
const propertyRoutes = new PropertyRoutes();
export default propertyRoutes.routesApiProperty