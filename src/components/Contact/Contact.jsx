import React from 'react'
import './Contact.css'
import contact from '../../assets/contact.png'
import './Contact.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);
function Contact() {
  useGSAP(() => {
  gsap.from('.leftcontact img', {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.leftcontact img',
      start: 'top 80%',
      end: 'top 30%',
      scrub: 2,
      
    }
  })
    gsap.from('form', {
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: 'form',
      start: 'top 80%',
      end: 'top 30%',
      scrub: 2,
    
    }
  })
  
  
})

  return (
    <div id="contact">
      <div className="leftcontact">
        <img src={contact}/>
      </div>
      <div className="rightcontact">
        <form action='https://formspree.io/f/xrealqnk'method='POST'>
          <input
            name='Username'
            type='text'
            placeholder='Name'
          />
          <input
            name='Email'
            type='email'
            placeholder='Enter your email...'
          />
          <textarea name='message' id='textarea'placeholder='message me...'></textarea>
          <input type='submit' id='btn' value={'Submit'}/>
        </form>
      </div>
    </div>
  )
}

export default Contact;
