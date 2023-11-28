import React, { useState } from 'react';
import './LoginSignForm.css';
import name_icon from './Assets/person.png';
import email_icon from './Assets/email.png';
import password_icon from './Assets/password.png';

function LoginSignForm(){
  const [action,setAction] = useState("Log In");
  return (
    <>
      <div className='container'>
        <div className='header'>
          <div className='header--text'>{action}</div>
          <div className='header--underline'></div>
        </div>
        <div className='inputs'>
        {action === 'Sign Up' ?  <div className='input'>
            
            <img src={name_icon} alt='name icon' />
            <input type='text' placeholder='Enter Name' />
          </div> : <div></div> }

          <div className='input'>
            <img src={email_icon} alt='email icon' />
            <input type='text' placeholder='Enter Email' />
          </div>

          <div className='input'>
            <img src={password_icon} alt='password_icon' />
            <input type='password' placeholder='Enter Password' />
          </div>
        </div>
        {action === "Log In" ? <div className='forgot-password'>Forgot Password? <span>Click Here</span></div> : <div></div>}
        
        <div className='submit-container'>
          <button className={action === 'Sign Up' ? 'submit' : 'submit grey'} onClick={() => setAction("Sign Up")}>Sign Up</button>
          <button className={action === 'Log In' ? 'submit' : 'submit grey'} onClick={() => setAction("Log In")}>Log In</button>   
        </div>
      </div>
    </>
  )
}
export default LoginSignForm