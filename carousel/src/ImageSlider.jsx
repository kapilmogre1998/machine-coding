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
        <button className="btn prev" onClick={handlePrev} >Prev</button>
        <button className="btn next" onClick={handleNext} >Next</button>
    </div>
  )
}

export default ImageSlider