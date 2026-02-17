import React from 'react'
import './Home.css'
import man from '../../assets/man.png'
import TypingEffect from 'react-typing-effect'
import { Typewriter } from 'react-simple-typewriter'
function Home() {
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
          <button>HIRE ME</button>
        </div>
      </div>

      <div className="righthome">
        <img src={man} alt="developer illustration" />
      </div>
    </div>
  )
}

export default Home