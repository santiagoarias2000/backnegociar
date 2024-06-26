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
    this.routesApiProperty.get("/viewOne/:property_id", propertyController.getPropertyOne);
    this.routesApiProperty.get("/viewOneImagen/:property_id", propertyController.getPropertyImages);
    this.routesApiProperty.get("/viewsix", propertyController.getPropertySix);
    this.routesApiProperty.get("/count", propertyController.getCouunt);
    this.routesApiProperty.post("/create", createPropertyController.createProperty);
    this.routesApiProperty.put("/update", updatePropertyController.updateProperty);
    this.routesApiProperty.delete("/delete/:propertyId", deleteProperty.deleteController);
    // View sort property controller
    this.routesApiProperty.get("/sortByPrice", propertyController.getPropertyByPrice);
    this.routesApiProperty.get("/sortByStratum/:stratum", propertyController.getPropertyByStratum);
    this.routesApiProperty.get("/sortByProperty/:property", propertyController.getPropertyByProperty);
    this.routesApiProperty.get("/sortBystate/:state", propertyController.getPropertyByState);
    
  }
}
const propertyRoutes = new PropertyRoutes();
export default propertyRoutes.routesApiProperty