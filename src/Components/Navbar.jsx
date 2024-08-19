import React from 'react'
import { SlDocs } from "react-icons/sl";

// Logic for buttons
let Addnote = (Addtaskpanel) => {
  Addtaskpanel.current.style.display = "block";
}
let Clearall = (setlist) => {
  let chk = confirm("Are you sure you want to delete All notes?")
    if(chk){
      setlist([])
    }
}

const Navbar = (props) => {
  return (
    <nav className='w-full fixed top-0 py-2 flex justify-between items-center px-20 bg-zinc-600 text-zinc-400'>
      <div className="flex gap-2 items-center">
        <div className='text-3xl text-yellow-500 font-bold'>
          <SlDocs/>
        </div>
        <h4 className='text-3xl uppercase font-bold text-yellow-500'>Docs...</h4>
      </div>
      <div>
        {/* Add button */}
        <button onClick={() => {
          Addnote(props.Addtaskpanel)
        }} className='px-3 py-2 my-1 mx-2 uppercase text-zinc-400 rounded-full text-sm hover:text-yellow-500  font-bold' >Add a note</button>
        {/* Clear all button */}
        <button onClick={() => {
          Clearall(props.setlist)
        }}className='px-3 py-2 my-1 mx-2 uppercase text-zinc-400 rounded-full text-sm hover:text-yellow-500  font-bold' >clear All</button>
      </div>
    </nav>
  )
}

export default Navbar