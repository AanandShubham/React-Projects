import { NavLink, useNavigate } from "react-router-dom"
export default function Header() {
    let userLoggedIn = false
    const navigate = useNavigate()
    return (
        <div className="w-full h-[12vmin] fixed text-[#fff213] bg-gradient-to-r from-[#00bf8f] to-[#b35938] flex justify-between p-1">

            <div>
                <img
                    className="w-[90px] h-[70px] mix-blend-color-burn hover:scale-110 "
                    src="./src/images/medical_logo.jpg" alt="img problem" />
            </div>

            <div className=" flex gap-4 justify-center items-center text-[20px]">
                <ul className="flex gap-4">
                    <li className="hover:text-red-500 cursor-pointer">
                        <NavLink to="/"
                            className={({ isActive }) => `${isActive ? 'text-green-400' : ""}`}> Home</NavLink></li>
                    <li className="hover:text-red-500 cursor-pointer">
                        <NavLink
                            to="/about"
                            className={({ isActive }) => `${isActive ? 'text-green-400' : ""}`}>About</NavLink>
                    </li>
                    <li className="hover:text-red-500 cursor-pointer">
                        <NavLink to="/contact"
                            className={({ isActive }) => `${isActive ? 'text-green-400' : ""}`}
                        >Contact</NavLink>
                    </li>
                </ul>

                <div className={`flex gap-2 ${userLoggedIn ? 'hidden' : ''}`}>
                    <button onClick={() => navigate("/Login")} className=" hover:scale-90 rounded-xl p-2 text-xl bg-neutral-500 pl-1 pr-1 -rotate-20">sign in </button>
                    <button className="hover:scale-90 rounded-xl p-2 text-xl bg-neutral-500 pl-1 pr-1 -rotate-20">sign up</button>
                </div>
            </div>

        </div>
    )
}