const mysql = require("mysql");

const db = mysql.createConnection({
    host: "jm-login-lecture.c76qu43qb6xb.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "alwkd1127!",
    database: "login_lecture",
});

db.connect();

module.exports = db;