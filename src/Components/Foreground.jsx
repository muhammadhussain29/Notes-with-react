import React from 'react'
import Note from './Note'

const Foreground = (props) => {

  return (
    <div className='flex shrink-0 flex-wrap gap-8 mx-20 mt-[100px] mb-5'>
      {/* Default note */}
      {props.list.length < 1 && <p className='text-lg text-yellow-500 font-bold'>No Notes Found</p>}
      {/* Listing all notes */}
      {props.list.map((elem, index) => (
        <Note key={elem.id} heading={elem.heading} detail={elem.description} date={elem.date} deleteNote={props.deleteNote} editNote={props.editNote} accesskey={elem.id} />
      )
      )}
    </div>
  )
}

export default Foreground