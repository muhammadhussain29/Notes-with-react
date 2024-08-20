import React from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Note = (props) => {
    return (
        <div onClick={()=>{
            props.showNote(props.accesskey)
        }} className='w-[300px] h-[220px] cursor-pointer bg-zinc-600 rounded-[1rem] px-4 py-3 flex flex-col justify-between'>
            <div>
                <h3 className='text-lg truncate text-yellow-500 font-bold capitalize'>{props.heading}</h3>
                <p className='text-sm my-2 break-words overflow-y-scroll h-[120px] no-scrollbar text-zinc-300'>{props.detail}</p>
            </div>

            <div className='flex justify-between items-center'>
                <p className="text-lg text-yellow-500">{props.date}</p>

                <div className='flex justify-between items-center gap-4 text-zinc-600'>

                    <button onClick={() => {
                        props.editNote(props.accesskey)
                    }} className='relative top-0 text-lg bg-yellow-500 rounded-full p-1 hover:bg-yellow-600'>
                        <MdEdit />
                    </button>

                    <button onClick={() => {
                        props.deleteNote(props.accesskey)
                    }} className='relative top-0 text-lg bg-yellow-500 rounded-full p-1 hover:bg-yellow-600'>
                        <MdDelete />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Note