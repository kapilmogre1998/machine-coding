import { useEffect, useState } from 'react'
import ProgressBar from './Common/ProgressBar/ProgressBar'
import './App.css'

function App() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage(prev => {
        if(prev == 100){
          clearInterval(intervalId)
          return 100
        } else {
          return prev + 1
        }
      });

      return () => clearInterval(intervalId);
    }, 200)
  },[])

  return (
    <div className='app' >
      <ProgressBar progressValue={percentage} />
    </div>
  )
}

export default App
