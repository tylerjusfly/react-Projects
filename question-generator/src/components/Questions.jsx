import '../assets/css/questions.css'
import { banki } from '../banki'
import React from 'react';

export const Questions = () =>{
  const [question, setQuestion] = React.useState({
    question: "Welcome to the Web Development Question Generator, You can pass in a Question Type or Just Generate at random. Your choice Dev !",
    type: "Message",
  })

    function generate(){
        const bankiQuestions = banki.questions
        const random = Math.floor(Math.random() * bankiQuestions.length);
        let randomQ = bankiQuestions[random]
        
        //passing a function to state setter with parameter of previous state
       setQuestion(randomQ)
      }
      
  return (    
    <main>
    <div className="questions">

        <input 
        type="text" 
        className='q--input'
        placeholder='Question Type'
        />
        <button 
        onClick={generate} 
        className="q--button"
        > 
        Generate 
        </button>

    </div>

    <div className="question--card">
      <p className='Q--text'>{question.question}</p>
      <p className="Q--type">{question.type}</p>
    </div>
    </main>
  )
}
