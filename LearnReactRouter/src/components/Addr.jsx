import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Addr = () => {
    return (
        <div className='w-full mt-5 h-fit bg-amber-400'>
            <h3 className='w-full bg-white text-center ' >This is Address</h3>
            <div className='w-full flex gap-5'>

                <div className='w-[200px] flex flex-col h-[300px] mt-3 bg-amber-100'>
                    <NavLink className='bg-slate-300 ' to="fullname">
                        FullName
                    </NavLink>
                    <NavLink className='bg-slate-700 ' to="fulladdr">
                        FullAddr
                    </NavLink>
                    <NavLink className='bg-neutral-50 ' to="/about/Name">
                        Name
                    </NavLink>
                </div>

                <div className='w-full h-[20vh] bg-green-500'>
                    <Outlet />
                </div>

            </div>
        </div>
    )
}

export default Addr;