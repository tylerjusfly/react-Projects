import React from 'react'
import '../assets/css/navbar.css'
import NavLogo from '../assets/images/beast.png'

export default function Navbar() {
  return (
    <nav className='Nav--Bar'>
        <img src={NavLogo} alt="beast" className='nav--img'/>
        <h2 className='nav--text'>Questions Generator</h2>
    </nav>
  )
}
