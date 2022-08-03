import './assets/App.css'
import React from 'react'
import Die from './components/Die'
import {nanoid} from 'nanoid'

export default function App() {
  function allNewDice(){
    let randomnums = []

    for (let i = 0; i < 10; i++) {
      let x = Math.floor((Math.random() * 6) + 1);
      randomnums.push({value : x, isheld : false, id : nanoid(5)})
    }
    return randomnums
  }
  // creating state to hold array of nums
  const [DiceNums, setDiceNums] = React.useState(allNewDice())

  const diceElements = DiceNums.map(dice => {
    return (
      <Die 
      value={dice.value} 
      key = {dice.id}
      isHeld={dice.isheld}
      hold={()=> {hold(dice.id)}}
      />
    )
  })

  function reRollDice(){
    setDiceNums(allNewDice())
  }

  function hold(id){
      setDiceNums(oldDice => oldDice.map(die => {
        return die.id === id ? {...die, isheld : !die.isheld} : die
      }))
  } 

  return (
    <main>
      <div className="die-container">
       {diceElements}
      </div>
      <button className='roll-dice-button' onClick={reRollDice}>Roll Dice</button>
    </main>
  )
}
