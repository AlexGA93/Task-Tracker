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

  const handleSubmit = ( e ) => {
    e.preventDefault();
    console.log(localState);
  };

  const onChange = ( e ) => {
    setLocalState({...localState, [e.target.name]: e.target.value});
  };


  return (
    <div className='card-container'>
      <Card className='flex flex-column justify-content-center card-form'>
        <h1>Register</h1>
        <h2>Register your account!</h2>
        <form onSubmit={handleSubmit} >
          {/* Username */}
          <InputText  type="text" 
                      name='username'
                      onChange={onChange} 
                      placeholder="Username..."
                      className='ml-4 my-2 flex flex-column justify-content-center'
                      />
          {/* Email */}
          <InputText  type="text" 
                      name='email'
                      onChange={onChange} 
                      placeholder="Email..."
                      className='ml-4 my-2 flex flex-column justify-content-center'
                      />
          {/* Password */}
          <InputText  type="password" 
                      name='password'
                      onChange={onChange} 
                      placeholder="Password..."
                      className='ml-4 my-2 flex flex-column justify-content-center'
                      />
          {/* Confirm Password */}
          <InputText  type="password" 
                      name='password2'
                      onChange={onChange} 
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