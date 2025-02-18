import { useState, useRef } from 'react'
import './App.css'
import Form from './components/Form'
import NotesCard from './components/NotesCard'

// ctrl + b for files

function App() {
  const [notes, setNotes] = useState([])
  const titleRef = useRef(null)
  const notesRef = useRef(null

  )
  const handleClickAdd = () => {
    console.log("handle Clilcked called from App.jsx")
    // console.log("Title Ref : ", titleRef.current.value)
    // console.log("Notes Ref : ", notesRef.current.value)
    const title = titleRef.current.value;
    const note = notesRef.current.value;
    setNotes([...notes,{title:title,note:note}])
    titleRef.current.value = notesRef.current.value = ""
  }
  return (
    <>
      <div className='w-[100vmax] h-[100vmin] pt-2 bg-neutral-700'>

        <h1 className='w-[95vmax] h-[5%]  rounded-xl ml-[2.5%] text-center text-neutral-300  bg-neutral-600 text-3xl'>Notes Taking WebSite</h1>

        <Form handleClickAdd={handleClickAdd} titleRef={titleRef} notesRef={notesRef} />

        {/* Notes Card Section  */}
        {/* <div>
        {notes.map((note)=>(<div>
          <h2 className='text-black'>{note.name}</h2>
          <h2 className='text-white'>{note.age}</h2>
          </div>
        ))}
        </div> */}

        {/* remove padding if you can */}

        <div className="w-fit h-fit mt-[1.5%] m-[2.5%] p-[1.5%] flex justify-between flex-wrap  gap-2  bg-neutral-600 rounded-2xl">

          { 
            notes.map((note) => 
                  <NotesCard title={note.title} note={note.note} />
            )}

        </div>

      </div>
    </>
  )
}

export default App
