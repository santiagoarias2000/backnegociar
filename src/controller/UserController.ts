import { Request, Response } from "express";
import UserDaos from "../daos/UserDaos";
import { USER } from "../repository/sql_user";
class UserController extends UserDaos{
    public getMeUser(req: Request,res: Response): void{
        UserController.getUser(USER.VIEW_ALL,[],res);
        console.log("congi");
    }
}
const userController = new UserController();
export default userController;