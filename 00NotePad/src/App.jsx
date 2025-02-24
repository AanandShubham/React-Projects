import { useState, useRef } from 'react'
import './App.css'
import Form from './components/Form'
import NotesCard from './components/NotesCard'

// ctrl + b for files

function App() {
  const [notes, setNotes] = useState([])
  const [btnName,setBtnName] = useState("read more")
  const titleRef = useRef(null)
  const notesRef = useRef(null

  )
  
  const handleClickAdd = () => {
   
    const title = titleRef.current.value;
    const note = notesRef.current.value;
    setNotes([...notes,{title:title,note:note,show:false}])

    titleRef.current.value = notesRef.current.value = ""
  }
  const deleteNote = (e) => {
    // console.log(e.target.name)
    let name = e.target.name
    // console.log(name)
    let newNotes = notes.filter((note)=> note.title !== name)
    // console.log(notes)
    setNotes(newNotes)
    
  }

  const handleMore = (e) => {
    let newNotes = notes.map((note)=>{
      if(note.title === e.target.name)
        note.show = !note.show 
      return note
    })

    setNotes(newNotes)

    // solve the bug read and hide for every one 
    
    setBtnName((prev)=>{
      if(prev === "read more")
        return "hide"
      else{
        return "read more"
      }
    })

  }
  
  
  return (
    <>
      <div className='w-full h-full pt-2 bg-neutral-700'>

        <h1 className='w-[95vmax] h-[5%]  rounded-xl ml-[2.5%] text-center text-neutral-300  bg-neutral-600 text-3xl'>Notes Taking WebSite</h1>

        <Form handleClickAdd={handleClickAdd} titleRef={titleRef} notesRef={notesRef} />

        {/* Notes Card Section  */}

        <div className="w-fit h-fit mt-[1.5%] m-[2.5%]  flex justify-between flex-wrap  gap-2  bg-neutral-600 rounded-2xl">

          { 
            notes.map((note) => 
                  <NotesCard key={note.title} title={note.title}  btnName={btnName} note={note.note} show={note.show} handleMore={handleMore} deleteNote = {deleteNote} />
            )}

        </div>

      </div>
    </>
  )
}

export default App
