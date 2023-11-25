import mysql from "mysql"

export const db = mysql.createConnection(process.env.JAWSDB_URL);

db.connect();