import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';

import './Login.scss';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

function Login() {
  // local state
  const [localState, setLocalState] = useState({ email: "", password: "" });

  const handleSubmit = () => {

  };

  return (
    <div className='card-container'>
      <Card className='flex flex-column justify-content-center card-form'>
        <h1>Login</h1>
        <h2>Ingress in your account!</h2>
        <form onSubmit={handleSubmit} >
          {/* Email */}
          <InputText  type="text" 
                      value={localState.email} 
                      onChange={handleSubmit} 
                      placeholder="Email..."
                      className='flex flex-column justify-content-center align-item-center'
                      />
          {/* Password */}
          <InputText  type="password" 
                      value={localState.password} 
                      onChange={handleSubmit} 
                      placeholder="Password"
                      className='my-2 flex flex-column justify-content-center align-item-center'
                      />
          {/* Submit */}
          <Button type='submit' className='p-button-help my-4'>
            Submit
          </Button>
          {/* change to register */}
          <p>Not an account? <strong><Link to="/auth/register">Register</Link></strong></p>
        </form>
      </Card>
    </div>
  )
}

export default Login