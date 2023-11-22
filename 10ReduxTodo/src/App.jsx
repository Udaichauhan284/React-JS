import { Provider } from 'react-redux'
import { store } from './app/store'
import { AddTodos, Todos } from './components'

function App() {
  

  return (
    <>
      <Provider store = {store}>
        <AddTodos />
        <Todos />
      </Provider>
    </>
  )
}

export default App
