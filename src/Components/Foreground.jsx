import React from 'react'
import Note from './Note'


const Foreground = (props) => {
console.log(props.list);

  let deleteNote = (id)=>{
    
    let Notes = props.list.filter((e)=>{
      console.log(e.accesskey);
      return e.id != id
    })
    props.setlist(Notes)
  }

  return (
        <div className='flex shrink-0 flex-wrap gap-8 mx-20 my-5'>
            {props.list.map((elem,index)=>(
              <Note key={elem.id} heading={elem.heading} detail={elem.description} date={elem.date} deleteNote={deleteNote} accesskey={elem.id}/>
            )
            )}
    </div>    
)
}

export default Foreground