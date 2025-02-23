import React from 'react'

const Form = ({handleClickAdd,titleRef,notesRef}) => {

    const deleteNotes = ()=>{
        const arr = [{}]

        arr.map((note)=>(note.title != titleRef.current.value))
    }
    return (
        <div>
            <div className=" w-[95vmax] h-[90%] mt-[1.5%] ml-[2.5%] pb-[1.5%] flex flex-col items-center bg-neutral-600 rounded-2xl">

                <input ref={titleRef} className='w-[80%] h-[7%] mt-[3vh] rounded-2xl bg-neutral-500 p-4' type="text" placeholder='  Title' />

                <textarea ref={notesRef} required className='w-[80%] h-[30%] mt-[3vh] rounded-2xl bg-neutral-500 p-4' name="" id=""></textarea>

                <button onClick={handleClickAdd} className='bg-slate-600 mt-[2vh] p-2 rounded-md text-slate-300'>Add Notes</button>
                
            </div>
        </div>
    )
}

export default Form
