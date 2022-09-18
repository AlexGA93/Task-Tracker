import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";

import "./Login.scss";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// import reducers
import { login } from "../../../redux/reducers/usersSlice";

function Login() {
  // local state
  const [localState, setLocalState] = useState({ email: "", password: "" });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ ...localState }));
  };

  const handleInputs = (e) => {
    setLocalState({ ...localState, [e.target.name]: e.target.value });
  };

  return (
    <div className="card-container">
      <Card className="flex flex-column justify-content-center card-form">
        <h1>Login</h1>
        <h2>Ingress in your account!</h2>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <InputText
            type="text"
            placeholder="Email..."
            className="flex flex-column justify-content-center align-item-center"
            name="email"
            onChange={handleInputs}
          />
          {/* Password */}
          <InputText
            type="password"
            placeholder="Password"
            className="my-2 flex flex-column justify-content-center align-item-center"
            name="password"
            onChange={handleInputs}
          />
          {/* Submit */}
          <Button type="submit" className="p-button-help my-4">
            Submit
          </Button>
          {/* change to register */}
          <p>
            Not an account?{" "}
            <strong>
              <Link to="/auth/register">Register</Link>
            </strong>
          </p>
        </form>
      </Card>
      {/* Debugging */}
      {/* <h1>User Email Input: {localState.email}</h1>
      <h1>User Password Input: {localState.password}</h1> */}
    </div>
  );
}

export default Login;
