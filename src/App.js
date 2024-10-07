import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import TodoList from './components/TodoList';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-tr from-purple-600 via-pink-500 to-yellow-500">
        <nav className="bg-gray-800 p-5 shadow-lg">
          <ul className="flex space-x-6 justify-center text-white font-semibold">
            <li>
              <Link to="/" className="hover:text-yellow-300 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/todos" className="hover:text-yellow-300 transition-colors duration-200">
                Todo List
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<TodoList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
