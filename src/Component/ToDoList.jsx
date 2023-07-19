import React, { useState } from 'react';

const ToDoList = ({title}) => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    // Function to handle the input field changes
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
  // Function to add a new task to the list
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]);
      setNewTask(''); // Clear the input field after adding a task
    }
  };
  // Function to remove a task from the list
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
    return (
        <div>
            <h1>{title}</h1>
             {/* Task Input Field */}
      <input type="text" value={newTask} onChange={handleInputChange} />
      <button onClick={addTask}>Add Task</button>

      {/* Task List */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
        </div>
    );
};

export default ToDoList;