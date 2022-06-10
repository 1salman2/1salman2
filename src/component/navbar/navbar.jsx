import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsFillBookmarkFill} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {IoIosContact} from 'react-icons/io'

const navbar = () => {
  return (
    <>
        <nav className='navbar'>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BsFillBookmarkFill/></a>
      <a href="#testimonias"><RiServiceLine/></a>
      <a href="#contact"><IoIosContact/></a>
    </nav>
    </>

  )
}

export default navbar