import { useState } from 'react'
import './App.css'

const username = "Udai Chauhan"
function App() {
  let [counter, setCounter] = useState(0)
  const addCount = () =>{
    setCounter(counter + 1);
  }
  const removeCount = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>Hello World {username} | Learning React JS</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={addCount}>Add Count</button>
      <button onClick={removeCount}>Remove Count</button>
    </>
  )
}

export default App
