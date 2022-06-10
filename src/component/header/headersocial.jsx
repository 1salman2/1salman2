import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'




const Headersocial = () => {
  return (
    <div className='header_social' >
        <a href="https://www.linkedin.com" target="_blank"></a>
        <a href="https://github.com"  target="_blank"></a>
        <a href="https://www.facebook.com/salmanali.qasim.33"  target="_blank"></a>
        <BsFacebook/>
        <BsGithub/>
        <BsLinkedin/>

    </div>
  )
}

export default Headersocial