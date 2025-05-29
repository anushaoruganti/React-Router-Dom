import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>AnuSol</h1>
        <div className='nav-links'>
            <Link to={"/About"}><span id='link'>About</span></Link>
            <Link to={"/Contact"}><span id='link'>Contact</span></Link>
            <Link to={"/Skills"}><span id='link'>Skills</span></Link>
        </div>
    </div>
  )
}

export default Navbar;