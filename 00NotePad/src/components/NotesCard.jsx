import React from 'react'

const NotesCard = ({title,note,show,deleteNote,handleMore,btnName}) => {

    return (

        <div className='w-fit h-fit max-w-[300px] p-1 m-2 rounded-md bg-neutral-500  border-2 border-purple-950 '>
            <h2 className='bg-neutral-400 p-1 mb-1 rounded-md'>{title}</h2>
            {show === true && <p className='bg-neutral-400 p-1 rounded-md overflow-scroll'>{note}</p>}
            <a  className='text-blue-700' onClick={handleMore} name={title} href="http://" target="_blank" rel="noopener noreferrer">{btnName}</a>
            <button name={title} onClick={deleteNote} className='w-full h-full rounded-md mt-2 bg-red-800 text-center' >delete</button>
        </div>
    )
}

export default NotesCard
