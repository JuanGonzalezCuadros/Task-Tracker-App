import React, { useEffect, useState } from 'react';
import TaskCard from '../components/TaskCard';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const updatedTasks = tasks.filter(task => task.id !== id);
      setTasks(updatedTasks);
    }
  };

  return (
    <main>
      <h1>All Tasks</h1>
      {tasks.length === 0 ? <p>No tasks yet.</p> : tasks.map(task => (
        <TaskCard key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
      ))}
    </main>
  );
};

export default Dashboard;
