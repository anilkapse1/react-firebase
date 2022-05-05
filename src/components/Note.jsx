import React, { useContext } from 'react'
import { TaskData } from './Context'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({id,title,content,onDelete}) => {
  const {task,setTask} = useContext(TaskData);
  
  return (
    <div className='task'>
       <h3>{title}</h3>
       <p>{content}</p>

       <IconButton color="secondary" onClick={()=>onDelete(id)} aria-label="delete">
          <DeleteIcon />
        </IconButton>
       
    </div>
  )
}

export default Note