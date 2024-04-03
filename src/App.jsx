import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // Retrieve darkMode from local storage or default to false
  const savedDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
  const [darkMode, setDarkMode] = useState(savedDarkMode);

  // Save darkMode to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
        <Routes>
          <Route path="/about" element={<><Navbar mode={darkMode ? 'dark' : 'light'} toggleMode={toggleMode} /></>} />
          <Route path="/" element={<><Navbar mode={darkMode ? 'dark' : 'light'} toggleMode={toggleMode} /><TextArea mode={darkMode ? 'dark' : 'light'} toggleMode={toggleMode} /><Toaster  /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
