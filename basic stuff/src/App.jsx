import { useState } from 'react'
import './App.css'
import Product from './Product';

function App(){
  const [isBool, changeColor] = useState(false);
  return (
    <>
        {/* <div>Count {count}</div>
        <button onClick={() => setCount(count+1)}>Click</button> */}
        <Product name="Tourser Jeans" data={{color : "fade blue", size : 34}}/>
        <h2 style={{color : isBool===false ? "red" : "blue"}}>Color Change</h2>
        <button onClick={() => changeColor(!isBool)}>Change It</button>
    </>
  )
}
export default App;