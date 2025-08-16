
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (  
    <div>

    <ul>
        <li>
          {/* Navlink provide a additional class isActive that help to design the navbar  */}
            <NavLink to="/" className={({isActive})=> isActive? "active-link" : ""}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/about" className={({isActive})=> isActive? "active-link" : ""}>About</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard" className={({isActive})=> isActive? "active-link" : ""}>Dasboard</NavLink>
        </li>
    </ul>

    </div>
  )
}

export default Navbar