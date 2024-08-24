import React, { useState } from 'react'
import './ImageSlider.css';

const ImageSlider = (props) => {
    const { images } = props;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrev = () => {
        setCurrentImageIndex(prev => prev === 0 ? images.length - 1 : prev -1);
    }

    const handleNext = () => {
        setCurrentImageIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
    }

  return (
    <div className='image-slider-container' >
        <div className='images' style={{ transform: `translateX(-${currentImageIndex * 100}%)` }} >
            {
                images.map((url, index) => (
                    <img key={index} className='image' src={url} alt="car" />
                ))
            }
        </div>
        <button className="slider-btn prev-btn" onClick={handlePrev} ></button>
        <button className="slider-btn next-btn" onClick={handleNext} ></button>
        <ul className='dot-container' >
            {
                Array(images.length).fill(0).map((el, index) => <li onClick={() => setCurrentImageIndex(index)} className={currentImageIndex === index ? 'active' : ''} key={index} ></li>)
            }
        </ul>
    </div>
  )
}

export default ImageSlider