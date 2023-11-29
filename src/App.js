import './App.css';
import { useState } from 'react';

let counter = 0;

export default function App() {
  const [taskList, setTaskList] = useState([]);

  function addTask() {
    const userInput = document.getElementById("userInput").value;

    const task = {id: counter, name: userInput};
    
    setTaskList([...taskList, task]);
    console.log(taskList)

    counter = counter + 1;

    document.getElementById("userInput").value = "";
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <input id="userInput" placeholder="Add a new to do..."></input>
      <button onClick={addTask}>Add</button>
    </div>
  );
}