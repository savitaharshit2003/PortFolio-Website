import React from 'react'
import './Projects.css'
import Card from '../Card/Card'
import va from '../../assets/va.png'
import fw from '../../assets/fw.png'
import cb from '../../assets/cb.png'
import ecom from '../../assets/ecom.png'
import fd from '../../assets/fd.png'
import po from '../../assets/po.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);
function Projects() {
  useGSAP(() => {
  gsap.from('#para', {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '#para',
      start: 'top 80%',
      end: 'top 30%',
      scrub: 2,
      
    }
  })
    gsap.from('.slider', {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.slider',
      start: 'top 80%',
      end: 'top 30%',
      scrub: 2,
    
    }
  })
})
  return (
    <div id="projects">
     <h1 id='para'>2+ YEARS SELF EXPERIENCED IN PROJECTS</h1>
    <div className="slider">
      <Card title={'E-COMMERCE'} image={ecom}/>
      <Card title={'FOOD DELIVERY'} image={fd}/>
      <Card title={'VIRTUAL ASSISTANT'} image={va}/>
      <Card title={'AI CHATBOT'} image={cb}/>
      <Card title={'AI POWRED FITNESS WEBSITE'} image={fw}/>
      <Card title={'PORTFOLIO'} image={po}/>
    </div>
    </div>
  )
}

export default Projects