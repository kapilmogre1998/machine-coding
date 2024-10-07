import './App.css'
import StarRating from './Common/StarRating/StarRating'

function App() {

  return (
    <>
      <StarRating count={5} click={(count) => alert({count})} />
    </>
  )
}

export default App
