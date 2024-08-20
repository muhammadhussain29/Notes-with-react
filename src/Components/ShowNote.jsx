import React, { forwardRef } from 'react'
import { MdCancel } from "react-icons/md";

const ShowNote = forwardRef((props,ref) => {
  return (
    <div ref={ref} className='fixed flex flex-col top-[16.65%] left-[16.65%] z-20 bg-zinc-500 w-2/3 rounded-2xl p-8 h-[80vh]'>
      <button className='absolute top-5 right-5'>
        <MdCancel className='text-yellow-500 text-3xl hover:text-yellow-600' />
      </button>
        <h2 className='text-3xl font-bold capitalize text-yellow-500 mb-5  no-scrollbar overflow-y-auto min-h-20'>Lorem ipsum </h2>
        <p className='text-lg text-white overflow-y-scroll no-scrollbar mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, accusantium atque perspiciatis mollitia omnis molestiae laboriosam expedita reprehenderit architecto, quo nemo temporibus minus asperiores doloremque, veritatis dolorum qui deserunt! Quas?</p>
        <div className='flex justify-between items-center mt-auto '>
          <div>
        <button className='px-6 py-2 my-1 mr-3 uppercase border-zinc-400 rounded-full text-sm text-white bg-yellow-500 hover:bg-yellow-600 font-bold' >edit</button>
        <button className='px-6 py-2 my-1 uppercase border-zinc-400 rounded-full text-sm text-white bg-yellow-500 hover:bg-yellow-600 font-bold' >delete</button>
          </div>
        <p className='text-lg font-bold text-yellow-500'>10-Aug-2024</p>
        </div>
    </div>
  )
})

export default ShowNote