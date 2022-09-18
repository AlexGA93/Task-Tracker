import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
// import reducers
import { register } from "../../../redux/reducers/usersSlice";

function Register() {
  
  const localStateObject = {
    name: "",
    secondName: "",
    age: 0,
    email: "",
    password: "",
    password2: ""
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
    if(localState.password === localState.password2 && localState.age >= 18){
      // We can continue to the process without password 2
      delete localState.password2;
      dispatch(register({ ...localState }));
      navigate('/dashboard');
    } else {
      setPasswordMatch(false);
      setUserIsOlder(false);
      // reset localstate
      setLocalState(localStateObject);
    }
  };

  const onChange = (e) => {
    setLocalState({ ...localState, [e.target.name]: e.target.value });
  };

  return (
    <div className="card-container">
      <Card className="flex flex-column justify-content-center card-form">
        <h1>Register</h1>
        <h2>Register your account!</h2>
        <form onSubmit={handleSubmit}>
          {/* User Name */}
          <InputText
            type="text"
            name="name"
            value={localState.name}
            onChange={onChange}
            placeholder="User First Name..."
            className="ml-4 my-2 flex flex-column justify-content-center"
          />
          {/* User Second Name */}
          <InputText
            type="text"
            name="secondName"
            value={localState.secondName}
            onChange={onChange}
            placeholder="User Second Name..."
            className="ml-4 my-2 flex flex-column justify-content-center"
          />
         
          {/* Age */}
          <InputText
            type="number"
            name="age"
            value={localState.age}
            onChange={onChange}
            placeholder="Age"
            className={ userIsOlder ? "ml-4 flex flex-column justify-content-center" : "ml-4 flex flex-column justify-content-center p-invalid block"}
          />
          {/* Email */}
          <InputText
            type="text"
            name="email"
            value={localState.email}
            onChange={onChange}
            placeholder="Email..."
            className="ml-4 my-2 flex flex-column justify-content-center"
          />
          {/* Password */}
          <InputText
            type="password"
            name="password"
            value={localState.password}
            onChange={onChange}
            placeholder="Password..."
            className="ml-4 my-2 flex flex-column justify-content-center"
          />
          {/* Confirm Password */}
          <InputText
            type="password"
            name="password2"
            value={localState.password2}
            onChange={onChange}
            placeholder={ passwordMatch ? "Repeat Password" : "Passwords must match!"}
            className={ passwordMatch ? "ml-4 flex flex-column justify-content-center" : "ml-4 flex flex-column justify-content-center p-invalid block"}
          />
          

          {/* Submit */}
          <Button type="submit" className="p-button-help my-4">
            Submit
          </Button>
          {/* change to register */}
          <p>
            Do you have an account already?{" "}
            <strong>
              <Link to="/auth/login">Login</Link>
            </strong>
          </p>
        </form>
      </Card>
    </div>
  );
}

export default Register;
