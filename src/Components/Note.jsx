import React from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Note = (props) => {
    return (
        <div className='lg:w-[320px] md:w-[260px] w-full h-[220px] shadow-lg shadow-zinc-600/50 bg-blue-700 hover:bg-blue-900 rounded-[1rem] px-4 py-3 flex flex-col justify-between'>
            <div onClick={()=>{
            props.showNote(props.accesskey)
        }}  className='cursor-pointer'>
                <h3 className='text-lg truncate text-white font-bold capitalize'>{props.heading}</h3>
                <p className='text-sm my-2 break-words overflow-y-scroll h-[120px] no-scrollbar text-zinc-300'>{props.detail}</p>
            </div>

            <div className='flex justify-between items-center'>
                <p className="text-lg text-white">{props.date}</p>

                <div className='flex justify-between items-center gap-4 text-blue-700'>

                    <button onClick={() => {
                        props.editNote(props.accesskey)
                    }} className='text-lg bg-white rounded-full p-1 hover:text-blue-900'>
                        <MdEdit />
                    </button>

                    <button onClick={() => {
                        props.deleteNote(props.accesskey)
                    }} className='text-lg bg-white rounded-full p-1 hover:text-blue-900'>
                        <MdDelete />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Note