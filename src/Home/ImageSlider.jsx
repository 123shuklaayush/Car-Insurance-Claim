import React from 'react'
import banner1 from '../banner/Group 1.png'
import banner2 from '../banner/Group 2.png'
import banner3 from '../banner/Group 3.png'
import banner4 from '../banner/Untitled.png'

function ImageSlider() {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={banner1} class="d-block w-100" alt="poster-1"/>
        </div>
        <div class="carousel-item">
          <img src={banner2} class="d-block w-100" alt="poster-2"/>
        </div>
        <div class="carousel-item">
          <img src={banner3} class="d-block w-100" alt="poster-3"/>
        </div>
        <div class="carousel-item">
          <img src={banner4} class="d-block w-100" alt="poster-4"/>
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
