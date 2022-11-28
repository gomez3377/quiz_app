import React from 'react'
import Answers from './Answers'

const Quizzes = ({question, incorrectAnswers, correctAnswers}) => {
  return (
    <div className='quizzes'>
        <h2>{question}</h2>
        <Answers />
       
        </div>
  )
}

export default Quizzes