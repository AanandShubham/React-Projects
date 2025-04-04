import express, { response } from 'express';
import cors from 'cors'
const app = express()

import { connection } from './DBScripts/DbConnection.js';


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

app.post('/signin', async (req, res) => {
    try {
        console.log("Request Got ")
        const { username, password } = req.body
        const response = await connection.query('select userType from Customer where username = ? and password = ?', [username, password]);
        console.log("response Data : ", response[0][0].userType)
        console.log("response Data : ", response[0].affectedRows)


    } catch (error) {

    }
})


app.post("/register", async (req, res) => {        // to register

    // reading requist form data    

    const { fname, lname, gender, age,
        nationality, username, password, email,
        phone, emergencykey, address, usertype
    } = req.body;

    // registering user 

    try {
        const insertUserResponse = await connection.execute
            (`insert into Customer(username,password,fname,lname,gender,age,phone,email,emergencykey,address,nationality,userType) values(
                '${username}','${password}','${fname}','${lname}','${gender}','${age}','${phone}',
                '${email}','${emergencykey}','${address}','${nationality}','${usertype}'
                )`);

        if (insertUserResponse[0].affectedRows > 0) {

            // checking if user is seller and creating an appropriate Table and inserting data in tables

            if (usertype == 'seller') {

                let { shopname, gstno } = req.body;

                shopname = shopname.split(' ').join('_');

                // concat spaces 
                const createShopsTable = `CREATE TABLE ${username + '_' + shopname} 
                            (
                                mid varchar(30) primary key,
                                mname varchar(40) not null,
                                mfg Date not null,
                                expr Date not null,
                                rate Float not null,
                                qty integer not null,
                                did varchar(30) not null,
                                descr varchar(50) not null,
                                constraint fkMedicin FOREIGN KEY(did) REFERENCES Disease(did)
                            );`;

                const insertToShop = `insert into Shop values(
                        '${username + '_' + age}',
                        '${username + '_' + shopname}',
                        '${gstno}',
                        '${username}'
                    )`;


                const createSellsTable = `CREATE TABLE ${username + '_' + shopname + '_Sales'}
                        (
                            mid varchar(30) not null,
                            qty Integer not null,
                            rate Float not null,
                            pdate Date not null,
                            uid varchar(30) not null,
                            constraint fkMid FOREIGN KEY(mid) REFERENCES ${username + '_' + shopname}(mid),
                            constraint fkSells FOREIGN KEY(uid) REFERENCES Customer(username),
                            PRIMARY KEY pkSells(uid, mid, pdate)
                        ); `

                // Creating Shops Table            
                const shopResponse = await connection.execute(createShopsTable);
                // Inserting Shop name to Shops Table
                const insertToShopResponse = await connection.execute(insertToShop);

                if (insertToShopResponse[0].affectedRows > 0) {

                    await connection.execute(createSellsTable);

                    // sending response when user is seller and successfully created and inserted it's details and requirements 

                    res.json({ status: 'ok', userType: 'seller', shopname: shopname, shopid: username + age, message: 'seller inserted and its shop and sells table created' })
                }

            } else {
                // sending response when user is patient and successfully inserted the details to table
                res.json({ status: 'ok', userType: 'patient', message: 'patient details inserted successfully' })
            }
        }


    } catch (error) {
        console.log("--------------------------------------------\n")
        console.log("|      Error Message of Insert User        |\n")
        console.log("--------------------------------------------\n")
        console.log("| Message : ", error);
        console.log("--------------------------------------------\n")

        res.json({ status: 'err', ...error });
    }




    // console.log(fname, lname);

    // res.json({ status: "ok", message: "data inserted successfully..." })
})

app.patch("/updateuser", (req, res) => { })  // to update 
app.delete("/deleteuser", (req, res) => { }) // to delete 


app.listen(3000, (err) => {
    console.log("Server is running ......")
    console.log("Listening at Link ......")
    console.log('"http://localhost:3000/"')
})