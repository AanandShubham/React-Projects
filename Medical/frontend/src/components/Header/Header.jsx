import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"

export default function Header({ headerState }) {

    // let userLoggedIn = headerState?.signin;
    // let userType = headerState?.usertype;

    let userLoggedIn = true;
    let userType = 'seller';
    // let userType = 'patient'
    const navigate = useNavigate()
    // const flag = userLoggedIn && (userType == "seller")
    // console.log("Flag : ",flag)


    // const detail = { name: "ram", age: 34 }
    return (
        <div className="w-full h-[12vmin] fixed  text-[#00bf8f] bg-gradient-to-r from-[#eb2d0cec] to-[#04d915ef] flex justify-between p-1">

            <div>
                <img
                    className="w-[90px] h-[70px] mix-blend-darken hover:scale-110 "
                    src="./src/images/medical_logo.jpg" alt="img problem" />
            </div>

            <div className={` flex gap-4 justify-center items-center  text-white text-[20px]`}>

                <div className={`mainview ${userLoggedIn ? 'hidden' : ''}  flex gap-4 justify-end items-center  text-white text-[20px]`}>
                    <ul className="flex gap-4">
                        <li className="hover:text-red-500 cursor-pointer">
                            <NavLink to="/"
                                className={({ isActive }) => `${isActive ? 'text-blue-700' : ""} `}>Home</NavLink></li>
                        <li className="hover:text-red-500 cursor-pointer">
                            <NavLink
                                to="/about"
                                className={({ isActive }) => `${isActive ? 'text-blue-700' : ""}`}>About</NavLink>
                        </li>
                        <li className="hover:text-red-500 cursor-pointer">
                            <NavLink to="/contact/ram"
                                className={({ isActive }) => `${isActive ? 'text-blue-700' : ""}`}
                            >Contact</NavLink>
                        </li>

                    </ul>
                    <div className={`flex gap-2 `}>
                        <button onClick={() => navigate("/signin", { state: headerState })} className=" hover:scale-90 rounded-xl p-2 text-xl bg-amber-500 pl-1 pr-1 bg-gradient-to-br from-[#f8391b] to-[#50d3e7] ">Sign in </button>
                        <button onClick={() => navigate("/signout", { state: headerState })} className="hover:scale-90 rounded-xl p-2 text-xl  pl-1 pr-1 bg-gradient-to-br from-[#50d3e7] to-[#f8391b]">Sign up</button>
                    </div>
                </div>

                <div className={` w-full seller flex gap-[300px] not-lg:gap-[100px] items-center text-white text-[20px] ${(userLoggedIn &&( userType == 'seller')) ? "" : 'hidden'}`}>
                    
                    <h2>{headerState?.shopname || "Shop Name"}</h2>

                    <ul className="flex gap-4 justify-center items-center">
                        <li className="hover:text-red-500 cursor-pointer">
                            <NavLink
                                to="/"
                                state={headerState}
                                className={({ isActive }) => `${isActive ? 'text-blue-700' : ""} `}> Home</NavLink></li>
                        <li className="hover:text-red-500 cursor-pointer">
                            <NavLink
                                to='sold'
                                state={headerState}
                                className={({ isActive }) => `${isActive ? 'text-blue-700' : ""}`}>Sold</NavLink>
                        </li>
                        <li className="hover:text-red-500 cursor-pointer">
                            <NavLink
                                to='werehouse'
                                state={headerState}
                                className={({ isActive }) => `${isActive ? 'text-blue-700' : ""}`}>Warehouse</NavLink>
                        </li>
                        <li>
                        <img
                        className="w-[90px] h-[50px] mix-blend-darken hover:scale-110 "
                        src="./src/images/doctor_anime.jpg" alt="" />
                        </li>
                    </ul>
                    

                </div>

                <div className={`patient ${userLoggedIn && userType == 'patient' ? "":"hidden"}`}>
                    <h3>Patient Mode activated</h3>
                </div>
            </div>

            {/* <div className={`seller flex gap-4 justify-center items-center text-white text-[20px] ${userLoggedIn ? "" : 'hidden'}`}>
                <div className={`seller flex gap-4 justify-center items-center text-white text-[20px] ${userLoggedIn ? "" : 'hidden'}`}>
                    <h2>company name</h2>

                    <ul className="flex gap-4">
                        <li className="hover:text-red-500 cursor-pointer">
                            <NavLink to="/"
                                className={({ isActive }) => `${isActive ? 'text-blue-700' : ""} `}> Home</NavLink></li>
                        <li className="hover:text-red-500 cursor-pointer">
                            <NavLink
                                to="/about"
                                className={({ isActive }) => `${isActive ? 'text-blue-700' : ""}`}>Sell</NavLink>
                        </li>
                        <li className="hover:text-red-500 cursor-pointer">
                            <NavLink to="/contact/ram"
                                className={({ isActive }) => `${isActive ? 'text-blue-700' : ""}`}>Warehouse</NavLink>
                        </li>

                    </ul>
                </div>

            </div> */}

            {/* <div className="patient ">

            </div> */}

        </div>
    )
}