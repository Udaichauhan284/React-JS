import { useState } from 'react'
import './App.css'
import PlayNow from './components/PlayNow'
import GamePlay from './components/GamePlay';

function App() {
const [isGamePlay, isSetGamePlay] = useState(false);

const toggled = () => {
  isSetGamePlay((prev) => !prev);
}
  return (
    <>
    {isGamePlay ? <GamePlay /> : <PlayNow toggle={toggled}/>}
    </>
  )
}

export default App
