import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// function MyApp(){
//   return (
//     <h2>Hey from MyApp</h2>
//   )
// }
// //creating element
// const oneELement = (
//   <a href='https://google.com' target='_blank'>Visit Google</a>
// )

// //use React.createElement
// const reactElement = React.createElement(
//   'a',
//   {href: "https://google.com", target:"_blank"},
//   "Click Me"
// )

ReactDOM.createRoot(document.getElementById('root')).render(
 //MyApp() //you can also call function like this
 //<MyApp />,  //you can also call like this, this is best pratice
 //oneELement
 //reactElement
 <App/>
)
