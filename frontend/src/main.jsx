import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// this is the master file that renders App to View

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

/*=== Questions===

What does React.StrictMode does ? 

StrictMode is a React Developer Tool primarily used for highlighting possible problems in a web application. It activates additional deprecation checks and warnings for its child components.

*/