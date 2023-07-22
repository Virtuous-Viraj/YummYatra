import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/js/dist/dropdown';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/NavBar';
import HomePage from './views/HomePage';
import CartPage from './views/CartPage';
import Login from './views/Login';
import Register from './views/Register';
import Orders from './views/Orders';
import Admin from './views/Admin';
import Addpizza from "./views/Addpizza";
import Editpizza from "./views/Editpizza";
import Orderslist from "./views/Orderslist";
import Pizzaslist from "./views/Pizzaslist";
import Userslist from "./views/Userslist";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Toaster position='top-center' reverseOrder={false}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<Admin />} >
            <Route path='userlist' element={<Userslist/>}></Route>
            <Route path='pizzaslist' element={<Pizzaslist/>}></Route>
            <Route path='addnewpizza' element={<Addpizza/>}></Route>
            <Route path='orderslist' element={<Orderslist/>}></Route>
            <Route path='editpizza/:pizzaid' element={<Editpizza/>}></Route>
             </Route>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
