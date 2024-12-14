import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './MemoryCard.css'

const MemoryCard = ({ dimension = 4 }) => {
    const [list, setList] = useState([]);
    const clickCount = useRef([]);
    const timeOutId = useRef(null);

    const shuffleArray = (arr) => {
        for(let i = 0;i < arr.length;i++){
            const j = Math.floor(Math.random() * (arr.length - 1))
            if(i == arr.length - 1){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp;
            }
        }

        return arr;
    }

    const handleClick = (index) => {
        clickCount.current = [...clickCount.current, index];
        if(clickCount.current.length == 2){
            const prevVal = list[clickCount.current[0]].value;
            const currVal = list[clickCount.current[1]].value;
            const isMatched = prevVal == currVal;

            setList(prev => prev.map((item, id) => id == index ? { ...item, isHiden: false } : item))
            
            if(isMatched){
                const modifiedList = list.map((item, id) => clickCount.current.includes(id) ? { ...item, isHiden: false } : item)
                timeOutId.current = setTimeout(() => {
                    setList(modifiedList)
                }, 400)
            } else {
                const modifiedList = list.map((item, id) => clickCount.current.includes(id) ? { ...item, isHiden: true } : item)
                timeOutId.current = setTimeout(() => {
                    setList(modifiedList)
                }, 400)
            }

            clickCount.current = [];
        } else {
            setList(prev => prev.map((item, id) => id == index ? { ...item, isHiden: false } : item))
        }
    }

    useLayoutEffect(() => {
        const arr = new Array(dimension).fill(0).map((_, index) => ({ value: index + 1, isHiden: true }))
        const shuffledList = shuffleArray([...arr, ...arr])
        setList(shuffledList)
    },[])

    useEffect(() => {

        return () => clearTimeout(timeOutId.current)
    },[])

  return (
    <div style={{ display: 'grid', gap: '1rem' ,gridTemplateRows: `repeat(${dimension/2}, 100px)`, gridTemplateColumns: `repeat(${dimension/2}, 100px)` }} >
        {
            list.map((item, index) => (
                <div key={index} className='card' onClick={() => handleClick(index)} >{item.isHiden ? '' : item.value}</div>
            ))
        }
    </div>
  )
}

export default MemoryCard