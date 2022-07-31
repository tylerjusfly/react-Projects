import '../assets/css/questions.css'
import { banki } from '../banki'
import React from 'react';
import { Star} from './star'

export const Questions = () =>{
  const [question, setQuestion] = React.useState({
    question: "Welcome to the Web Development Question Generator, You can pass in a Question Type or Just Generate at random. Your choice Dev !",
    type: "Message",
    isFavorite: true,
    textQuery : ''
  })

  function switchFavorite(){
    setQuestion(prevState => {
      return{
        ...prevState,
        isFavorite : !prevState.isFavorite
      }
    })
  }

  function handleQuery(event){
    let {name, value} = event.target
    setQuestion(prevText => ({
      ...prevText,
      [name] : value
    }))
  }

    function generate(){
        const bankiQuestions = banki.questions
        const random = Math.floor(Math.random() * bankiQuestions.length);
        let randomQ = bankiQuestions[random]

        //passing a function to state setter with parameter of previous state
       setQuestion(prevState=> ({
        ...prevState,
        question : randomQ.question,
        type : randomQ.type,
        isFavorite : randomQ.isFavorite,
       }))
      }

      
  return (    
    <main>
    <div className="questions">

        <input 
        type="text" 
        name='textQuery'
        className='q--input'
        value={question.textQuery}
        placeholder='Question Type'
        onChange={handleQuery}
        />
        <button 
        onClick={generate} 
        className="q--button"
        > 
        Generate 
        </button>

    </div>
      <h1>showing questions for {question.textQuery}</h1>
    <div className="question--card">
      <Star isFilled = {question.isFavorite} onClick = {switchFavorite} />
      <p className='Q--text'>{question.question}</p>
      <p className="Q--type">{question.type}</p>
    </div>
    </main>
  )
}
