import { useEffect, useRef, useState } from 'react'
import './App.css'
import ProgressBar from './ProgressBar'

function App() {
  const [progressValue, setProgressValue] = useState(0);
  const interValId = useRef(null); 

  useEffect(() => {
    interValId.current = setInterval(() => {
      setProgressValue(prev => prev + 10)
    }, 1000)

    return () => clearInterval(interValId?.current)
  },[])

  useEffect(() => {
    if(progressValue == 100){
      clearInterval(interValId?.current)
    }
  }, [progressValue])

  return (
    // <div className='progressbar' >
    //   <ProgressBar progressvalue={progressValue} />
    // </div>
    <div className='container' >
      <header>Header</header>
      <section>
        <aside>left sidebar</aside>
        <main>content</main>
        <aside>right sidebar</aside>
      </section>
      <footer>Footer</footer>
    </div>
  )
}

export default App
