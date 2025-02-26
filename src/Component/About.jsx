import React from 'react'
import NavDropdownExample from './NavBar'
import Brainlight from '../Pictures/Quizpics/lightbrain.jpg'
import Glassesbrain from '../Pictures/Quizpics/brainglas.jpg'
import Techbrain from '../Pictures/Quizpics/braintech.jpg'
import '../Styles/About.css'


const About = () => {
  return (
    <div>
        <NavDropdownExample/>

      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Glassesbrain} class="d-block h-50 w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Brainlight} class="d-block h-50 w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Techbrain} class="d-block h-50 w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default About
