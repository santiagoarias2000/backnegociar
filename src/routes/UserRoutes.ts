import { Router } from "express";
import userController from "../controller/UserController";

class UserRoutes{
    public routesApiUser: Router;

    constructor(){
        this.routesApiUser = Router();
        this.setting();
    }
    
    public setting(){
        this.routesApiUser.get("/view", userController.getMeUser)
        
    }

}

const userRoutes = new UserRoutes();
export default userRoutes.routesApiUser;