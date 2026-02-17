import React, { useRef } from 'react'
import './Nav.css'
import { Link } from 'react-scroll'

function Nav() {
    let menu=useRef()
    let mobile=useRef()
  return (
    <nav>
      <h1>PORTFOLIO</h1>
      <ul className='desktopmenu'>
        <li>
          <Link to="home" smooth duration={500} spy activeClass="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth duration={500} spy activeClass="active">
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth duration={500} spy activeClass="active">
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth duration={500} spy activeClass="active">
            Contact
          </Link>
        </li>
      </ul>
      
      <div className='hamburger' ref={menu} onClick={()=>{
        mobile.current.classList.toggle('activemobile')
        menu.current.classList.toggle('activeham')
      }}>
        <div className='ham'></div>
        <div className='ham'></div>
        <div className='ham'></div>
      </div>
     <ul className='mobilemenu' ref={mobile}>
        <li>
          <Link to="home" smooth duration={500} spy activeClass="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth duration={500} spy activeClass="active">
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth duration={500} spy activeClass="active">
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth duration={500} spy activeClass="active">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav