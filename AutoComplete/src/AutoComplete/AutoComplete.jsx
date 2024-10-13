import React, {useState, useEffect, useRef} from 'react'
import useDebounce from '../Hooks/useDebounce'
import './AutoComplete.css'

const AutoComplete = () => {
  const [inputValue, setInputValue] = useState('')
  const [productList, setProductList] = useState([])
  const abortController = useRef(null)
  
  const fetchData = async (val, signal) => {
      try {
          const res = await fetch(
              `https://dummyjson.com/products/search?q=${val}&limit=10`, {signal}
            )
            const data = await res.json()
            setProductList(data.products)
        } catch (error) {
           console.log({error})
        }
    }
    
  const debounceFn = useDebounce(fetchData, 1000)

  useEffect(() => {
    abortController.current = new AbortController();
    const signal = abortController.current.signal;

    debounceFn(inputValue, signal);

    return () => abortController.current.abort()
  }, [inputValue])

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Search Product"
      />
      <ul>
      {productList.map((product) => {
          const index = product.title.toLowerCase().indexOf(inputValue.toLowerCase());
          if (index === -1) {
            // No match found, return the full title without highlighting
            return <li key={product.id}>{product.title}</li>;
          }

          return (
            <li key={product.id}>
              <span>{product.title.substring(0, index)}</span>
              <span className="string-match">
                {product.title.substring(index, index + inputValue.length)}
              </span>
              <span>{product.title.substring(index + inputValue.length)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default AutoComplete
