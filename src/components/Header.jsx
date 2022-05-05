import React, { useContext } from 'react'
import { TaskData } from './Context';


const Header = () => {
  const logo = 'https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png';  
  const {task,setTask} = useContext(TaskData);

  return (
    <div className='header'>
        <h3>Keep</h3>
        <img src={logo} alt="demo"/>
        {task.length}
    </div>
  )
}

export default Header