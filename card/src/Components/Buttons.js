import React from 'react'
import eicon from "../Images/Icon.png"
import lnkdicon from "../Images/Vector.png"
import '../App.css'

function Buttons() {
  return (
    <div className='btns'>
        <button className='bt-email'><img src={eicon} width="13px" alt=''/>  E-mail</button>
        <button className='bt-lnkdin'><img src={lnkdicon} width="13px" alt=''/> LinkedIn</button>
    </div>
  )
}

export default Buttons