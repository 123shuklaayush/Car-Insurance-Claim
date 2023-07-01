import React from 'react'
import ImageSlider from "./ImageSlider"
import Plans from './Plans'
import ApplyImage from './AdsSection'
import image from "../banner/car-insurance-v1-5.png"
import ContactUs from './ContactUs'
function LandingPage() {
  return (
    <div>
      <main>
        <section className="section-1">
        <ImageSlider/>
        </section>
        <section className="section-2">
            <Plans/>
        </section>
        <section className="section-3">
            <ApplyImage/>
        </section>
        <section className="section-4">
          <img src={image} width="100%" style={{cursor: 'pointer', marginTop: "20px"}} />
        </section>
        <section className="section-5">
          <ContactUs/>
        </section>
      </main>
    </div>
  )
}

export default LandingPage
