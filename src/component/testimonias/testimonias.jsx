import React from 'react'
import './testimonias.css'
import Avater1 from '../assets/man1.png'
import Avater2 from '../assets/man2.png'
import Avater3 from '../assets/man3.png'
import Avater4 from '../assets/man4.png'
const Testimonias = () => {
  return (
    <section id='testimonias'>
      <h5>review from clients</h5>
      <h2>Testmonials</h2>
      <div className="container testimonials_container">
        <artical className="testimonials">
          <div className="client_avater">
            <img src={Avater1} alt="Avater one" />
           

          </div>
          <h4 className='client_name' >Arest</h4>
            <small className='client_review'>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quam explicabo voluptas! Maxime, ducimus enim laudantium quod fugit reprehenderit culpa possimus temporibus delectus magnam sed beatae dolore, facere numquam assumenda.
            </small>
        </artical>
        <div><artical className="testimonials">
          <div className="client_avater">
            <img src={Avater2} alt="Avater one" />
            

          </div>
          <h4 className='client_name' >Jack</h4>
            <small className='client_review'>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quam explicabo voluptas! Maxime, ducimus enim laudantium quod fugit reprehenderit culpa possimus temporibus delectus magnam sed beatae dolore, facere numquam assumenda.
            </small>
        </artical></div>
        <div>
        <artical className="testimonials">
          <div className="client_avater">
            <img src={Avater3} alt="Avater one" />
           

          </div>
          <h4 className='client_name' >Warth</h4>
            <small className='client_review'>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quam explicabo voluptas! Maxime, ducimus enim laudantium quod fugit reprehenderit culpa possimus temporibus delectus magnam sed beatae dolore, facere numquam assumenda.
            </small>
        </artical>
        <div>
        <artical className="testimonials">
          <div className="client_avater">
            <img src={Avater4} alt="Avater one" />
           

          </div>
          <h4 className='client_name' >Issaym</h4>
            <small className='client_review'>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quam explicabo voluptas! Maxime, ducimus enim laudantium quod fugit reprehenderit culpa possimus temporibus delectus magnam sed beatae dolore, facere numquam assumenda.
            </small>
        </artical>

        </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonias