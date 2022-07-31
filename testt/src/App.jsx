import Navbar from "./components/Navbar"
import React from "react"
import Body from "./components/Body"
import './assets/css/body.css'




export const App = () => {
  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode(){
    setDarkMode(prevState => ! prevState)
  }



  return (
    <div className="container">
      <Navbar
      darkMode = {darkMode}
      toggleDarkMode = {toggleDarkMode}
      />
      <Body 
      darkMode = {darkMode}
      />
    </div>
  )
}
