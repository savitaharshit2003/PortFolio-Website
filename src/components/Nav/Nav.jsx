import React, { useRef } from 'react'
import './Nav.css'
import { Link } from 'react-scroll'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
function Nav() {
    let menu=useRef()
    let mobile=useRef()
    useGSAP(()=>{
      let t1=gsap.timeline()
      t1.from('nav h1',{
        y:-100,
        duration:1,
        opacity:0,
      })
      t1.from('nav ul li',{
         y:-100,
        duration:1,
        opacity:0,
        stagger:1
      })
    })
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