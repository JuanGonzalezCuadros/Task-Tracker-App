import React from 'react';

const TaskCard = ({ task, onToggle, onDelete }) => {
  return (
    <div className="task-card">
      <div className="info">
        <h3 className={task.completed ? 'completed' : ''}>{task.title}</h3>
        <p className="description">{task.description}</p>
        <p className="due-date">Due: {task.dueDate}</p>
      </div>
      <div className="buttons">
        <button
          onClick={() => onToggle(task.id)}
          className={task.completed ? 'undo' : 'complete'}
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
