import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({bgClr = 'red', barhght = 20, progressvalue = 30}) => {

  return (
    <div className='progress-bar' >
        <div className='progress-bar-fill' style={{ background: bgClr, transform: `translateX(${progressvalue - 100}%)`, height: barhght }}  aria-label={`Progress is ${progressvalue}%`} />
        <div className='progress-value' >{progressvalue}</div>
    </div>
  )
}

export default ProgressBar