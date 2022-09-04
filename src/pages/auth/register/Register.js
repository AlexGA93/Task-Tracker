import React, {useState} from 'react';

import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';



function Register() {

  const localStateObject = {
    "username": "",
    "email": "",
    "password": "",
    "password2": "",
  };

  // local state
  const [localState, setLocalState] = useState( localStateObject );

  const handleSubmit = ( event ) => {
    event.preventDefault();
    setLocalState({
      username  : event.target.username,
      email     : event.target.email,
      password  : event.target.password,
      password2 : event.target.password2
    })

    console.log(localState);
  };


  return (
    <div className='card-container'>
      <Card className='flex flex-column justify-content-center card-form'>
        <h1>Register</h1>
        <h2>Register your account!</h2>
        <form onSubmit={handleSubmit} >
          {/* Username */}
          <InputText  type="text" 
                      value={localState.username} 
                      onChange={handleSubmit} 
                      placeholder="Username..."
                      className='ml-4 my-2 flex flex-column justify-content-center'
                      />
          {/* Email */}
          <InputText  type="text" 
                      value={localState.email} 
                      onChange={handleSubmit} 
                      placeholder="Email..."
                      className='ml-4 my-2 flex flex-column justify-content-center'
                      />
          {/* Password */}
          <InputText  type="password" 
                      value={localState.password} 
                      onChange={handleSubmit} 
                      placeholder="Password..."
                      className='ml-4 my-2 flex flex-column justify-content-center'
                      />
          {/* Confirm Password */}
          <InputText  type="password" 
                      value={localState.password2} 
                      onChange={handleSubmit} 
                      placeholder="Repeat the password..."
                      className='ml-4 flex flex-column justify-content-center'
                      />
          
          {/* Submit */}
          <Button type='submit' className='p-button-help my-4'>
            Submit
          </Button>
          {/* change to register */}
          <p>Do you have an account already? <strong><Link to="/auth/login">Login</Link></strong></p>
        </form>
      </Card>
    </div>
  )
}

export default Register