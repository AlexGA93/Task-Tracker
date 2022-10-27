import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import "./Login.scss";
// import reducers
import { login } from "../../redux/reducers/usersSlice";

function Login({ handleClick }) {
  // local state
  const [localState, setLocalState] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ ...localState }));
    navigate("/dashboard")
  };

  const handleInputs = (e) => {
    setLocalState({ ...localState, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-control form-container">
      <h2>Ingress in your account!</h2>
      <form className="form-container__form" onSubmit={handleSubmit}>
        <InputText
          type="text"
          placeholder="Email..."
          name="email"
          onChange={handleInputs}
        />
        {/* Password */}
        <InputText
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputs}
        />
        {/* Submit */}
        <Button id="submit_button" type="submit" className="p-button-help my-4">
          Submit
        </Button>
        {/* change to register */}
        <p>
          Not an account?{" "}
          <strong>
            <Button onClick={(event) => handleClick("register")}>
              Register
            </Button>
          </strong>
        </p>
      </form>
    </div>
  );
}

export default Login;
