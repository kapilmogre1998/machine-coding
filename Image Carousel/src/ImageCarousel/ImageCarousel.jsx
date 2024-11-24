import React, { useEffect, useState } from 'react'
import './ImageCarousel.css';

const IMG_LENGTH = 3;

const ImageCarousel = () => {
    const [currPos, setCurrPos] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrPos(currPos => currPos === IMG_LENGTH ? 1 : currPos + 1)
        }, 3000)

        return () => clearInterval(intervalId)
    }, [currPos])

    const handleClickOnLeft = () => {
        if (currPos === 1) {
            setCurrPos(IMG_LENGTH)
        } else {
            setCurrPos(prev => prev - 1)
        }
    }

    const handleClickOnRight = () => {
        const prevPos = currPos;
        if (prevPos === IMG_LENGTH) {
            setCurrPos(1)
        } else {
            setCurrPos(prev => prev + 1)
        }
    }

    return (
        <div className='image-carousel-container' >
            <div className='images-container' >
                <div className='images-list' style={{ transform: `translateX(-${(currPos - 1) * 100}%)` }} >
                    <img className='image' src="https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXJsfGVufDB8fDB8fHww" alt="" />
                    <img className='image' src="https://plus.unsplash.com/premium_photo-1690303193898-f9c721d0770b?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <img className='image' src="https://plus.unsplash.com/premium_photo-1681506669115-cb6b2d30dbc7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <button className='btn btn-left' onClick={handleClickOnLeft} >{'<'}</button>
                <button className='btn btn-right' onClick={handleClickOnRight} >{'>'}</button>
            </div>
        </div>
    )
}

export default ImageCarousel