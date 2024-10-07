import React, { useState } from 'react';
import './StarRating.css';

const StarRating = ({ count = 5, click }) => {
    const [hoverRating, setHoverRating] = useState(0);
    const [clickedStarCount, setClickedStarCount] = useState(0);

    const handleMouseEnter = (id) => {
        setHoverRating(id + 1);
    }

    const handleClickOnStar = (id) => {
        setClickedStarCount(id + 1);
    }

    return (
        <div className='star-rating-container' >
            <div className='star-rating-content' >
                {
                    new Array(count).fill(0).map((item, id) => {
                        const isHover = id + 1 <= hoverRating;

                        return (
                            <div
                                key={id}
                                className={`star ${isHover ? 'gold' : ''} ${id + 1 <= clickedStarCount ? 'gold' : ''}`}
                                onMouseEnter={() => handleMouseEnter(id)}
                                onMouseLeave={() => setHoverRating(0)}
                                onClick={() => handleClickOnStar(id)}
                            >
                                &#9733;
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default StarRating