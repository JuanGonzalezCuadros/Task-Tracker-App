import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !dueDate) {
      setError('Title and Due Date are required.');
      return;
    }

    const newTask = {
      id: uuidv4(),
      title,
      description,
      dueDate,
      completed: false,
    };

    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = [...storedTasks, newTask];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    navigate('/');
  };

  return (
    <main style={{ maxWidth: '600px', margin: 'auto' }}>
      <h1>Add New Task</h1>
      {error && <p className="error-msg">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)}/>
        <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)}/>
        <button type="submit" className="submit-btn">Add Task</button>
      </form>
    </main>
  );
};

export default AddTask;
