import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact' >
<h5>Get in Touch</h5>
<h2>Contact Me</h2>
<div className="container contact container">
<article className='contact_option' >
  <HiOutlineMail/>
    <h2>EMAIL</h2>
    <h5>Salman.ali.qasim@gmail.com</h5>
    <a href="mailto:salman.ali.qasim@gmail">Send a message</a>
  </article>

<div className="contact_options">
  <article className='contact_option' >
  <BsWhatsapp/>
    <h2>WHATSAPP</h2>
    <h5>+923084331587</h5>
    <a href="https://www.facebook.com/salmanali.qasim.33">Send a message</a>
  </article>

</div>
<div className="contact_options">
  <article className='contact_option' >
  <BsInstagram/>
    <h2>INSTAGRAM</h2>
    <h5>Salman_qasim01</h5>
    <a href="https://www.instagram.com/accounts/login/?next=/salman_qasim01/">Send a message</a>
  </article>
 
</div>

</div>

    </section>
  )
}

export default Contact