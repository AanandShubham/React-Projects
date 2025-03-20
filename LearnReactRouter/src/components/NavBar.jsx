import { Link } from "react-router-dom";
const NavBar = ()=>{
    return (
        <div className="w-full h-[6vh] bg-amber-100">

            <Link to="/">
                Home
            </Link>
            <Link to="/about">About</Link>


        </div>
    )
}

export default NavBar;