//import logo from "./logo.svg";
import "./App.css";

import Header from "./Components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
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
      </Routes>
    </div>
  );
}

export default App;
