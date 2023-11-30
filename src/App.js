import './App.css';
import { useState } from 'react';

let counter = 0;

export default function App() {
  const [taskList, setTaskList] = useState([]);

  function addTask() {
    const userInput = document.getElementById("userInput").value;

    const task = {id: counter, name: userInput};

    setTaskList([...taskList, task]);

    counter = counter + 1;

    document.getElementById("userInput").value = "";
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <input id="userInput" placeholder="Add a new to do..."></input>
      <button className="addButton" onClick={addTask}>Add</button>
      <TodoList tasks={taskList} setTaskList={setTaskList} />
    </div>
  );
}

function TodoList({ tasks, setTaskList }) {
  function removeTask(id) {
    let remainingTasks = tasks.filter((task) => {
      return task.id !== id
      });
    setTaskList(remainingTasks);
  }

  return (
    <ul className="todoList">
      {tasks.map((task) =>
        <li key={task.id} className="task">
          <button className="checkbox" onClick={() => removeTask(task.id)}></button>
          <span>{task.name}</span>
        </li>
      )}
    </ul>
  )
}