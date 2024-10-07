import StarRating from './Common/StarRating/StarRating'
import './App.css'

function App() {

  return (
    <>
      <div className='title' >Star Rating</div>
      <StarRating count={5} click={(count) => alert({count})} />
    </>
  )
}

export default App
