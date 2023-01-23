import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <>
    <div className='Navbar'>
        <h3>OneSchool</h3>
        <ul className='Navlist'>
            <li>Home</li>
            <li>Add</li>
            <li>Programs</li>
            <li>Teachers</li>
        </ul>
        <div className='NavButton'>Contact US</div>

    </div>

    </>
  )
}

export default Navbar
