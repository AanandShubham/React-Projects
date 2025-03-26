import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const SignOut = () => {
    const navigate = useNavigate()
    const [seller, setSeller] = useState(false);
    const [passmatch, setPassmatch] = useState(true)

    const handleUserType = (e) => {
        console.log(e.target.value)
        if(e.target.value === 'Seller')
            setSeller(true)
        else
            setSeller(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = e.target.elements;

        const formData = {
            "fname": data.fname.value,
            "lname": data.lname.value,
            "age": data.age.value,
            "nationality": data.nationality.value,
            "gender": data.gender.value,
            "username": data.username.value,
            "email": data.email.value,
            "password": data.password.value,
            "phone": data.phone.value,
            "emergencykey": data.emergencykey.value,
            "address": data.address.value,
            "usertype": data.usertype.value,
            "signin": data.signin.checked, 
        }

        if (data.password.value === data.confpassword.value) {
            if(seller){
                formData['shopname'] = data.shopname.value;
                formData['gstno'] = data.gstno.value;
            }
            
            // write fetch code for data registration

            const response = await fetch("http://localhost:3000/register",{
                method:"POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify(formData)
            })
            .then((res)=>res.json())
            .then((res)=>res)

            console.log("Response From Db : ", await response);
            // console.log("Response From Db : ", await response.status);

        } else {
            setPassmatch(false);
            window.alert("Password and conform password does not match ! ")
        }
    }


    return (
        <div>
            <div className='w-screen h-screen'>
                <form
                    onSubmit={handleSubmit}
                    className='w-full h-full bg-amber-50 flex p-8 justify-center items-center'
                    style={{ backgroundImage: "url(./src/images/space.jpg)" }}
                    action="">


                    <div className=' flex p-8 rounded-2x rounded-2xl text-black bg-[#cee1e395] flex-col justify-between gap-8'>
                        <h1 className='text-center font-bold text-2xl'>Sign_Up Page</h1>
                        <div className='w-full flex gap-6'>
                            <input
                                className='pl-2 pr-2 pt-1 pb-1 border-1 rounded-2xl' type="text" placeholder='First Name'
                                name="fname"
                            />
                            <input
                                className='pl-2 pr-2 pt-1 pb-1  border-1 rounded-2xl' type="text" placeholder='Last Name'
                                name='lname'
                            />
                        </div>
                        <div className='w-full flex gap-6'>
                            <input
                                className='pl-2 pr-2 pt-1 pb-1  border-1 rounded-2xl' type="number"
                                name="age" id="" placeholder='Age'
                            />
                            <select name="nationality" id="">
                                <option value="">Nationality</option>
                                <option value="indian">Indian</option>
                                <option value="pakistan">Pakistan</option>
                                <option value="bangladesh">Bangal</option>
                                <option value="srilanka">Srilanka</option>

                            </select>
                        </div>
                        <div className='w-full flex gap-6'>
                            <label>Gender : </label>
                            <input
                                type="radio"
                                name='gender'
                                id="Male"
                                value="Male"
                            />
                            <label htmlFor="">Male</label>
                            <input
                                type="radio"
                                name='gender'
                                id="Female"
                                value="Female"
                            />
                            <label htmlFor="">Female</label>
                            <input
                                type="radio"
                                name='gender'
                                id="Other"
                                value="Other"
                            />
                            <label htmlFor="">Others</label>

                        </div>
                        <div className='w-full flex gap-6'>
                            <input className='pl-2 pr-2 pt-1 pb-1  border-1 rounded-2xl' type="text" placeholder='user name' name='username' />
                            <input className='pl-2 pr-2 pt-1 pb-1  border-1 rounded-2xl' type="email" placeholder='Email' name="email" id="" />
                        </div>
                        <div className='w-full flex gap-6'>
                            <input className={`pl-2 pr-2 pt-1 pb-1  border-1 rounded-2xl ${passmatch ? "" : "bg-red-400"}`} type="password" placeholder='Password' name="password" id="" />
                            <input className={`pl-2 pr-2 pt-1 pb-1  border-1 rounded-2xl ${passmatch ? "" : "bg-red-400"}`} type="password" placeholder='Conform Password' name="confpassword" id="" />
                        </div>
                        <div className='w-full flex gap-6'>
                            <input className='pl-2 pr-2 pt-1 pb-1 border-1 rounded-2xl' type="text" placeholder='Phone' name="phone" id="" />
                            <input className='pl-2 pr-2 pt-1 pb-1 border-1 rounded-2xl' type="text" placeholder='Emergency Key' name="emergencykey" id="" />
                        </div>
                        <div className='w-full flex justify-around gap-6'>
                            <label htmlFor="">Address</label>
                            <textarea className='pl-2 pr-2 pt-1 pb-1 border-1 rounded-2xl' name="address" id=""></textarea>
                        </div>

                        <div className='w-full flex  justify-around gap-6 '>
                            <div className=' pl-3 pr-3 pt-2 pb-2 rounded-2xl flex justify-around items-center border-1'>
                                <input type="checkbox" name="signin" id="" /> <label htmlFor="">Sign in</label>
                            </div>
                            <div>
                                <label htmlFor="">User Type : </label>
                                <select
                                    onChange={handleUserType}
                                    className='border-1 rounded-2xl p-4' name="usertype" id="">
                                    <option value="Student">Student</option>
                                    <option value="Seller">Seller</option>
                                </select>
                            </div>
                        </div>

                        <div className={`w-full flex gap-6 ${seller ? 'none' : 'hidden'}`}>
                            <input className='pl-2 pr-2 pt-1 pb-1 border-1 rounded-2xl' type="text" placeholder='Shop Name' name='shopname' />
                            <input className='pl-2 pr-2 pt-1 pb-1 border-1 rounded-2xl' type="text" name='gstno' placeholder='GST No.' />
                        </div>

                        <div className='w-full flex justify-center gap-4 text-2xl'>
                            <input className='pl-2 pr-2 pt-1 pb-1 border-1 rounded-2xl' type="submit" value="Register" />
                            <input 
                            onClick={()=> navigate("/")}
                            className='pl-2 pr-2 pt-1 pb-1 border-1 rounded-2xl' type="button" value="Cancle" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignOut


