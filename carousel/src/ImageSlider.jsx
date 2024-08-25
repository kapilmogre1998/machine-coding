import React, { useState } from 'react'
import './ImageSlider.css';

const ImageSlider = (props) => {
    const { images } = props;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [startPosX, setStartPosX] = useState(0);

    const handlePrev = () => {
        setCurrentImageIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
    }

    const handleNext = () => {
        setCurrentImageIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
    }

    const handleMouseDown = (e) => {
        setStartPosX(+e.clientX)
    }

    const resetPosition = () => {
        setStartPosX(0);
    }

    const handleMouseMove = (e) => {
        if (startPosX === 0) return;
        if (e.clientX > 0) {
            const diffX = +startPosX - +e.clientX;

            if (diffX <= 0 && currentImageIndex === 0 || diffX >= 0 && currentImageIndex === images.length - 1) return;
            if (diffX < 0) {
                handlePrev();
            } else {
                handleNext();
            }
            resetPosition();
        }
    }

    const handleMoveUp = () => {
        resetPosition();
    }

    return (
        <div className='image-slider-container' >
            <div className='images' style={{ transform: `translateX(-${(currentImageIndex) * 100}%)` }} onMouseUp={handleMoveUp} onTouchStart={handleMouseDown} onTouchEnd={handleMouseMove} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} >
                {
                    images.map((url, index) => (
                        <img key={index} className='image' src={url} alt="car" />
                    ))
                }
            </div>
            <button className={`slider-btn prev-btn ${currentImageIndex === 0 ? 'disable-btn' : ''}`} onClick={() => {
                if (currentImageIndex === 0) return;
                handlePrev();
            }} ></button>
            <button className={`slider-btn next-btn ${currentImageIndex === images.length - 1 ? 'disable-btn' : ''}`} onClick={() => {
                if (currentImageIndex === images.length - 1) return;
                handleNext();
            }} ></button>
            <ul className='dot-container' >
                {
                    Array(images.length).fill(0).map((el, index) => <li onClick={() => setCurrentImageIndex(index)} className={currentImageIndex === index ? 'active' : ''} key={index} ></li>)
                }
            </ul>
        </div>
    )
}

export default ImageSlider