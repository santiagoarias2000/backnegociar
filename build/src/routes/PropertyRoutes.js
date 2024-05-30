"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ViewController_1 = __importDefault(require("../controller/property/ViewController"));
const Createcontroller_1 = __importDefault(require("../controller/property/Createcontroller"));
const UpdateController_1 = __importDefault(require("../controller/property/UpdateController"));
const DeleteController_1 = __importDefault(require("../controller/property/DeleteController"));
class PropertyRoutes {
    constructor() {
        this.routesApiProperty = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.routesApiProperty.get("/view", ViewController_1.default.getProperty);
        this.routesApiProperty.get("/viewsix", ViewController_1.default.getPropertySix);
        this.routesApiProperty.get("/count", ViewController_1.default.getCouunt);
        this.routesApiProperty.post("/create", Createcontroller_1.default.createProperty);
        this.routesApiProperty.put("/update", UpdateController_1.default.updateProperty);
        this.routesApiProperty.delete("/delete/:propertyId", DeleteController_1.default.deleteController);
        // View sort property controller
        this.routesApiProperty.get("/sortByPrice", ViewController_1.default.getPropertyByPrice);
        this.routesApiProperty.get("/sortByStratum/:stratum", ViewController_1.default.getPropertyByStratum);
        this.routesApiProperty.get("/sortByProperty/:property", ViewController_1.default.getPropertyByProperty);
        this.routesApiProperty.get("/sortBystate/:state", ViewController_1.default.getPropertyByState);
    }
}
const propertyRoutes = new PropertyRoutes();
exports.default = propertyRoutes.routesApiProperty;
