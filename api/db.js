import mysql from "mysql"

// export const db = mysql.createConnection({
//     host: process.env.JAWSDB_URL,
//     port: process.env.DB_PORT,
//     user: process.env.MYSQL_LOGIN,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.DB_NAME

// });

export const db = mysql.createConnection({
    host: "blog.cthswinfto3m.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "admin",
    password:'Hsgs-#&#7gw',
    database:  "blog"

});

db.connect();