import React, { useRef, useState } from 'react'
import Background from './Components/Background'
import Navbar from './Components/Navbar'
import Foreground from './Components/Foreground'
import ShowNote from './Components/ShowNote'
import { MdCancel } from "react-icons/md";
import { v4 as uuid } from "uuid";

const App = () => {

  // panel for adding and updating note
  const Addtaskpanel = useRef(null)

  // note holds a single note that is inside the addtaskpanel && list holds all the note displayed on screen
  const [note, setnote] = useState({ id: uuid(), heading: "", description: "" })
  const [list, setlist] = useState([])

  // Change Handling function for input fields (two way binding)
  let headinghandlechange = (e) => {
    setnote({ id: note.id, heading: e.target.value, description: note.description })
  }
  let deschandlechange = (e) => {
    setnote({ id: note.id, heading: note.heading, description: e.target.value })
  }

  // Logic for save button inside addtaskpanel
  let SaveTask = (e) => {
    e.preventDefault()
    if(note.heading.length > 0 || note.description.length > 0){
      setlist([...list, note])
      setnote({ id: uuid(), heading: "", description: "" })
      Addtaskpanel.current.style.display = "none";
    }
    else{
      alert("Cannot add a Empty note")
    }
  }

  // Logic for cross button on top right corner of addtaskpanel
  let cancelTask = () => {
    Addtaskpanel.current.style.display = "none";
  }

  return (
    <>
      <Background />
      <Navbar Addtaskpanel={Addtaskpanel} setlist={setlist} />
      <Foreground Addtaskpanel={Addtaskpanel} setnote={setnote} list={list} setlist={setlist} />
      <ShowNote/>

      {/* Add task panel */}
      <div ref={Addtaskpanel} className='hidden fixed top-[16.65%] left-[16.65%] z-20 bg-zinc-500 w-2/3 rounded-2xl p-5'>
        {/* Cancel button */}
        <button onClick={cancelTask} className='absolute top-5 right-5'>
          <MdCancel className='text-yellow-500 text-3xl hover:text-yellow-600' />
        </button>
        <h2 className='text-3xl font-bold capitalize text-yellow-500 text-center'>Add a note</h2>
        <form className='my-10'>
          {/* heading box */}
          <input value={note.heading} onChange={headinghandlechange} type="text" placeholder='Heading Here' className='w-full focus:outline-none rounded-xl px-5 py-3 mb-5 bg-zinc-800 text-white' />
          {/* description box */}
          <textarea value={note.description} onChange={deschandlechange} rows='10' placeholder='Description Here' className='w-full focus:outline-none rounded-xl p-5 bg-zinc-800 text-white'></textarea>
          {/* div holds date and save button */}
          <div className="flex justify-between items-center mt-3">
            {/* save button */}
            <button onClick={SaveTask} className='px-5 py-2 my-1 mx-2 uppercase border-zinc-400 rounded-full text-sm text-white bg-yellow-500 hover:bg-yellow-600 font-bold' >Save</button>
            {/* Date */}
            <p className='text-lg font-bold text-yellow-500'>10-Aug-2024</p>
          </div>
        </form>
      </div>

    </>
  )
}

export default App