import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from "./components/Header/Header";
import Signup from './components/Register/Signup';
import './App.css';
import Resetpwd from './components/Resetpwd/Resetpwd';
import BottomNavbar from './components/Header/BottomNavbar';
import { Provider } from 'react-redux';
import store from './app/store';
import Product from './components/product/Product';

function App() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const location = useLocation();

  return (
    <div className="App">
      <Provider store={store}>
        {
          location.pathname === '/signup' || location.pathname === '/resetpwd' ?
            <></>
            :
            <>
              <Header openModal={handleOpen} />
              <BottomNavbar />
              {open && <Login closeModal={handleClose} open={open} />}
            </>
        }
        <Routes>
          {/* <Route exact path="/home" element={<Home />} /> */}
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path='/' element={open && <Login closeModal={handleClose} open={open} />} /> */}
          <Route exact path='/signup' element={<Signup closeModal={handleClose} />} />
          <Route exact path='/resetpwd' element={<Resetpwd />} />
          <Route exact path='/product/:id' element={<Product />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
