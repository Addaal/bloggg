import mysql from "mysql"
import 'dotenv/config';


// export const db = mysql.createConnection("mysql://v6vsutc1f1kgcg8c:ju77a4qhzosajcys@x71wqc4m22j8e3ql.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/g61q3iloug0qm7i4")

export const db = mysql.createConnection({
    host: process.env.JAWSDB_URL,
    // port: process.env.DB_PORT,
    user: process.env.MYSQL_LOGIN,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DB_NAME

});


db.connect();