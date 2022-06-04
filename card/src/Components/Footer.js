import React from 'react'
import twit from '../Images/Twitter Icon.png'
import fb from '../Images/Facebook Icon.png'
import insta from '../Images/Instagram Icon.png'
import git from '../Images/GitHub Icon.png'

function Footer() {
  return (
    <div className='footer'>
        <img src={twit} alt=''/>
        <img src={fb} alt=''/>
        <img src={insta} alt=''/>
        <img src={git} alt=''/>
        </div>
  )
}

export default Footer