import React from 'react'
import './header.css'
import CTA from '../../Cta'
import ME from '../../Me.png.jpg'
import Headersocial from './headersocial'
const Header = () => {
  return (
    <header>
      <div className="header_container"></div>
      <h5>Hello I'm</h5>
      <h1>Salman Aly Qasim</h1>
      <h5 className='text-light'>ServiceNow Developer/React Developer</h5>
      <CTA/>
      <Headersocial/>
      <div className="me">
        <img src={ME} alt="me" />
      </div>
    </header>
  )
}

export default Header