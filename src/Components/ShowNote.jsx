import React, { forwardRef } from 'react'
import { MdCancel } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const ShowNote = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='hidden fixed flex-col top-[16.65%] left-[16.65%] z-20 bg-zinc-500 w-2/3 rounded-2xl p-8 h-[80vh]'>
      <button onClick={props.cancelShowNote} className='absolute top-5 right-5'>
        <MdCancel className='text-yellow-500 text-3xl hover:text-yellow-600' />
      </button>
      <h2 className='text-3xl font-bold capitalize text-yellow-500 mb-5  no-scrollbar overflow-y-auto min-h-20'>
        {props.showNoteContent.heading}</h2>
      <p className='text-lg text-white overflow-y-scroll no-scrollbar mb-5'>
        {props.showNoteContent.description}</p>
      <div className='flex justify-between items-center mt-auto '>
        <div>
          <button onClick={() => {
            props.editNote(props.showNoteContent.id)
          }} className='px-4 py-2 my-1 mr-3 uppercase border-zinc-400 rounded-full text-sm text-white bg-yellow-500 hover:bg-yellow-600 font-bold' >edit <MdEdit className='text-lg mb-[2px] inline-block ml-2 ' /></button>
          <button onClick={() => {
            props.deleteNote(props.showNoteContent.id)
          }} className='px-4 py-2 my-1 uppercase border-zinc-400 rounded-full text-sm text-white bg-yellow-500 hover:bg-yellow-600 font-bold' >delete <MdDelete className='text-lg mb-[2px] inline-block ml-2 ' /></button>
        </div>
        <p className='text-lg font-bold text-yellow-500'>10-Aug-2024</p>
      </div>
    </div>
  )
})

export default ShowNote