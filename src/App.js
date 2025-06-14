import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import Header from './components/Header';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/task/:id" element={<EditTask />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
