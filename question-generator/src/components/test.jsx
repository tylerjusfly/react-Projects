import './test.css'
import React from 'react'

export const Test = () =>{
    // passing default value for react
    // destructuring state
    const [isGoingOut, setGoingOut] = React.useState(true)

    function flip(){
      setGoingOut(prevVal => {
        return prevVal ? false : true
      })
    }


    let answer = isGoingOut? 'Yes' : "No"

  return (
    <div className='state'>
        <h1 className="state--title"> is state Important</h1>
        <div className="state--ans" onClick={flip}>
            <h1>{answer}</h1>
        </div>
        </div>
  )
}