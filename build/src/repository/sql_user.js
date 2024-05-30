"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER = void 0;
exports.USER = {
    VIEW_ALL: "SELECT user_id, username, password_hash, email \
	FROM public.users;",
    lOGIN_ACCESS: "select * from users where username= $1 and password_hash = $2"
};
