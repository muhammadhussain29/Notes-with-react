import React from 'react'
import Note from './Note'

const Foreground = (props) => {

  const data = [
    { 'heading':'hello',
      'detail':'lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore ex soluta veniam perspiciatis, excepturi non officiis ',
      'date':'12-Aug-2024'},
    { 'heading':'hello',
      'detail':'lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore ex soluta veniam perspiciatis, excepturi non officiis ',
      'date':'13-Aug-2024'},
    { 'heading':'hello',
      'detail':'lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore ex soluta veniam perspiciatis, excepturi non officiis ',
      'date':'15-Aug-2024'}
    ]
  return (
        <div className='flex shrink-0 flex-wrap gap-8 mx-20 my-5'>
            {props.list.map((elem,index)=>(
              <Note key={index} heading={elem.heading} detail={elem.description} date={elem.date}/>
            )
            )}
    </div>    
)
}

export default Foreground