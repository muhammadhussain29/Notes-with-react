import React from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Note = (props) => {
  return (
    <div className='w-[320px] h-[220px] bg-zinc-600 rounded-[1rem] px-4 py-3 flex flex-col justify-between'>
        <div>
        <h3 className='text-lg text-yellow-500 font-bold capitalize'>{props.heading}</h3>
        <p className='text-sm my-2 overflow-y-scroll h-[120px] no-scrollbar text-zinc-300'>{props.detail}</p>
        </div>

        <div className='flex justify-between items-center'>
            <p className="text-lg text-yellow-500">{props.date}</p>

            <div className='flex justify-between items-center gap-4 text-zinc-600'>
                <button className='text-lg bg-yellow-500 rounded-full p-1 hover:bg-yellow-600'>
            <MdEdit />
                </button>
                <button onClick={()=>{
                    props.deleteNote(props.accesskey)
                }} className='text-lg bg-yellow-500 rounded-full p-1 hover:bg-yellow-600'>
            <MdDelete/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Note