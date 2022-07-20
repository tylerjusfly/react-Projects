import '../assets/css/questions.css'
import { banki } from '../banki'
import React from 'react';

export const Questions = () =>{
  const [question, setQuestion] = React.useState([])

    function generate(){
        const bankiQuestions = banki.questions
        const random = Math.floor(Math.random() * bankiQuestions.length);
        let randomQ = bankiQuestions[random]
        console.log(randomQ)
        //passing a function to state setter with parameter of previous state
       setQuestion([randomQ.question, randomQ.type])
      }
      
  return (    
    <main>
    <div className="questions">
        <input 
        type="text"  
        className='q--input'
        placeholder='Top-text'
        />
        <input 
        type="text" 
        className='q--input'
        placeholder='Bottom-text'
        />
        <button 
        onClick={generate} 
        className="q--button"
        > 
        Generate 
        </button>

    </div>

    <div className="question--card">
      <p className='Q--text'>{question}</p>
    </div>
    </main>
  )
}
