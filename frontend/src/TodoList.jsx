import { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Fetch tasks from Django API
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get('http://localhost:8000/api/tasks/')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  };

  // Add a new task
  const handleAddTask = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/tasks/', { title: newTask })
      .then(() => {
        fetchTasks(); // Refresh the task list
        setNewTask('');
      })
      .catch(error => console.error('Error adding task:', error));
  };

  // Delete a task
  const handleDeleteTask = (taskId) => {
    axios.delete(`http://localhost:8000/api/tasks/${taskId}/`)
      .then(() => fetchTasks()) // Refresh the task list
      .catch(error => console.error('Error deleting task:', error));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">My Tasks</h2>
      <form onSubmit={handleAddTask} className="flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className="border p-2 flex-1"
          required
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>
      <ul className="space-y-2">
        {tasks.map(task => (
          <li 
            key={task.id} 
            className="flex justify-between items-center border-b py-2"
          >
            <span>{task.title}</span>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;