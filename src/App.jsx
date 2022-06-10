import React from 'react'
import './yoo.css'
import Header from './component/header/Header'
import Navbar from './component/navbar/navbar'
import Footer from './component/footer/footer'
import About from './component/about/About'
import Contact from './component/contact/contact'
import Experience from './component/Experience/experience'
import Testomias from './component/testimonias/testimonias'
const App = () => {

  return (
    <>
    <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    <Contact/>
    <Testomias/>
    <Footer/>
    </>
  )
  
}

export default App;