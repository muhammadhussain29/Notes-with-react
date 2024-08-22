import React from 'react'
import { SlDocs } from "react-icons/sl";

const Navbar = (props) => {
  return (
    <nav className='bg-white w-full fixed top-0 py-2 flex md:flex-row flex-col justify-between items-center md:px-20 px-3'>
      <div className="flex gap-2 items-center">
        <div className='text-3xl font-bold text-blue-700'>
          <SlDocs/>
        </div>
        <h4 className='text-3xl uppercase font-bold text-blue-700'>Docs...</h4>
      </div>
      <div>
        {/* Add button */}
        <button onClick={props.Addnote} className='bg-blue-700 hover:bg-blue-900 text-white md:px-5 px-2 md:py-2 py-1 my-3 mx-2 uppercase rounded-xl md:rounded-full text-sm font-semibold' >Add a note</button>
        {/* Clear all button */}
        <button onClick={props.Clearall}className='bg-blue-700 hover:bg-blue-900 text-white md:px-5 px-2 md:py-2 py-1 my-3 mx-2 uppercase rounded-xl md:rounded-full text-sm font-semibold' >clear All</button>
      </div>
    </nav>
  )
}

export default Navbar