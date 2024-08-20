import React, { forwardRef } from 'react'
import { MdCancel } from "react-icons/md";

const Addtaskpanel = forwardRef((props, ref) => {

  let preventReload = (e) => {
    e.preventDefault()
    props.saveTask()
  }

  return (
    <div ref={ref} className='hidden fixed top-[16.65%] left-[16.65%] z-20 bg-zinc-500 w-2/3 rounded-2xl p-5'>
      {/* Cancel button */}
      <button onClick={props.cancelTask} className='absolute top-5 right-5'>
        <MdCancel className='text-yellow-500 text-3xl hover:text-yellow-600' />
      </button>
      <h2 className='text-3xl font-bold capitalize text-yellow-500 text-center'>Add a note</h2>
      <form onSubmit={preventReload} className='my-10'>
        {/* heading box */}
        <input value={props.note.heading} onChange={props.headinghandlechange} type="text" placeholder='Heading Here' className='w-full focus:outline-none rounded-xl px-5 py-3 mb-5 bg-zinc-800 text-white' />
        {/* description box */}
        <textarea value={props.note.description} onChange={props.deschandlechange} rows='10' placeholder='Description Here' className='w-full focus:outline-none rounded-xl p-5 bg-zinc-800 text-white'></textarea>
        {/* div holds date and save button */}
        <div className="flex justify-between items-center mt-3">
          {/* save button */}
          <button type='submit' className='px-5 py-2 my-1 mx-2 uppercase border-zinc-400 rounded-full text-sm text-white bg-yellow-500 hover:bg-yellow-600 font-bold' >Save</button>
          {/* Date */}
          <p className='text-lg font-bold text-yellow-500'>10-Aug-2024</p>
        </div>
      </form>
    </div>
  )
})

export default Addtaskpanel