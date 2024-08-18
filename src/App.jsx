import React, { useRef, useState } from 'react'
import Background from './Components/Background'
import Navbar from './Components/Navbar'
import Foreground from './Components/Foreground'
import { MdCancel } from "react-icons/md";

const App = () => {

  const Addtaskpanel = useRef(null)

  const [task, settask] = useState({ heading: "", description: "" })
  const [list, setlist] = useState([])

  let headinghandlechange = (e) => {
    settask({ heading: e.target.value, description: task.description })
  }
  let deschandlechange = (e) => {
    settask({ heading: task.heading, description: e.target.value })
  }

  let SaveTask = (e) => {
    e.preventDefault()
    setlist([...list, task])
    settask({heading: "", description: "" })
    Addtaskpanel.current.style.display="none";
  }

  let cancelTask = ()=>{
    Addtaskpanel.current.style.display="none";
  }

  return (
    <>
      <Background />
      <Navbar Addtaskpanel={Addtaskpanel} setlist={setlist}/>
      <Foreground list={list} />



      <div ref={Addtaskpanel} className='hidden fixed top-[16.65%] left-[16.65%] z-20 bg-zinc-500 w-2/3 rounded-2xl p-5'>
        <button onClick={cancelTask} className='absolute top-5 right-5'>
          <MdCancel className='text-yellow-500 text-3xl hover:text-yellow-600' />
        </button>
        <h2 className='text-3xl font-bold capitalize text-yellow-500 text-center'>Add a task</h2>
        <form className='my-10'>

          <input value={task.heading} onChange={headinghandlechange} type="text" placeholder='Heading Here' className='w-full focus:outline-none rounded-xl px-5 py-3 mb-5 bg-zinc-800 text-white' />

          <textarea value={task.description} onChange={deschandlechange} rows='10' placeholder='Description Here' className='w-full focus:outline-none rounded-xl p-5 bg-zinc-800 text-white'></textarea>



          <div className="flex justify-between items-center mt-3">
            <button onClick={SaveTask} className='px-5 py-2 my-1 mx-2 uppercase border-zinc-400 rounded-full text-sm text-white bg-yellow-500 hover:bg-yellow-600 font-bold' >Save</button>
            <p className='text-lg font-bold text-yellow-500'>10-Aug-2024</p>
          </div>
        </form>
      </div>

    </>
  )
}

export default App