import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from "./components/Header/Header";
import Register from './components/Register/Register';
import './App.css';

function App() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <Router>
      <Header openModal={handleOpen}/>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path='/' element={open && <Login closeModal={handleClose} open={open}/>} />
        
        <Route exact path="/register" element={<Register/>} />
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
