import express, { response } from 'express';
import cors from 'cors'
const app = express()

import { connection } from './DBScripts/DbConnection.js';

// console.log("connection : ",connection)
// const table = await connection.execute("show tables");
// console.log("Tables : ", table)

// const response = await connection.execute("insert into Test values('Bharath','ram')")
// console.log("response : ",await response[0].affectedRows)

// console.log("Data : ", 
//     await connection.execute
//     ("insert into Test values('lakshman','ram')"));

const corsOptions = {
    origin: "http://localhost:5173",
    method: "GET , POST , PUT , DELETE, PATCH , ",
    credentials: true,
}

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors(corsOptions))

app.get("/", (req, res) => {                // to send query data
    console.log("request came")
    res.send("test is working")
})

app.post("/register", async (req, res) => {        // to register
    console.log(req.body);
    const { fname, lname, gender, age, profession,nationality, username, password, email, phone, emergencykey, address, usertype } = req.body;

    

    const response = await connection.execute
                    (`insert into User values(
                        '${username}',
                        '${password}',
                        '${fname}',
                        '${lname}',
                        '${gender}'
                        '${age}',
                        '${phone}',
                        '${email}',
                        '${emergencykey}',
                        '${address}',
                        '${profession}',
                        '${nationality}'
                        '${usertype == 'seller'}')`
                    );
                    
// write it again 

    if(usertype == 'seller'){
        const {shopname,gstno} = req.body;
        const insertToShop = `insert into Shop values(
            ${username+'_'+age},
            ${username+'_'+shopname},
            ${username},
            ${gstno}
       )`;

       const createShop = `CREATE TABLE ${username+'_'+shopname}`
    }

    console.log(fname, lname);

    res.json({ status: "ok", message: "data inserted successfully..." })
})

app.patch("/updateuser", (req, res) => { })  // to update 
app.delete("/deleteuser", (req, res) => { }) // to delete 


app.listen(3000, (err) => {
    console.log("Server is running ......")
    console.log("Listening at Link ......")
    console.log('"http://localhost:3000/"')
})