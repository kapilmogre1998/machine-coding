import { useState } from 'react'
import car1 from './assets/car1.webp';
import car2 from './assets/car2.jpeg';
import car3 from './assets/car3.webp';
import car4 from './assets/car4.jpeg';
import './App.css'
import ImageSlider from './ImageSlider';

const images = [car1, car2, car3, car4];

function App() {

  return (
    <div className='carousel-container' >
      <ImageSlider images={images} />
    </div>
  )
}

export default App
