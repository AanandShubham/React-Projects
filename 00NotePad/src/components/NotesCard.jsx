import React from 'react'

const NotesCard = ({title,note,deleteRef}) => {

    return (

        <div className='w-fit h-fit max-w-[300px] p-1 m-2 rounded-md bg-neutral-500  border-2 border-purple-950 '>
            <h2 className='bg-neutral-400 p-1 mb-1 rounded-md'>{title}</h2>
            <p className='bg-neutral-400 p-1 rounded-md overflow-scroll'>{note}</p>
            <button className='w-full h-full rounded-md mt-2 bg-red-800 text-center' ref={deleteRef}>delete</button>
        </div>
    )
}

export default NotesCard
