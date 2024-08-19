import React from 'react'
import Note from './Note'

const Foreground = (props) => {

  // logic for edit note
  let editNote = (id) => {
    props.Addtaskpanel.current.style.display = 'block'
    let note = props.list.filter((e) => {
      return e.id == id
    })[0]
    let Notes = props.list.filter((e) => {
      return e.id != id
    })
    props.setlist(Notes)
    props.setnote({ id: note.id, heading: note.heading, description: note.description })
  }
  // Logic of delete single note
  let deleteNote = (id) => {
    let Notes = props.list.filter((e) => {
      return e.id != id
    })
    props.setlist(Notes)
  }

  return (
    <div className='flex shrink-0 flex-wrap gap-8 mx-20 my-5'>
      {/* Listing all notes */}
      {props.list.map((elem, index) => (
        <Note key={elem.id} heading={elem.heading} detail={elem.description} date={elem.date} deleteNote={deleteNote} editNote={editNote} accesskey={elem.id} />
      )
      )}
    </div>
  )
}

export default Foreground