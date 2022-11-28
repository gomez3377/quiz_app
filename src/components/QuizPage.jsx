import React from 'react'
import Quizzes from './Quizzes'

const QuizPage = ({quizzes}) => {
  
 const quizElements = quizzes.map(quiz => <Quizzes
 key={quiz.id}
  question={quiz.question}
  correctAnswer={quiz.correctAnswer}
  incorrectAnswers={quiz.incorrectAnswers} />)
    
  return (
    <div className='quiz-page'>
        
        {quizElements}
        <button>Get Answers</button>
    </div>
  )
}

export default QuizPage