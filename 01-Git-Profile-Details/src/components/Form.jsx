import React from 'react'

const Form = ({ userRef, handleGet }) => {
    return (
        <div>
            <div className='w-[300px] bg-slate-600 rounded-xl p-6 justify-center items-center flex flex-col gap-4 h-fit'>

                <input className='bg-slate-300 py-1 px-2 rounded-md hover:bg-slate-200 ' type="text" placeholder='User name' ref={userRef} />

                <button onClick={handleGet} className='bg-orange-400 w-fit rounded-md px-4 py-2 hover:bg-orange-600 hover:cursor-pointer ' >Get </button>

            </div>
        </div>
    )
}

export default Form
