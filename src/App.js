import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from "./components/Header/Header";
import Signup from './components/Register/Signup';
import Resetpwd from './components/Resetpwd/Resetpwd';
import BottomNavbar from './components/Header/BottomNavbar';
import { Provider } from 'react-redux';
import store from './app/store';
import Product from './components/product/Product';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart';
import Checkout from './components/cart/Checkout';
import Payment from './components/cart/Payment';
import Orders from './components/dashboard/Orders';
import Wishlist from './components/dashboard/Wishlist';
import WishProduct from './components/dashboard/WishProduct';
import SupportTicket from './components/dashboard/SupportTicket';

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
          <Route exact path="/" element={<Home />} />
          <Route exact path='/signup' element={<Signup closeModal={handleClose} />} />
          <Route exact path='/resetpwd' element={<Resetpwd />} />
          <Route exact path='/product/:id' element={<Product />} />
          <Route exact path='/cart/' element={<Cart />} />
          <Route exact path='/checkout/' element={<Checkout />} />
          <Route exact path='/payment/' element={<Payment />} />
          <Route exact path='/orders/' element={<Orders />} />
          <Route exact path='/wishlist/' element={<Wishlist />} />
          <Route exact path='/support-tickets/' element={<SupportTicket />} />
          {/* <Route exact path='/' element={<WishProduct />} /> */}
        </Routes>
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
