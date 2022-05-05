import { useContext, useEffect, useCallback } from "react";
import { TaskData } from "./components/Context";
import CreateTask from "./components/CreateTask";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  const { task, setTask, isLoading, setIsLoading } = useContext(TaskData);

  //fetch data from the api

  const fetchTaskDetails=async()=>{
    const response = await fetch('https://kapse-task-default-rtdb.firebaseio.com/task.json');
    const data = await response.json();
    let fetchData=[];
    for(let key in data){
      fetchData.push(data[key])
    }
    console.log(fetchData);
    setTask(fetchData);
  }

  useEffect(()=>{
    fetchTaskDetails();
  },[setTask])
 
  //delete the task handler
  const deleteHandler = (id) => {
    setTask((preVal) => {
      return [...preVal.filter((val, idx) => idx !== id)]
    })
  }

  return (
    <>
      <Header />
      {isLoading && <p>no data</p>}
      {!isLoading && (
        <>
          <CreateTask />
          <div className="taskList">
            {
              task.map((val, idx) => {
                return (
                  <Note
                    key={idx}
                    id={idx}
                    title={val.title}
                    content={val.content}
                    onDelete={deleteHandler}
                  />
                )
              })
            }
          </div>
        </>
      )}

    </>
  );
}

export default App;
