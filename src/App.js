//import logo from "./logo.svg";
import "./App.css";

import Header from "./Components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Broccoli from "./pages/Broccoli"
import Banana from "./pages/Banana";
import Carrot from "./pages/Carrot"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Broccoli" element={<Broccoli />} />
        <Route path="/Banana" element={<Banana />} />
        <Route path="/Carrot" element={<Carrot />} />
      </Routes>
    </div>
  );
}

export default App;
