import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./Register.scss";
import { useDispatch } from "react-redux";
// import reducers
import { register } from "../../redux/reducers/usersSlice";

function Register({ handleClick }) {
  const localStateObject = {
    name: "",
    secondName: "",
    age: 0,
    email: "",
    password: "",
    password2: "",
  };

  // local state
  const [localState, setLocalState] = useState(localStateObject);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [userIsOlder, setUserIsOlder] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // check for passwords matching
    if (localState.password === localState.password2 && localState.age >= 18) {
      // We can continue to the process without password 2
      delete localState.password2;
      dispatch(register({ ...localState }));
      navigate("/dashboard");
    } else {
      setPasswordMatch(false);
      setUserIsOlder(false);
      // reset localstate
      setLocalState(localStateObject);
    }
  };

  const handleInputs = (e) => {
    setLocalState({ ...localState, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-control form-container">
      <h2>Register your account!</h2>
      <form className="form-container__form" onSubmit={handleSubmit}>
        {/* First Name */}
        <InputText
          type="text"
          placeholder="User First Name..."
          className=" my-2"
          name="name"
          // value={localState.name}
          onChange={handleInputs}
        />
         {/* User Second Name */}
        <InputText
          type="text"
          name="secondName"
          // value={localState.secondName}
          onChange={handleInputs}
          placeholder="User Second Name..."
          className=" my-2 "
        />
        {/* Age */}
        <InputText
          type="number"
          name="age"
          // value={localState.secondName}
          onChange={handleInputs}
          placeholder="Age..."
          className={
            userIsOlder ? "my-2" : "p-invalid block"
          }
        />
        {/* Email*/}
        <InputText 
          type="text"
          name="email"
          // value={localState.email}
          onChange={handleInputs}
          placeholder="Email..."
          className="my-2 "
        />
        {/* Password*/}
        <InputText 
          type="password"
          name="password"
          // value={localState.password}
          onChange={handleInputs}
          placeholder="Password..."
          className="my-2 "
        />
        {/* Repeat Password*/}
        <InputText 
          type="password"
          name="password2"
          // value={localState.password2}
          onChange={handleInputs}
          placeholder={passwordMatch ? "Repeat Password..." : "Passwords must match!"}
          className={
            passwordMatch
              ? "my-2 "
              : "my-2 p-invalid block"
          }
        />
        {/* Sumit */}
        <Button type="submit" className="p-button-help mt-4">
          Submit
        </Button>
        {/* change to register */}
        <p>
          Do you have an account already?{" "}
          <strong>
          <Button onClick={(event) => handleClick("login")}>Register</Button>
          </strong>
        </p>
      </form>
    </div>
  );
}

export default Register;
