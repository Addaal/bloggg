import mysql from "mysql"
import 'dotenv/config';


export const db = mysql.createConnection("mysql://a4z2wiv9du3d6lb9:c2ezzmbawksbkfzz@y5svr1t2r5xudqeq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/sdijrvmu3djx5d8c")

// export const db = mysql.createConnection({
//     host: process.env.JAWSDB_URL,
//     // port: process.env.DB_PORT,
//     user: process.env.MYSQL_LOGIN,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.DB_NAME

// });


db.connect();