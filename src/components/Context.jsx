import React, { createContext, useState } from 'react'

export const TaskData = createContext();

export const Context = ({children}) => {
    const [task, setTask] = useState([]);
    const [isLoading,setIsLoading]=useState(false);

    return (
        <TaskData.Provider value={{task, setTask,isLoading,setIsLoading}}>
            {children}
        </TaskData.Provider>
    )
}

export default Context