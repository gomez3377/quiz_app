import React from 'react'
import Quizzes from './Quizzes'

const QuizPage = ({quizzes, selectButton, checkAnswers, resultsShown, newGame}) => {
  
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
        <div className='btn-and-results-container'>

        {resultsShown && <p>You scored 3/5 correct answers</p>}
        {
          resultsShown ?
          <button 
          onClick={newGame}
          className='get-answers-button'>Play Again</button>
          :
          <button 
          onClick={checkAnswers}
          className='get-answers-button'>Check Answers</button>}
          </div>
    </div>
  )
}

export default QuizPage