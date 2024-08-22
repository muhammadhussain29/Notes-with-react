import React, { useEffect, useRef, useState } from 'react'
import Background from './Components/Background'
import Navbar from './Components/Navbar'
import Foreground from './Components/Foreground'
import ShowNote from './Components/ShowNote'
import Addnotepanel from './Components/Addnotepanel'
import { v4 as uuid } from "uuid";
import Swal from 'sweetalert2'

const App = () => {

  let currentDate = ()=>{
    let d = new Date();
    let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    let month = months[d.getMonth()]
    let date = d.getDate() + "-" + month + "-" + d.getFullYear()
    return date
  }

  // Initializing list on startup
  // if it is empty setting as empty else geting notes from storage and displaying them
  let notes;
  if(localStorage.getItem("list") === null){
    notes = [];
  }else{
    notes = JSON.parse(localStorage.getItem("list"))
  }

  // panel for adding and updating note
  const addNotePanel = useRef(null)
  const showNotePanel = useRef(null)

  // note holds a single note that is inside the addNotePanel && list holds all the note displayed on screen
  const [note, setnote] = useState({ id: uuid(), heading: "", description: "", date:currentDate() })
  const [list, setlist] = useState(notes)
  const [showNoteContent, setShowNoteContent] = useState({ id: "", heading: "", description: "", date:"" }) 
  
  // Save or update notes in local storage whenever list changes
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
   
  // Change Handling function for input fields (two way binding)
  let headinghandlechange = (e) => {
    setnote({ id: note.id, heading: e.target.value, description: note.description, date:currentDate()})
  }
  let deschandlechange = (e) => {
    setnote({ id: note.id, heading: note.heading, description: e.target.value, date:currentDate() })
  }

  // Logic for save button inside addNotePanel
  let saveTask = (e) => {
    if (note.heading.length > 0 || note.description.length > 0) {
      setlist([...list, note])
      setnote({ id: uuid(), heading: "", description: "", date:currentDate()})
      addNotePanel.current.style.display = "none";
    }
    else {
      Swal.fire("Cannot add a Empty note... Try again!");
    }
  }

  // Logic for cross button on top right corner of addNotePanel
  let cancelTask = () => {
    setnote({ id: note.id, heading: "", description: "", date:currentDate()})
    addNotePanel.current.style.display = "none";
  }

  // Logic for Add note button in navbar
  let Addnote = () => {
    addNotePanel.current.style.display = "block";
    cancelShowNote()
  }

  // Logic for clear all button in navbar
  let Clearall = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        setlist([])
      }
    });
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
    setnote({ id: note.id, heading: note.heading, description: note.description, date:currentDate() })
    // it will make effect only when we edit note from show note panel
    cancelShowNote();
  }

  // Logic of delete single note
  let deleteNote = (id) => {
    // let chk = confirm("Are you sure you want to delete?")
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      icon: "warning",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        let chk = Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        let Notes = list.filter((e) => {
          return e.id != id
        })
        setlist(Notes)
        // it will make effect only when we delete note fromshow note panel
        cancelShowNote();
      }
    });
  }

  // logic to show note panel
  let showNote = (accessKey) => {
    let note = list.filter((e) => {
      return e.id == accessKey
    })[0]
    showNotePanel.current.style.display = "flex"
    setShowNoteContent({ id: note.id, heading: note.heading, description: note.description, date:note.date })
    cancelTask()
  }

  // logic to close show note panel
  let cancelShowNote = () => {
      showNotePanel.current.style.display = "none"
      setShowNoteContent({ id: "", heading: "", description: "", date:"" })
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