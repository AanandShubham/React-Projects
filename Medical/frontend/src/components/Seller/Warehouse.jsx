import React, { useRef, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

export default function Warehouse() {

    const diasesInputRef = useRef();

    const handleAddDiasesBtnClick = (e) => {
        console.log(diasesInputRef.current.value)
        
        setNames([...names,diasesInputRef.current.value])
        setShowDialog(false)

        // write save database codes here 

        fetch('http://localhost:3000/adddiases',{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:{

            }
        })
    }

    const [showDialog, setShowDialog] = useState(false)
    let [names, setNames] = useState(['cancer', 'fever', 'sugar', 'bone'])
    
    const navigate = useNavigate()

    const handleClick = (e) => {
        console.log("click Data : ", e.target.name)
        const data = {
            'diases': e.target.name,
            'shopname': "medx"
        }
        navigate("/werehouse/diases/", { state: data })
    }

    return (
        <div className='w-screen h-[88vh] p-2 flex  gap-3'>
            {/* <h1>Werehouse</h1> */}
            <div className='w-[20vw] p-4  flex flex-col gap-8 rounded-xl bg-slate-500'>
                <div className={`always w-full ${showDialog ? 'hidden' : ''}`}>
                    <button onClick={() => setShowDialog(true)} className='w-[50px] h-[50px] absolute top-[88vh] left-[16vw] ' >
                        <img src="./src/images/add_btn.png" alt="" />
                    </button>

                    <div className='w-full  p-2 flex justify-center items-center'>
                        <input className='outline-0 p-2 mt-5 ' type="text" placeholder='search Disease' />
                        <img className='w-[30px] h-[30px] mix-blend-color-burn' src="./src/images/search_icon.jpg" alt="" />
                    </div>
                    <div className=' w-full h-[72vh]  overflow-scroll flex justify-center items-center'>
                        <ul className=' w-full text-xl p-2 flex flex-col gap-6'>

                            {
                                names.map(
                                    (items) => <li key={items} className='w-full text-center p-2 bg-slate-400 rounded-2xl' >
                                        <button onClick={handleClick} name={items}>{items}</button>
                                    </li>
                                )
                            }

                        </ul>
                    </div>
                </div>
                {/* dialog Box  */}
                <div className={`dialog ${showDialog ? '' : 'hidden'}`}>
                    <div className=' w-[18vw] h-[30vh] border-2 rounded-xl absolute left-[1.5vw] top-[40vh]'>

                        <div className='w-full border-b-2 flex justify-end'>
                            <button onClick={() => setShowDialog(false)} className=''>
                                <img
                                    className='w-[40px] h-[35px] rotate-45'
                                    src="./src/images/add_btn.png" alt="" />
                            </button>
                        </div>
                        <div className=' h-ful p-2 flex flex-col items-center gap-6 mt-[40px] justify-center'>
                            <input ref={diasesInputRef} className=' w-full border-1 text-white p-2 rounded-xl ' type="text" placeholder='Enter Diases' />
                            <button onClick={handleAddDiasesBtnClick} className='border-1 rounded-xl pl-2 pr-2'>ADD</button>
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
