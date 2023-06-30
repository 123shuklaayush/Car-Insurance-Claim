import React from 'react'
import ImageSlider from "./ImageSlider"
import Plans from './Plans'
import ApplyImage from './AdsSection'
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
      </main>
    </div>
  )
}

export default LandingPage
