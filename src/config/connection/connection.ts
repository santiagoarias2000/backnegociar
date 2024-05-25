import { opcionesPG } from "./optionConnection";
import var_database from "../domains/var_database";
import pgPromise from "pg-promise";

console.log("llega");
const pgp = pgPromise(opcionesPG);
const pool = pgp(var_database);
pool.connect()
    .then((conn)=>{
        console.log('Your enter to database: ', var_database.database);
        conn.done();
    })
    .catch((meErr) => {
        console.log(meErr);
    });

export default pool;