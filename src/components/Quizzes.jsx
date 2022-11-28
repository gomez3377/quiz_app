import React from 'react'
import Answers from './Answers'

const Quizzes = ({question, correctAnswer, incorrectAnswers}) => {


  return (
    <div className='quizzes'>
        <h2 >{question}</h2>
        <Answers 
        correctAnswer={correctAnswer}
        incorrectAnswers={incorrectAnswers} />
        <hr />
        </div>
  )
}

export default Quizzes