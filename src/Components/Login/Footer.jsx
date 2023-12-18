import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="line"></div>
        <div className="footer-item">
            <h className="footer-text1">You are currently using guest access</h>
            <a href="#" className="footer-text">Home</a>
            <a href="#" className="footer-text">Data retention summary</a>
            <a href="#" className="footer-text">Get the mobile app</a>
        </div>
    </div>
  )
}

export default Footer