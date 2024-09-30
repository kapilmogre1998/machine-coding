import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progressValue = 0 }) => {

    return (
        <div className='progress-bar-container' >
            <div className='progress' style={{ width: `${progressValue}%` }} >
            </div>
            <div className='progress-value' style={{ color: progressValue >= 50 ? 'white' : 'black' }} >
                {progressValue}%
            </div>
        </div>
    )
}

export default ProgressBar;