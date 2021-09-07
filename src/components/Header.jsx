import './Header.css'

import React from 'react'

export default function Header() {
  return (
    <div className='header'>
      <div id='name'>
        <h1>Jared Beneroff</h1>
      </div>
      <div id='nav'>
        <p>About</p>
        <p>Portfolio</p>
        <p>Skills</p>
        <p>Contact</p>
      </div>
    </div>
  )
}
