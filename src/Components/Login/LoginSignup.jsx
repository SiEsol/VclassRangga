import React, { useEffect } from 'react'
import './LoginSignup.css'
import gunadarma_pic from '../Assets/foto.png'

const LoginSignup = () => {
  useEffect(() => {
    document.title = 'Virtual Class Universitas Gunadarma : Login';
  }, [])
  return (
    <>
      <div className='main'>
        <div className="wrapper">
          <div className="left-side">
            <img className='picture' src={gunadarma_pic} alt=''/>
          </div>
          <div className="right-side">
            <div className="login-item">
              <div className="header">
                <h className="text">Hello!</h>
                <h className="text1">Virtual Class Gunadarma</h>
              </div>
              <div className="input">
                <input type='text' placeholder='Username' />
              </div>
              <div className="input">
                <input type='password' placeholder='Password'/>
              </div>
              <div className="forgot-password">
                <a to="./pages/Dashboard" className='forgot-btn'>Forgot Password</a>
              </div>
              <a href='/Dashboard' className='login-btn'>Login</a>
            </div>
            <div className="login-guest">
              <div className="guest-text">Not a member? <a href="#" className="guest-btn">Login as guest</a></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginSignup