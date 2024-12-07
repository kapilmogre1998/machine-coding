import React, { useState } from 'react';
import './StarRating.css';

const StarRating = ({ count = 5, click }) => {
    const [hoverRating, setHoverRating] = useState(0);
    const [clickedStarCount, setClickedStarCount] = useState(0);

    const handleMouseEnter = (id) => {
        setHoverRating(id);
    }

    const handleClickOnStar = (id) => {
        setClickedStarCount(id);
    }

    return (
        <div className='star-rating-container' >
            <div className='star-rating-content' >
                {
                    new Array(count).fill(0).map((_, id) => {
                        const isHover = id <= hoverRating;

                        return (
                            <div
                                key={id}
                                className={`star ${isHover ? 'gold' : ''} ${id <= clickedStarCount ? 'gold' : ''}`}
                                onMouseOver={() => handleMouseEnter(id)}
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