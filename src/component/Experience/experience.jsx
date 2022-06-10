import React from 'react'
import './experience.css'
import {BsShieldFillCheck} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills i have</h5>
      <h2>My Expereinces</h2>

      <div className="container experience_container">
        <div className="experience_frontend"> 
        <h3>Frontend Development</h3>
        <div className="experience_content">
          <article className='experience_details'>
          <BsShieldFillCheck/>
          <div>
          <h4>HTML</h4>
          <small className='text-light' >Experienced</small>
          </div>
          </article>
          <article className='experience_details'>
          <BsShieldFillCheck/>
         <div>
         <h4>CSS</h4>
          <small className='text-light' >Experienced</small>
         </div>
          </article>
          <article className='experience_details'>
          <BsShieldFillCheck/>
          <div>
          <h4>JAVASCRIPT</h4>
          <small className='text-light' >Experienced</small>
          </div>
          </article>
          <article className='experience_details'>
          <BsShieldFillCheck/>
          <div>
          <h4>REACT</h4>
          <small className='text-light' >Experienced</small>
          </div>
          </article>
          <article className='experience_details'>
          <BsShieldFillCheck/>
         <div>
         <h4>BOOTSTRAP</h4>
          <small className='text-light' >Experienced</small>
         </div>
          </article>
          <article className='experience_details'>
          <BsShieldFillCheck/>
         <div>
         <h4>SERVICENOW DEVELOPER</h4>
          <small className='text-light' >Experienced</small>
         </div>
          </article>
        </div>
        </div>
        
      </div>
    </section>
  )
}

export default Experience