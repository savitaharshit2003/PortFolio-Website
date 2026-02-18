import React from 'react'
import './Home.css'
import man from '../../assets/man.png'
import TypingEffect from 'react-typing-effect'
import { Typewriter } from 'react-simple-typewriter'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
function Home() {
  useGSAP(()=>{
   let tl1=gsap.timeline();
      tl1.from('.line1',{
        y:80,
        duration:1,
        opacity:0,
      })
      tl1.from('.line2',{
         y:80,
        duration:1,
        opacity:0,
      })
      tl1.from('.line3',{
         y:80,
        duration:1,
        opacity:0,
      })
      gsap.from('.righthome img',{
         x:200,
        duration:1,
        opacity:0,
      })
    })
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">HARSHIT</div>
          <div className="line3">
            <Typewriter
               words={['Aspiring Full Stack Developer','Building Web & Mobile Applications']}
               loop
               cursor
                cursorStyle='_'
               typeSpeed={70}
               deleteSpeed={60}
            />
          </div>
          {/* <button>HIRE ME</button> */}
        </div>
      </div>

      <div className="righthome">
        <img src={man} alt="developer illustration" />
      </div>
    </div>
  )
}

export default Home