import { Login } from "../Components/Login";
import { Register } from "../Components/Register";
import React, { useState } from "react";

export default function LoginPage() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="LoginPage">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Cabin"
          rel="stylesheet"
        ></link>
      </head>
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
