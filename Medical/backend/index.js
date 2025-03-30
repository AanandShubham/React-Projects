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
//     ("insert into Test values('ram','lakshamn')"));

// const table = await connection.execute("create table test2 ( name varchar(30) , age integer);",(err,row,fields)=>console.log("Error : ",err,"Row : ",row,"fields :",fields));
// try {

//     console.log("create Table Data : ",table);
// } catch (error) {
//     // console.log("error MESSAGE : ",error);
// }

// const dat = connection.execute("select * from Test", async(err,result)=>{
//     if(err){
//         console.log("error : ",err);
//     }
//     else{
//         console.log("Data : ",result[0]);
//         return result[0]
//     }
// })

// console.log("Data ",dat);
// Handle Error 
// try {
//     const data = await connection.execute("select * from Test");

// console.log("DAta  : ",data[0]);
// } catch (error) {
//     console.log("-----------------------------------------------")
//     console.log("ERROR Code : ",error.code,"\nerror No : ",error.errno,"\nError Status : ",error.sqlState,"\nSql : ",error.sql)
// }


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

    // reading requist form data    

    // console.log(req.body);

    const { fname, lname, gender, age,
        nationality, username, password, email,
        phone, emergencykey, address, usertype
    } = req.body;

    // registering user 

    try {
        const insertUserResponse = await connection.execute
            (`insert into Customer(username,password,fname,lname,gender,age,phone,email,emergencykey,address,nationality,isSeller) values(
            '${username}','${password}','${fname}','${lname}','${gender}','${age}','${phone}',
            '${email}','${emergencykey}','${address}','${nationality}','${usertype == 'seller' ? 1 : 0}'
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
                    '${ username + '_' + age }',
                    '${ username + '_' + shopname }',
                    '${ gstno }','${ username }'
                )`;


                const createSellsTable = `CREATE TABLE ${username + '_' +shopname+'_Sales'}
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

                    res.json({ status: 'ok', userType: 'seller', message: 'seller inserted and its shop and sells table created' })
                }

            }else {
// sending response when user is patient and successfully inserted the details to table
                res.json({status:'ok',userType:'patient',message:'patient details inserted successfully'})
            }
        }


    } catch (error) {
        console.log("--------------------------------------------\n")
        console.log("|      Error Message of Insert User        |\n")
        console.log("--------------------------------------------\n")
        console.log("| Message : ", error);
        console.log("--------------------------------------------\n")

        res.json(error);
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