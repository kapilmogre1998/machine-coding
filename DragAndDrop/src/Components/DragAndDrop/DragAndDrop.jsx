import React from 'react'
import './DragAndDrop.css';

const DragAndDrop = () => {

    const handleOnDrop = (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text/plain");
        const el = document.getElementById(data);
        event.target.appendChild(el);
    }

  return (
    <div>
        <div className='drop-zone' onDrop={handleOnDrop} onDragOver={(e) => e.preventDefault()} >
            <div id='drag-item1' draggable={true} onDragStart={(e) => e.dataTransfer.setData('text/plain', 'drag-item1')} >Drag and Drop me!</div>
        </div>
        <div className='drop-zone' onDrop={handleOnDrop} onDragOver={(e) => e.preventDefault()} ></div>
    </div>
  )
}

export default DragAndDrop