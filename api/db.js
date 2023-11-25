import mysql from "mysql"
import 'dotenv/config';



export const db = mysql.createConnection({
    host: process.env.JAWSDB_URL,
    port: process.env.DB_PORT,
    user: process.env.MYSQL_LOGIN,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DB_NAME

});


db.connect();