import React, {useState, useEffect} from 'react'
import useDebounce from '../Hooks/useDebounce'
import './AutoComplete.css'

const AutoComplete = () => {
  const [inputValue, setInputValue] = useState('')
  const [productList, setProductList] = useState([])
  const [selectSearchItem, setSelectSearchItem] = useState(-1);
  
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

  const handleKeyDown = (e) => {
    if(e.key === 'ArrowUp' && selectSearchItem > 0){
      setSelectSearchItem(prev => prev - 1)
    } else if(e.key === 'ArrowDown' && selectSearchItem < productList.length - 1){
      setSelectSearchItem(prev => prev + 1)
    }
  }

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    debounceFn(inputValue, signal);

    return () => abortController.abort()
  }, [inputValue])

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Search Product"
        className='search-input'
        onKeyDown={handleKeyDown}
      />
      <ul className='search-result' >
      {productList.length ? productList.map((product, id) => {
          const index = product.title.toLowerCase().indexOf(inputValue.toLowerCase());
          if (index === -1) {
            // No match found, return the full title without highlighting
            return <li key={product.id} className={selectSearchItem === id ? 'match-search-input' : ''} >{product.title}</li>;
          }

          return (
            <li key={product.id} className={selectSearchItem === id ? 'match-search-input' : ''}  >
              <span>{product.title.substring(0, index)}</span>
              <span className="string-match">
                {product.title.substring(index, index + inputValue.length)}
              </span>
              <span>{product.title.substring(index + inputValue.length)}</span>
            </li>
          )
        }) : 'loading...'}
      </ul>
    </div>
  )
}

export default AutoComplete
