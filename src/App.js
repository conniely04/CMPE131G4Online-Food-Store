//import logo from "./logo.svg";
import "./App.css";

import Header from "./Components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import LoginPage from "./pages/LoginPage";
import Broccoli from "./pages/Broccoli";
import Banana from "./pages/Banana";
import Carrot from "./pages/Carrot";

import "./Components/Navbar.css";
import BrowsingPage from "./pages/BrowsingPage";
import "./BrowsingPage.css";
import ShoppingCartPage from "./pages/ShoppingCart";

import { Route, Routes } from "react-router-dom";

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
        <Route path="/Contact" element={<Contact />} />
        <Route path="/cart.png" element={<ShoppingCartPage />} />
        <Route path="/Broccoli" element={<Broccoli />} />
        <Route path="/Banana" element={<Banana />} />
        <Route path="/Carrot" element={<Carrot />} />
        <Route path="/ShoppingCart" element={<ShoppingCartPage />} />
      </Routes>
    </div>
  );
}

export default App;
