import React from 'react'
import png from '../1.png.jpeg'
import { BsFillAwardFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { RiFolderUserFill } from 'react-icons/ri'
import './about.css'

// import ME from '/'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">

          <div className="about_me-image">
            <img src={png} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card' >

              <BsFillAwardFill className='about_icons' />

              <h5>Experience</h5>
              <small>1+ years Working</small>
            </article>

            <article className='about_card' >

              <FaUser className='about_icons' />

              <h5>Clients</h5>
              <small>50+</small>
            </article>

            <article className='about_card' >

              <RiFolderUserFill className='about_icons' />

              <h5>Projects</h5>
              <small>1+ years Working</small>
            </article>
          </div>
          <p className='para' >This is work of my life  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nesciunt autem, iste facilis rem deleniti vero similique accusantium assumenda eum suscipit consectetur. Amet doloremque sunt eius ducimus fugit sapiente voluptate!</p>
        <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>
    </section>

  )
}

export default About