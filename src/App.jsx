import React, { useRef, useState } from 'react'
import Background from './Components/Background'
import Navbar from './Components/Navbar'
import Foreground from './Components/Foreground'
import ShowNote from './Components/ShowNote'
import Addnotepanel from './Components/Addnotepanel'
import { v4 as uuid } from "uuid";

const App = () => {

  // panel for adding and updating note
  const addNotePanel = useRef(null)
  const showNotePanel = useRef(null)

  // note holds a single note that is inside the addNotePanel && list holds all the note displayed on screen
  const [note, setnote] = useState({ id: uuid(), heading: "", description: "" })
  const [list, setlist] = useState([])
  const [showNoteContent, setShowNoteContent] = useState({ id: "", heading: "", description: "" })

  // Change Handling function for input fields (two way binding)
  let headinghandlechange = (e) => {
    setnote({ id: note.id, heading: e.target.value, description: note.description })
  }
  let deschandlechange = (e) => {
    setnote({ id: note.id, heading: note.heading, description: e.target.value })
  }

  // Logic for save button inside addNotePanel
  let saveTask = (e) => {
    if (note.heading.length > 0 || note.description.length > 0) {
      setlist([...list, note])
      setnote({ id: uuid(), heading: "", description: "" })
      addNotePanel.current.style.display = "none";
    }
    else {
      alert("Cannot add a Empty note")
    }
  }

  // Logic for cross button on top right corner of addNotePanel
  let cancelTask = () => {
    addNotePanel.current.style.display = "none";
  }

  // Logic for Add note button in navbar
  let Addnote = () => {
    addNotePanel.current.style.display = "block";
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
    addNotePanel.current.style.display = 'block'
    let note = list.filter((e) => {
      return e.id == id
    })[0]
    let Notes = list.filter((e) => {
      return e.id != id
    })
    setlist(Notes)
    setnote({ id: note.id, heading: note.heading, description: note.description })
    // it will make effect only when we edit note fromshow note panel
    cancelShowNote();
  }

  // Logic of delete single note
  let deleteNote = (id) => {
    let chk = confirm("Are you sure you want to delete?")
    if (chk) {
      let Notes = list.filter((e) => {
        return e.id != id
      })
      setlist(Notes)
      // it will make effect only when we delete note fromshow note panel
      cancelShowNote();
    }
  }

  // logic to show note panel
  let showNote = (accessKey) => {
    let note = list.filter((e) => {
      return e.id == accessKey
    })[0]
    showNotePanel.current.style.display = "flex"
    setShowNoteContent({ id: note.id, heading: note.heading, description: note.description })
  }

  // logic to close show note panel
  let cancelShowNote = () => {
    showNotePanel.current.style.display = "none"
    setShowNoteContent({ id: "", heading: "", description: "" })
  }

  return (
    <>
      <Background />
      <Navbar Addnote={Addnote} Clearall={Clearall} />
      <Foreground list={list} deleteNote={deleteNote} editNote={editNote} showNote={showNote} />
      <ShowNote ref={showNotePanel} showNoteContent={showNoteContent} cancelShowNote={cancelShowNote} deleteNote={deleteNote} editNote={editNote} />
      <Addnotepanel ref={addNotePanel} note={note} saveTask={saveTask} cancelTask={cancelTask} headinghandlechange={headinghandlechange} deschandlechange={deschandlechange} />
    </>
  )
}

export default App