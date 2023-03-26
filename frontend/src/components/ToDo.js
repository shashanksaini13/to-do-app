import React from 'react'
import { BiEdit } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"


const ToDo = ({ text, date, updateMode, deleteToDo }) => {
  const days = Math.round(Math.abs((new Date() - new Date(date)) / (24 * 60 * 60 * 1000))) + 1;
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className={days <= 3 ? "date" : "nonUrgent"}>{
        !isNaN(days) ? days + (days != 1 ? " days left!" : " day left!") : "No Due Date"
      }

      </div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className='icon' onClick={deleteToDo} />

      </div>
    </div>
  )
}

export default ToDo
