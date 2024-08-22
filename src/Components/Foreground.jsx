import React from 'react'
import Note from './Note'

const Foreground = (props) => {

  return (
    <div className='flex md:flex-row flex-col flex-wrap md:justify-start justify-center lg:gap-15 md:gap-8 gap-3 md:mx-20 mx-8 md:mt-[100px] mt-[150px] mb-5'>
      {/* Default note */}
      {props.list.length < 1 && <p className='text-xl text-blue-700 font-bold md:text-left text-center'>No Notes Found</p>}
      {/* Listing all notes */}
      {props.list.map((elem, index) => (
          <Note key={elem.id} showNote={props.showNote} heading={elem.heading} detail={elem.description} date={elem.date} deleteNote={props.deleteNote} editNote={props.editNote} accesskey={elem.id} />
      )
      )}
    </div>
  )
}

export default Foreground