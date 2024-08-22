import React, { forwardRef } from 'react'
import { MdCancel } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const ShowNote = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='hidden fixed flex-col top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 bg-white md:w-2/3 w-4/5 rounded-2xl h-[75vh] shadow-lg shadow-zinc-600/50'>
        <h2 className='text-blue-700/10 md:text-9xl text-7xl fixed z-[15] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' >Docs...</h2>
      <div className='h-full w-full z-30 flex-col flex  bg-blue-700/20 md:p-8 p-3 rounded-2xl'>
      <button onClick={props.cancelShowNote} className='absolute md:top-5 top-3 md:right-5 right-3'>
        <MdCancel className='text-blue-700 md:text-3xl text-xl hover:text-blue-900' />
      </button>
      <h2 className='md:text-3xl text-xl font-bold capitalize text-blue-700 mb-5 no-scrollbar overflow-y-auto md:min-h-20 md:max-h-40 min-h-10 max-h-20 mr-5'>
        {props.showNoteContent.heading}</h2>
      <p className='text-lg text-zinc-500 overflow-y-scroll no-scrollbar mb-5'>
        {props.showNoteContent.description}</p>
      <div className='flex justify-between items-center mt-auto '>
        <div>
          <button onClick={() => {
            props.editNote(props.showNoteContent.id)
          }} className='md:text-left text-center md:w-auto md:h-auto h-9 w-9 md:px-4 md:py-2 p-2 my-1 md:mr-3 mr-2 uppercase border-zinc-400 rounded-full text-sm text-white bg-blue-700 hover:bg-blue-900 font-bold' ><span className='md:inline hidden'>edit</span><MdEdit className='text-lg md:mb-[2px] mb-1 inline-block md:ml-2' /></button>
          <button onClick={() => {
            props.deleteNote(props.showNoteContent.id)
          }} className='md:text-left text-center md:w-auto md:h-auto h-9 w-9 md:px-4 md:py-2 p-2 my-1 uppercase border-zinc-400 rounded-full text-sm text-white bg-blue-700 hover:bg-blue-900 font-bold' ><span className='md:inline hidden'>delete</span><MdDelete className='text-lg md:mb-[2px] mb-1 inline-block md:ml-2' /></button>
        </div>
        <p className='md:text-lg text-sm font-bold text-blue-700'>{props.showNoteContent.date}</p>
      </div>
      </div>
    </div>
  )
})

export default ShowNote