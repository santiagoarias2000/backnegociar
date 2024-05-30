import { Router } from "express";
import userController from "../controller/UserController";
import userAccessController from "../controller/user/UserAccessController";

class UserRoutes{
    public routesApiUser: Router;

    constructor(){
        this.routesApiUser = Router();
        this.setting();
    }
    
    public setting(){
        this.routesApiUser.get("/view", userController.getMeUser)
        this.routesApiUser.post("/login", userAccessController.searchOneAccess)
        
    }

}

const userRoutes = new UserRoutes();
export default userRoutes.routesApiUser;