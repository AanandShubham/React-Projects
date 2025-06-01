
import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config({})

const connection = await mysql.createConnection({
    host:process.env.HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:"Medical"
});


console.log("Connection Created");
console.log("env USERNAME : ",process.env.DB_USER)

// modules.exports = connection

export {connection}

