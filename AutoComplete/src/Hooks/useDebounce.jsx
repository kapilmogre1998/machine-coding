import { useRef } from "react"

const useDebounce = (cb, delay) => {
  let timerOutId = useRef(null)

  return function (...args) {
    if (timerOutId.current) {
      clearTimeout(timerOutId.current)
    }

    timerOutId.current = setTimeout(() => {
      console.log('call', ...args);
      
      cb(...args)
    }, delay)
  }
}

export default useDebounce