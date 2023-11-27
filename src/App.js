//import logo from "./logo.svg";
import "./App.css";
import { useParams } from 'react-router-dom';
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Header from "./Components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoginPage from "./pages/LoginPage";
import Broccoli from "./pages/Broccoli";
import Banana from "./pages/Banana";
import Carrot from "./pages/Carrot";
import Checkout from "./pages/Checkout";
import "./Components/Navbar.css";
import BrowsingPage from "./pages/BrowsingPage";
import "./BrowsingPage.css";
import ItemDetail from "./Components/ItemDetail";
import "./Components/ItemDetail.css";
import ShoppingCartPage from "./pages/ShoppingCart";


import ManagerMainPage from "./ManagersPages/ManagerMainPage";
import Dashboard from "./ManagersPages/Dashboard";
import ProductManagement from "./ManagersPages/ProductManagement";
import OrderManagement from "./ManagersPages/OrderManagement";
import UserManagement from "./ManagersPages/UserManagement";


function App() {

  return (
    <div className="App">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Cabin"
          rel="stylesheet"
        ></link>
      </head>
      <Header />
    
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/" element={<BrowsingPage />} />
        <Route path="/ItemDetail" element={<ItemDetail />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/cart.png" element={<ShoppingCartPage />} />
        <Route path="/Broccoli" element={<Broccoli />} />
        <Route path="/Banana" element={<Banana />} />
        <Route path="/Carrot" element={<Carrot />} />
        <Route path="/ShoppingCart" element={<ShoppingCartPage />} />
        <Route path="/Checkout" element={<Checkout />} />

        {/* Manager related routes */}
        <Route path="/ManagerMainPage/*" element={<ManagerMainPage />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product-management" element={<ProductManagement />} />
            <Route path="order-management" element={<OrderManagement />} />
            <Route path="user-management" element={<UserManagement />} />
            {/* Other manager specific routes */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
