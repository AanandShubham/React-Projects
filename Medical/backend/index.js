import express from 'express';
import cors from 'cors'
const app = express()

import {connection} from './DBScripts/DbConnection.js';
// // const connection = require("./DBScripts/DbConnection.js");

// // import connection from './DBScripts/DbConnection';

// // console.log("tables : ",await connection.execute("show tables"))
// connection();
// print();


const table  = await connection.execute("select * from Shop");
console.log("Tables : ",table) 

const corsOptions = {
    origin : "http://localhost:5173",
    method : "GET , POST , PUT , DELETE, PATCH , ",
    credentials : true,
}

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors(corsOptions))

app.get("/",(req,res)=>{                // to send query data
    console.log("request came")
    res.send("test is working")
})

app.post("/register",(req,res)=>{        // to register
    console.log(req.body);
    const {fname,lname,gender,age,nationality,profession,username,password,email,phone,emergencykey,address,usertype} = req.body;
    console.log(fname,lname);

    res.json({status:"ok",message:"data got successfully..."})
})

app.patch("/updateuser",(req,res)=>{})  // to update 
app.delete("/deleteuser",(req,res)=>{}) // to delete 


app.listen(3000,(err)=>{
    console.log("Server is running ......")
    console.log("Listening at Link ......")
    console.log('"http://localhost:3000/"')
})