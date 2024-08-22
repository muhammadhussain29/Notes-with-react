import React, { forwardRef } from 'react'
import { MdCancel } from "react-icons/md";

const Addtaskpanel = forwardRef((props, ref) => {

  let preventReload = (e) => {
    e.preventDefault()
    props.saveTask()
  }

  return (
    <div ref={ref} className='hidden fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 bg-white md:w-2/3 w-4/5 rounded-2xl shadow-lg shadow-zinc-600/50'>
      <div className='h-full w-full z-30 flex-col flex  bg-blue-700/20 rounded-2xl md:p-5 p-2'>
      {/* Cancel button */}
      <button onClick={props.cancelTask} className='absolute md:top-5 top-3 md:right-5 right-3'>
        <MdCancel className='text-blue-700 md:text-3xl text-xl hover:text-blue-900' />
      </button>
      <h2 className='md:text-3xl text-xl font-bold capitalize text-blue-700 text-center mr-5'>Add a note</h2>
      <form onSubmit={preventReload} className='my-10'>
        {/* heading box */}
        <input value={props.note.heading} onChange={props.headinghandlechange} type="text" placeholder='Heading Here' className='w-full focus:outline-none rounded-xl px-5 py-3 mb-5 bg-blue-700/20 text-zinc-600' />
        {/* description box */}
        <textarea value={props.note.description} onChange={props.deschandlechange} rows='10' placeholder='Description Here' className='w-full focus:outline-none rounded-xl p-5 bg-blue-700/20 text-zinc-600'></textarea>
        {/* div holds date and save button */}
        <div className="flex justify-between items-center mt-3">
          {/* save button */}
          <button type='submit' className='px-5 py-2 my-1 mx-2 uppercase border-zinc-400 rounded-full text-sm text-white bg-blue-700 hover:bg-blue-900 font-bold' >Save</button>
          {/* Date */}
          <p className='text-lg font-bold text-blue-700'>{props.note.date}</p>
        </div>
      </form>
      </div>
    </div>
  )
})

export default Addtaskpanel