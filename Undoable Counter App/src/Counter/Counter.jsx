import React, { useEffect, useRef, useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [counterValue, setCounterValue] = useState(0);
    const [stack, setStack] = useState([0]);
    const elemPosition = useRef(0); 

    const handleUpdateValue = (event) => {
        const { value } = event.target;
        const result = counterValue + (+value);

        setCounterValue(result);
        setStack(prev => [...prev.slice(0, elemPosition.current + 1), result]);
    }

    const handleClickOnUndo = () => {
        let pos = 0;

        if(elemPosition.current !== 0){
            pos = elemPosition.current - 1;
            elemPosition.current -= 1;
        }
        setCounterValue(stack[pos]);
    }

    const handleClickOnRedo = () => {
        let pos = stack.length - 1;

        if(elemPosition.current !== stack.length -1){
            pos = elemPosition.current + 1;
            elemPosition.current += 1
        }

        setCounterValue(stack[pos]);
    }

    useEffect(() => {
        elemPosition.current = stack.length - 1;
    },[stack])


  return (
    <div>
        <div className='undo-redo-container' >
            <button className='btn' onClick={handleClickOnUndo} >Undo</button>
            <button className='btn' onClick={handleClickOnRedo} >Redo</button>
        </div>
        <div className='update-value-container' >
            <button className='btn' value='-100' onClick={handleUpdateValue} >-100</button>
            <button className='btn' value='-10' onClick={handleUpdateValue} >-10</button>
            <button className='btn' value='-1' onClick={handleUpdateValue} >-1</button>
            <div className='counter-value' >{counterValue}</div>
            <button className='btn' value='1' onClick={handleUpdateValue} >+1</button>
            <button className='btn' value='10' onClick={handleUpdateValue} >+10</button>
            <button className='btn' value='100' onClick={handleUpdateValue} >+100</button>
        </div>
    </div>
  )
}

export default Counter