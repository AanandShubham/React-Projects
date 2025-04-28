import React from 'react'
// write code to get medicines and diases here
const Medicines = () => {
    return (
        <div className='w-full h-[88vh] bg-amber-100'>
            <div className='w-full h-full flex bg-amber-200'>
                <div className='w-[20vw] flex justify-center items-start h-full pt-7 bg-green-200'>
                    <input className='border-2 p-1 border-yellow-700 rounded-2xl' type="search" name="" id=""  placeholder='disease'/>
                    
                </div>
                <div className='w-[80vw] h-full bg-neutral-500'>right</div>
            </div>

        </div>
    )
}

export default Medicines
