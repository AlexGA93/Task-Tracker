import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../../components/Login_Form/Login";
import Register from "../../components/Register_Form/Register";

import "./MainPage.scss";

const MainPage = () => {
  // local state to check
  const [authMethod, setAuthMethod] = useState("login");
  const lStorage = localStorage.getItem('x-token');

  const navigate = useNavigate();

  const handleClick = (authIdentifier) => {
    setAuthMethod(authIdentifier);
  };

  // want to check every render if there is token in local storage
  useEffect(()=>{
    if(lStorage) navigate('/dashboard');
  });

  return (
    <div className="main_page-container">
      {/* image */}
      <div className="main_page-container__image"></div>
      {/* sidebar */}
      <div className="main_page-container__sidebar">
        {/* icon */}
        <img
          alt="icon"
          src={require("../../assets/imgs/icons/notepad_small.png")}
        ></img>
        {/* title */}
        <h1>
          Task
          <br />
          Tracker
        </h1>
        <br />
        {/* form component */}
        {authMethod === "login" ? (
          <Login handleClick={handleClick} />
        ) : (
          <Register  handleClick={handleClick}/>
        )}
        {/* footer */}
      </div>
    </div>
  );
};

export default MainPage;
