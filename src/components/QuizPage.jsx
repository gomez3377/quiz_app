import React from 'react'
import Quizzes from './Quizzes'

const QuizPage = ({quizzes, selectButton, checkAnswers}) => {
  
 const quizElements = quizzes.map(quiz => <Quizzes
 key={quiz.id}
 id={quiz.id}
 answersRevealed={quiz.answersRevealed}
  question={quiz.question}
  answers={quiz.answers}
  selectButton={selectButton}
   />)
    
  return (
    <div className='quiz-page'>
        
        {quizElements}
        <button 
        onClick={checkAnswers}
        className='get-answers-button'>Check Answers</button>
    </div>
  )
}

export default QuizPage