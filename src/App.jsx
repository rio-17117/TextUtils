import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar mode={darkMode ? 'dark' : 'light'} toggleMode={toggleMode} />
      <TextArea mode={darkMode ? 'dark' : 'light'} toggleMode={toggleMode} />
      <Toaster />
    </div>
  );
}

export default App;
