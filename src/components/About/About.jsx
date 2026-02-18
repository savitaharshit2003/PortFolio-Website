import React from 'react'
import './About.css'
import Card from '../Card/Card'
import mern from '../../assets/mern.png'
import reactnative from '../../assets/reactnative.png'
import dsa from '../../assets/dsa.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);
function About() {
  useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.circle',
      scroll:'body',
      start: 'top 60%',
      end: 'top 30%',
      scrub: 2,
      
    }
  })

  // first pair
  tl.from('.circle:nth-of-type(1), .line:nth-of-type(2)', {
    x: -100,
    opacity: 0,
    duration: 1
  })

  // second pair
  tl.from('.circle:nth-of-type(3), .line:nth-of-type(4)', {
    x: -100,
    opacity: 0,
    duration: 1
  })

  // third circle (no line after it)
  tl.from('.circle-line > .circle:nth-child(5)', {
    x: -100,
    opacity: 0,
    duration: 1
  })
    tl.from('.aboutdetails h1', {
    x:-100,
    opacity: 0,
    duration: 1,
    stagger: 0.5
  })
 tl.from('.aboutdetails ul', {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3
  })
  tl.from('.rightabout', {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3
  })
})

  return (
    <div id="about">
        <div className="leftabout">
         <div className="circle-line">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
         </div>
         <div className="aboutdetails">
            <div className="personalinfo">
                <h1>Personal info</h1>
                <ul>
                    <li><span>NAME: </span>HARSHIT</li>
                    <li><span>AGE: </span>22 YEARs</li>
                    <li><span>GENDER: </span>MALE</li>
                    <li><span>LANGUAGE: </span>HINDI,ENGLISH</li>
                </ul>
            </div>
             <div className="education">
                <h1>Education</h1>
                <ul>
                    <li><span>DEGREE: </span>B.TECH(2023-27)</li>
                    <li><span>BRANCH: </span>COMPUTER SCIENCE & ENGINEERING</li>
                    <li><span>CGPA: </span>6.8</li>
                </ul>
            </div>
             <div className="skills">
                <h1>Skills</h1>
                <ul>
                    <li>FULL-STACK DEVELOPER</li>
                    <li>REACT NATIVE DEVELOPER</li>
                    <li>DSA C++</li>
                </ul>
            </div>
         </div>
        </div>
        <div className="rightabout">
            <Card title={'MERN STACK WEB DEVELOPER'} image={mern}/>
            <Card title={'REACT NATIVE DEVELOPER'} image={reactnative}/>
            <Card title={'DSA'} image={dsa}/>
        </div>
    </div>
  )
}

export default About