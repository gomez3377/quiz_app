import React from 'react'
import Quizzes from './Quizzes'

const QuizPage = ({quizes}) => {
    console.log(quizes)

    // function generateQuizElements(){
    //     const quizArray = []
    //     for(let i = 0; i < 4; i++){
    //         quizArray.push(<Quizzes question={}/>quizes[i].question)
    //     }
    // }
    

  return (
    <div className='quiz-page'>
        <Quizzes question={quizes.question} />
        <button>Get Answers</button>
    </div>
  )
}

export default QuizPage