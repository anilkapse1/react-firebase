import React, { useContext, useState } from "react";
import { TaskData } from "./Context";

const CreateTask = () => {
  const { task, setTask } = useContext(TaskData);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [hideData, isHideData] = useState(false); //to toggle title

  const formHandler = (e) => {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    if (note.title === "") {
      alert("please add the value");
      return false;
    } else {
      try {
        await fetch(
          "https://kapse-task-default-rtdb.firebaseio.com/task.json",
          {
            method: "POST",
            body: JSON.stringify(note),
            headers: { "content-type": "application/json" },
          }
        );

        const response = await fetch(
          "https://kapse-task-default-rtdb.firebaseio.com/task.json"
        );
        const data = await response.json();
        let fetchData = [];
        for (let key in data) {
          fetchData.push(data[key]);
        }
        console.log(fetchData);
        setTask(fetchData);
      } catch (error) {}
      setNote({
        title: "",
        content: "",
      });
      isHideData(false);
    }
  };

  //Title toggle section
  const showTitle = () => {
    isHideData(true);
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        {hideData && (
          <input
            type="text"
            value={note.title}
            placeholder="Title"
            name="title"
            onChange={formHandler}
          />
        )}
        <p>
          <textarea
            onClick={showTitle}
            name="content"
            value={note.content}
            placeholder="Add a task.."
            onChange={formHandler}
          ></textarea>
        </p>
        <input type="submit" />
      </form>
    </>
  );
};

export default CreateTask;
