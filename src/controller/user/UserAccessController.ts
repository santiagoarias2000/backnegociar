import { USER } from './../../repository/sql_user';
import { Request, Response } from "express";
import UserAccessLogin from "../../daos/userlogin/UserAccessLogin";

class UserAccessController extends UserAccessLogin {


    public searchOneAccess(req: Request, res: Response): void {
        const mail_access = req.body.username;
        const password_access = req.body.passwordHash;
        const parametro = [mail_access, password_access];
        UserAccessController.searchIdAccess(USER.lOGIN_ACCESS, parametro, res);

    }
}
const userAccessController = new UserAccessController();
export default userAccessController;