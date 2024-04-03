import React, { useState } from 'react';
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
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
        <Routes>
          <Route path="/about" element={<><Navbar mode={darkMode ? 'dark' : 'light'} toggleMode={toggleMode} /><Toaster /></>} />
          <Route path="/" element={<><Navbar mode={darkMode ? 'dark' : 'light'} toggleMode={toggleMode} /><TextArea mode={darkMode ? 'dark' : 'light'} toggleMode={toggleMode} /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
