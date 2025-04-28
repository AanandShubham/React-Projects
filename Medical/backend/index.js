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

app.post('/addMedicine', async (req, res) => {
    console.log("Add Medicine Request Got : ", req.body);
    // console.log('add medicine dataa: ', req.body.medicin.mname,
    //     req.body.medicin.mfd,
    //     req.body.medicin.exp,
    //     req.body.medicin.rate,
    //     req.body.medicin.discount,
    //     req.body.medicin.qty,
    //     req.body.did,
    //     req.body.medicin.type);

    try {
        const response = await connection.execute(`
                insert into ${req.body.shopname}(mname,mfg,expr,rate,discont,qty,did,descr)
                values(?,?,?,?,?,?,?,?)`,
            [
                req.body.medicin.mname,
                req.body.medicin.mfd,
                req.body.medicin.exp,
                req.body.medicin.rate,
                req.body.medicin.discount,
                req.body.medicin.qty,
                req.body.did,
                req.body.medicin.type
            ]
        );
        console.log("MediResponse : ",)
        if (await response[0].affectedRows > 0)
            res.json({ status: 'added', })
        else
            res.json({ status: "error" })

    } catch (error) {
        console.log("Error in Add Medicine : ", error);
        res.json({ status: 'error', ...error })
    }
})

app.post('/getMedicines', async (req, res) => {
    try {

        const medicine = await connection.execute(`select * from ${req.body.shopname} where did = ${req.body.did}`)

        if (medicine[0].length > 0)
            res.json({ status: 'ok', medicine: medicine });
        else
            res.json({ status: 'empty' })
        // console.log(medicine[0].affectedRows) 
    } catch (error) {
        console.log("Error in getMedicines : ", error)
        res.json({ status: 'error', ...error })
    }

})

app.get('/getDiases/:shopid', async (req, res) => {
    try {
        const shopid = req.params.shopid; // getting shop id

        const diasesResponse = await connection.execute(
            "select * from Disease where sid = ?",
            [shopid]
        );
        res.json({ status: 'ok', diases: diasesResponse[0] })
    }
    catch (error) {
        res.json({ status: 'failed', error: { ...error } })
    }
})

app.get('/getAllDiases', async (req, res) => {

    try {
        const disease = await connection.execute('select * from Disease')

        if (disease[0].length > 0)
            res.json({status:'ok',disease:disease[0]})
        else
            res.json({status:'empty'})
    } catch (error) {
        console.log("Error in GetAll Disease : ------------\n",error);
        res.json({status:'error',...error})
    }
})

app.post('/adddiases', async (req, res) => {
    try {
        console.log("Request got", req.body);
        const response = await connection.execute(
            "insert into Disease(dname,sid) values(?,?)",
            [req.body.diases, req.body.shopid]
        );
        if (response[0].affectedRows > 0)
            res.json({ status: 'inserted' })
        else
            res.json({ status: 'failed' })
    } catch (error) {
        console.log("Error : ", error)
        res.json({ status: 'error', ...error })
    }

})

app.post('/signin', async (req, res) => {
    try {
        // console.log("Request Got ")
        const { username, password } = req.body
        const response = await connection.query('select userType from Customer where username = ? and password = ?', [username, password]);
        // console.log("response Data : ", response[0][0].userType)
        // console.log("response Data : ", response[0].affectedRows)

        if (response[0].length > 0) {
            // console.log("sign in REquewt : ", response[0][0])
            if (response[0][0].userType === 'seller') {
                const fetchShopdetail = await connection.query('select sid,sname from Shop where owner = ?', [username])
                // console.log("Shop Data : ", fetchShopdetail[0][0]);
                if (fetchShopdetail[0].length > 0)
                    res.json(
                        {
                            status: 'valid',
                            usertype: 'seller',
                            shopid: fetchShopdetail[0][0].sid,
                            shopname: fetchShopdetail[0][0].sname
                        })
                else
                    res.json({ status: 'notfound' })
            }
            else
                res.json(
                    {
                        status: 'valid',
                        usertype: response[0][0].userType
                    })
        }
        else
            res.json({ status: 'invalid' })


    } catch (error) {
        res.json({ status: 'error', error: { ...error } })
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
                                                mid integer auto_increment primary key,
                                                mname varchar(40) not null,
                                                mfg Date not null,
                                                expr Date not null,
                                                rate Float not null,
                                                discont Float not null,
                                                qty integer not null,
                                                did integer not null,
                                                descr varchar(50) not null,
                                                FOREIGN KEY(did) REFERENCES Disease(did)
                                            );`;

                const insertToShop = `insert into Shop values(
                                        '${username + '_' + age}',
                                        '${username + '_' + shopname}',
                                        '${gstno}',
                                        '${username}'
                                    )`;


                const createSellsTable = `CREATE TABLE ${username + '_' + shopname + '_Sales'}
                                        (
                                            mid integer not null,
                                            qty Integer not null,
                                            rate Float not null,
                                            discount Float not null,
                                            pdate Date not null,
                                            uid varchar(30) not null,
                                            FOREIGN KEY(mid) REFERENCES ${username + '_' + shopname}(mid),
                                            FOREIGN KEY(uid) REFERENCES Customer(username),
                                            PRIMARY KEY (uid, mid, pdate)
                                        ); `

                // Creating Shops Table            
                const shopResponse = await connection.execute(createShopsTable);
                // Inserting Shop name to Shops Table
                const insertToShopResponse = await connection.execute(insertToShop);

                if (insertToShopResponse[0].affectedRows > 0) {

                    await connection.execute(createSellsTable);

                    // sending response when user is seller and successfully created and inserted it's details and requirements 

                    res.json({ status: 'ok', userType: 'seller', shopname: shopname, shopid: username + '_' + age, message: 'seller inserted and its shop and sells table created' })
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

        res.json({ status: 'err', error: { ...error } });
    }
    // console.log(fname, lname);

    // res.json({ status: "ok", message: "data inserted successfully..." })
})

app.patch("/updateuser", (req, res) => { })  // to update 
app.delete("/deleteuser", (req, res) => { }) // to delete 

// const response22 = await connection.execute('select * from Test2');
// console.log("Table Data :",response22[0].length)

const nresponse = await connection.query('select userType from Customer where username = ? and password = ?', ['ram', 'shyam']);
console.log("response Data : ", nresponse[0][0])
console.log("response Data : ", nresponse[0].length)



app.listen(3000, (err) => {
    console.log("Server is running ......")
    console.log("Listening at Link ......")
    console.log('"http://localhost:3000/"')
})