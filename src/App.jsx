import React, { useRef, useState } from 'react'
import Background from './Components/Background'
import Navbar from './Components/Navbar'
import Foreground from './Components/Foreground'
import ShowNote from './Components/ShowNote'
import Addnotepanel from './Components/Addnotepanel'
import { v4 as uuid } from "uuid";

const App = () => {

  // panel for adding and updating note
  const Addtaskpanel = useRef(null)

  // note holds a single note that is inside the addtaskpanel && list holds all the note displayed on screen
  const [note, setnote] = useState({ id: uuid(), heading: "", description: "" })
  const [list, setlist] = useState([])

  // Change Handling function for input fields (two way binding)
  let headinghandlechange = (e) => {
    setnote({ id: note.id, heading: e.target.value, description: note.description })
  }
  let deschandlechange = (e) => {
    setnote({ id: note.id, heading: note.heading, description: e.target.value })
  }

  // Logic for save button inside addtaskpanel
  let saveTask = (e) => {
    if (note.heading.length > 0 || note.description.length > 0) {
      setlist([...list, note])
      setnote({ id: uuid(), heading: "", description: "" })
      Addtaskpanel.current.style.display = "none";
    }
    else {
      alert("Cannot add a Empty note")
    }
  }

  // Logic for cross button on top right corner of addtaskpanel
  let cancelTask = () => {
    Addtaskpanel.current.style.display = "none";
  }

  // Logic for Add note button in navbar
  let Addnote = () => {
    Addtaskpanel.current.style.display = "block";
  }

  // Logic for clear all button in navbar
  let Clearall = () => {
    let chk = confirm("Are you sure you want to delete All notes?")
    if (chk) {
      setlist([])
    }
  }

  // logic for edit note
  let editNote = (id) => {
    Addtaskpanel.current.style.display = 'block'
    let note = list.filter((e) => {
      return e.id == id
    })[0]
    let Notes = list.filter((e) => {
      return e.id != id
    })
    setlist(Notes)
    setnote({ id: note.id, heading: note.heading, description: note.description })
  }

  // Logic of delete single note
  let deleteNote = (id) => {
    let chk = confirm("Are you sure you want to delete?")
    if (chk) {
      let Notes = list.filter((e) => {
        return e.id != id
      })
      setlist(Notes)
    }
  }

  return (
    <>
      <Background />
      <Navbar Addnote={Addnote} Clearall={Clearall} />
      <Foreground list={list} deleteNote={deleteNote} editNote={editNote} />
      <ShowNote />
      <Addnotepanel ref={Addtaskpanel} note={note} saveTask={saveTask} cancelTask={cancelTask} headinghandlechange={headinghandlechange} deschandlechange={deschandlechange} />
    </>
  )
}

export default App