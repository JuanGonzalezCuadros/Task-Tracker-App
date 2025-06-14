import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const existingTask = tasks.find(t => t.id === id);
    if (existingTask) {
      setTask(existingTask);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || !task.dueDate) {
      setError('Title and Due Date are required.');
      return;
    }
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.map(t => t.id === id ? task : t);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    navigate('/');
  };

  if (!task) return null;

  return (
    <main style={{ maxWidth: '600px', margin: 'auto' }}>
      <h1>Edit Task</h1>
      {error && <p className="error-msg">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={task.title} onChange={handleChange}/>
        <textarea name="description" placeholder="Description" value={task.description} onChange={handleChange}/>
        <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange}/>
        <button type="submit" className="submit-btn">Save Changes</button>
      </form>
    </main>
  );
};

export default EditTask;
