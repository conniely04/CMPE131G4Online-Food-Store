//import logo from "./logo.svg";
import "./App.css";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import React, { useState } from "react";
import Header from "./Components/Header";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="App">
      <Header />
      <main>
        {currentForm == "login" ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </main>
    </div>
  );
}

export default App;
