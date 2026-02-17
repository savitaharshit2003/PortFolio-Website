import React from 'react'
import './About.css'
function About() {
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
                    <li><span>NAME:</span>HARSHIT</li>
                    <li><span>AGE:</span>22 YEARs</li>
                    <li><span>GENDER:</span>MALE</li>
                    <li><span>LANGUAGE:</span>HINDI,ENGLISH</li>
                </ul>
            </div>
             <div className="education">
                <h1>Education</h1>
                <ul>
                    <li><span>DEGREE:</span>B.TECH</li>
                    <li><span>BRANCH:</span>COMPUTER SCIENCE & ENGINEERING</li>
                    <li><span>CGPA:</span>6.8</li>
                </ul>
            </div>
             <div className="skills">
                <h1>Skills</h1>
                <ul>
                    <li>FULL-STACK DEVELOPER</li>
                    <li>DSA</li>
                    <li>C++</li>
                </ul>
            </div>
         </div>
        </div>
        <div className="rightabout">

        </div>
    </div>
  )
}

export default About