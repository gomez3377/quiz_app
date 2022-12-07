import React from 'react'
import Answer from './Answer'

const Quizzes = ({id, question, answers, selectButton, answersRevealed}) => {


  








  const buttonElements =  answers.map(answer => <Answer 
      answersRevealed={answersRevealed}
      answer={answer}
      questionId ={id}
      selectAnswer={selectButton}
    key={answer.id}
    />
      )









  return (
    <div className='quizzes'>
        <h2 >{question}</h2>
        <div className="answer-container">
        {buttonElements}
        </div>
        <hr />
        </div>
  )
}

export default Quizzes