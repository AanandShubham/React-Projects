const express = require('express')
const app = express()


app.get("/",(req,res)=>{
    res.send("test is working")
})


app.listen(3000,(err)=>{
    console.log("Server is running ......")
    console.log("Listening at Link ......")
    console.log('"http://localhost:3000/"')
})