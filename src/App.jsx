import { Toaster } from 'react-hot-toast';
import './App.css';
// import {  } from "./navbar";
import Navbar from "./components/Navbar"
import TextArea from "./components/TextArea"

function App() {
  return (
    <>
      <Navbar />
      <TextArea />
      <Toaster />
    </>
  );
}
export default App;
