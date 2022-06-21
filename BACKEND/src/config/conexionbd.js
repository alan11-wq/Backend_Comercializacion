const mysql = require ('mysql');
const conecta =  mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"MessiThiago11",
    port:"3306",
    database:"proyectobd"
});
conecta.connect();

module.exports = conecta;
