
import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"Medical"
});

// const data = await connection.query("show tables");

console.log("Connection Created");

// const connection = ()=>{
//     console.log("connection is created");
// }

// const print = ()=>{
//     console.log("This is print")
// }

export {connection}

