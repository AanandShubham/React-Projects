import React, { useEffect, useRef, useState } from 'react'
import { Navigate, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

export default function Warehouse() {


    const location = useLocation();

    console.log("Warehouse Data  : ", location.state)

    const diasesInputRef = useRef();

    const handleAddDiasesBtnClick = (e) => {

        // write save database codes here 

        const formData = {
            username: location.state.username,
            shopid: location.state.shopid,
            diases: diasesInputRef.current.value
        }

        fetch('http://localhost:3000/adddiases', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.status == 'inserted')
                    loadDiases();
                return res;
            })

        diasesInputRef.current.value = ""
        setShowDialog(false)
    }

    const [showDialog, setShowDialog] = useState(false)

    // write code to get disease at every time 

    const loadDiases = () => {
        fetch(`http://localhost:3000/getDiases/${location.state.shopid}`)
            .then((res) => res.json())
            .then((res) => {
                console.log("Diases Response : ", res.diases);
                if (res.status === 'ok') {
                    setDiases(res.diases);
                    console.log("useEffect Diases :- ", diases)
                }
                return res;
            })
    }

    useEffect(() => {
        loadDiases();
    }, [])

    let [diases, setDiases] = useState([
        { did: 23, dname: 'fever', sid: '3w4d' }
    ])

    const navigate = useNavigate()

    const handleClick = (e) => {
        console.log("click Data : ", e.target.name)

        navigate("/werehouse/diases/", { state: { ...location.state, diases: e.target.value } })
    }

    return (
        <div className='w-screen h-[88vh] p-2 flex gap-3'>
            {/* <h1>Werehouse</h1> */}
            <div className='w-[20vw] p-4  flex flex-col gap-8 rounded-xl bg-slate-500'>
                <div className={`always w-full relative `}>
                    <button onClick={() => setShowDialog(true)}
                        className='w-[50px] h-[50px] absolute top-[73vh] left-[14vw] ' >
                        <img src="./src/images/add_btn.png" alt="" />
                    </button>

                    <div className='w-full  p-2 flex justify-center items-center'>
                        <input className='outline-0 p-2 mt-5 ' type="text" placeholder='search Disease' />
                        <img className='w-[30px] h-[30px] mix-blend-color-burn' src="./src/images/search_icon.jpg" alt="" />
                    </div>
                    <div className=' w-full h-[72vh]  overflow-scroll flex justify-center items-center'>
                        <ul className=' w-full text-xl p-2 flex flex-col gap-6'>

                            {
                                diases.map(
                                    (items) => <li key={items.did} className='w-full text-center p-2 bg-slate-400 rounded-2xl' >
                                        {/* <button onClick={handleClick} value={items.dname} name={items.did}>{items.dname}</button> */}
                                        <NavLink
                                            to="/werehouse/diases/" state={{ ...location.state, ...items }}
                                            className={({ isActive, isPending }) => ` text-white ${isActive ? '' : ''} ${isPending ? 'text-blue-500' : 'text-black'} `}
                                        >
                                            {items.dname}
                                        </NavLink>

                                    </li>
                                )
                            }

                        </ul>


                    </div>
                </div>
                {/* dialog Box  */}
                <div className={`dialog ${showDialog ? '' : 'hidden'}  absolute w-[97vw] flex justify-center items-center h-[83vh] bg-[#1f1c1ce0]`}>
                    <div className=' w-[24vw] h-[30vh] border-2 rounded-xl  '>

                        <div className='w-full border-b-2 flex justify-end'>
                            <button onClick={() => setShowDialog(false)} className=' w-full flex justify-between items-center '>
                                <h1 className='w-full text-center font-bold text-[#9bdae5]'>Add Disease</h1>
                                <img
                                    className='w-[40px] h-[35px] rotate-45 hover:bg-amber-200'
                                    src="./src/images/add_btn.png" alt="" />
                            </button>
                        </div>

                        <div className=' h-ful p-2 flex flex-col items-center gap-6 mt-[40px] justify-center'>
                            <input ref={diasesInputRef} className=' w-full border-2 hover:border-amber-100 focus:border-blue-200 focus:text-white outline-0 p-2 rounded-xl ' type="text" placeholder='Enter Diases' />
                            <button onClick={handleAddDiasesBtnClick} className='border-1 rounded-xl focus:bg-amber-700 hover:bg-amber-200 hover:scale-110 pl-2 pr-2'>ADD</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className='w-[80vw] p-2 rounded-xl bg-slate-700'>

                <Outlet />
            </div>
        </div>
    )
}
