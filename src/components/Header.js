import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Task Manager</Link>
      <Link to="/add-task" className="button">Add Task</Link>
    </nav>
  </header>
);

export default Header;
