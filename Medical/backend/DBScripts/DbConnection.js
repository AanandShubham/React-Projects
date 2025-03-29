
import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"Medical"
});


console.log("Connection Created");

// modules.exports = connection

export {connection}

