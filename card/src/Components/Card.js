import React from 'react'
import image from "../Images/Rectangle 90.png"
import '../App.css'
import Buttons from './Buttons'
import About from './About'
import Footer from './Footer'

function Card() {
  return (
    <div className='card'>
           <img className='propic' src={image} alt='pic'/>
           <h1>Laura Smith</h1>
           <p className='prof'>Frontend developer</p>
           <p><a href='dscd'>laurasmith.website</a></p>
           <Buttons/>
           <About/>
           <Footer/>
        </div>
  )
}

export default Card