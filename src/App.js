import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from "./components/Header/Header";
import { useState } from 'react';

function App() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <Header openModal={handleOpen}/>
      {open && <Login closeModal={handleClose} open={open}/>}
    </div>
  );
}

export default App;
