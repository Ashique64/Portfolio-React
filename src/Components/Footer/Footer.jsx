import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div id='footer'>
        <div className="details">
            <h3>Ashique</h3>
            <p>I specialize in building full-stack web applications using PostgreSQL, Python, Django and React js.</p>
        </div>
        <hr />
        <div className="copy">
            <i className='fas fa-copyright'></i><span>2024 Muahammed Ashique. All rights reserved</span>
            <p>Designed by <strong>Muhammed Ashique KP</strong></p>
        </div>
    </div>
  )
}

export default Footer