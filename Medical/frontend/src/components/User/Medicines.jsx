import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
// write code to get medicines and diases here
const Medicines = () => {

    const loadALLDisease = () => {
        fetch('http://localhost:3000/getalldiases/')
            .then((res) => res.json())
            .then((res) => setDiases(res.disease))
    }

    let [diases, setDiases] = useState([
        { did: 23, dname: 'fever', sid: '3w4d' }
    ])

    const location = useLocation();

    useEffect(() => {
        loadALLDisease()
        console.log(diases)
    }, [])

    return (
        <div className='w-full h-[88vh] bg-amber-100'>
            <div className='w-full h-full flex bg-amber-200'>
                <div className='w-[20%] flex flex-col  items-center p-2 h-full  bg-green-200'>
                    <input className='w-full border-2 p-1 m-2 border-yellow-700 rounded-2xl' type="search" name="" id="" placeholder='disease' />
                    <div className='w-full text-center p-1 m-2'>
                        {
                            diases.map((items) =>
                                <NavLink
                                    to={'/medicines/diases'}
                                    state={{ ...location.state, ...items }}
                                >
                                    <h2 className='w-full p-2 mt-2 font-semibold'>{items.dname}</h2>
                                </NavLink>)
                        }
                    </div>
                </div>
                <div className='w-[80vw] h-full bg-neutral-500'>
                    <Outlet />
                </div>
            </div>

        </div>
    )
}

export default Medicines
