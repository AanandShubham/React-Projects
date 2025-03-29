import { NavLink, useNavigate } from "react-router-dom"
export default function Header() {
    let userLoggedIn = false
    const navigate = useNavigate()

    const detail = {name: "ram",age:34}
    return (
        <div className="w-full h-[12vmin] fixed  text-[#00bf8f] bg-gradient-to-r from-[#eb2d0cec] to-[#04d915ef] flex justify-between p-1">

            <div>
                <img
                    className="w-[90px] h-[70px] mix-blend-darken hover:scale-110 "
                    src="./src/images/medical_logo.jpg" alt="img problem" />
            </div>

            <div className=" flex gap-4 justify-center items-center text-white text-[20px]">
                <ul className="flex gap-4">
                    <li className="hover:text-red-500 cursor-pointer">
                        <NavLink to="/"
                            className={({ isActive }) => `${isActive ? 'text-blue-700' : ""} `}> Home</NavLink></li>
                    <li className="hover:text-red-500 cursor-pointer">
                        <NavLink
                            to="/about"
                            className={({ isActive }) => `${isActive ? 'text-blue-700' : ""}`}>About</NavLink>
                    </li>
                    <li className="hover:text-red-500 cursor-pointer">
                        <NavLink to="/contact/ram"
                            className={({ isActive }) => `${isActive ? 'text-blue-700' : ""}`}
                        >Contact</NavLink>

                        {/* <button onClick={()=>navigate(`/contact/ram,sita,rita`)}>contact</button> */}
                    </li>
                   
                </ul>

                <div className={`flex gap-2 ${userLoggedIn ? 'hidden' : ''}`}>
                    <button onClick={() => navigate("/signin")} className=" hover:scale-90 rounded-xl p-2 text-xl bg-amber-500 pl-1 pr-1 bg-gradient-to-br from-[#f8391b] to-[#50d3e7] ">Sign in </button>
                    <button onClick={() => navigate("/signout")} className="hover:scale-90 rounded-xl p-2 text-xl  pl-1 pr-1 bg-gradient-to-br from-[#50d3e7] to-[#f8391b]">Sign up</button>
                </div>
            </div>

        </div>
    )
}