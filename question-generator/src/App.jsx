import Navbar from "./components/Navbar"
import { Questions } from "./components/Questions"
import { Test } from "./components/test"
import React from "react"


// export const App = () => {

// const [thingsArray, setThingsArray] = React.useState(["things1", "things2"])

// function addTo(){
//   setThingsArray(prevState => {
//     // spread prevState and add to array
//     return [...prevState, `thing ${prevState.length + 1}`]
//   })
// }

//   let mapped = thingsArray.map(thing => <h2 key={thing}>{thing}</h2>);
 
//   return (
//     <>
//      <button onClick={addTo}>ADD ITEM</button>
//       {mapped}
//     </>

//   )
// }

export const App = () => {
  return (
    <>
    <Navbar/>
    <Questions/>
    </>
  )
}

