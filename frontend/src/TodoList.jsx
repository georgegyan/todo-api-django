import { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Fetch tasks from Django API
  useEffect(() => {
    axios.get('http://localhost:8000/api/tasks/')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  // Add a new task
  const handleAddTask = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/tasks/', { title: newTask })
      .then(response => setTasks([...tasks, response.data]))
      .catch(error => console.error('Error adding task:', error));
    setNewTask('');
  };

  return (
    <div>
      <h2>My Tasks</h2>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          required
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;