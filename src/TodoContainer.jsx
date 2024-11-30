import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { Alert } from "@mui/material";

function TodoContainer() {
  const [tasks, setTasks] = useState(["coffee", "macaron", "pizza"]);
  const tasksInput = useRef(null);
  const [error, setError] = useState(true);
  const [isFocused, setIsFocused] = useState(false); 

  const handleOnFocus = () => { 
    setIsFocused(true); 
    setError(true);
}; 

const handleBlur = () => { 
  setIsFocused(false); 
}; 

  const addTask = () => {
    const newTask = tasksInput.current.value.trim();
    if (newTask === "") {
      setError(false);
      return;
    } else {
      setError(true);
    }
    setTasks((prevTasks) => [...prevTasks, newTask]);
    tasksInput.current.value = "";
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="art">
      <h2>To Do List</h2>
      <div className="vorodi">
        <div className={`error ${error ? "hide" : "show"}`}>        
        <Alert severity="error">Please add new task</Alert>
        </div>
      <input className="inputValue" type="text" ref={tasksInput} onBlur={handleBlur} onFocus={handleOnFocus} style={ 
                    { 
                        backgroundColor: isFocused ? 
                            'antiquewhite' : 'white', 
                            borderRadius: "5px"
                    } 
                }  />
      <button className="addBtn" onClick={addTask}>
        +
      </button>
      </div>
      <TodoList tasks={tasks} onRemoveTask={removeTask} />
    </div>
  );
}

export default TodoContainer;
