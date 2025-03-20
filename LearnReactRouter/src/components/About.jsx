import { Link, Outlet } from "react-router-dom";

const About = ()=>{

    return (
        <div className="bg-blue-400">

            <h1 className="w-full text-center bg-yellow-300" >About page</h1>

         <Link className="bg-amber-200 p-3" to="Name">Name</Link> 
         
         <Link className='bg-cyan-400 p-2' to="Addr">Addr</Link>

        <Link className="bg-blue-500 p-2" to="/">Home</Link>
        
        <Outlet className='bg-teal-500' />
       
        </div>
    )
}

export default About;