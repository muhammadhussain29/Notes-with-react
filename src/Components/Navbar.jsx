import React from 'react'

let Addnote = (Addtaskpanel) => {
  Addtaskpanel.current.style.display = "block";
}
let Clearall = (setlist) => {
  setlist([])
}

const Navbar = (props) => {
  return (
    <nav className='w-full py-2 flex justify-between items-center px-20 bg-zinc-600 text-zinc-400'>
      <div className="logo">
        <h4 className='text-3xl uppercase font-bold text-yellow-500'>Docs...</h4>
      </div>
      <div>

        <button onClick={() => {
          Addnote(props.Addtaskpanel)
        }} className='px-3 py-2 my-1 mx-2 uppercase text-zinc-400 rounded-full text-sm hover:text-yellow-500  font-bold' >Add a note</button>
        <button onClick={() => {
          console.log(props);
          
          Clearall(props.setlist)
        }}className='px-3 py-2 my-1 mx-2 uppercase text-zinc-400 rounded-full text-sm hover:text-yellow-500  font-bold' >clear All</button>
        {/* {['add a note', 'clear all'].map((elem, index) => (
            <button key={index} className='px-3 py-2 my-1 mx-2 uppercase text-zinc-400 rounded-full text-sm hover:text-yellow-500  font-bold' >{elem}</button>
          ))} */}
      </div>
    </nav>
  )
}

export default Navbar