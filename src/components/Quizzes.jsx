import React from 'react'
import Answer from './Answer'

const Quizzes = ({id, question, answers, selectButton, answersRevealed}) => {

function buttonStyles(isSelected, isCorrect){
  const style = {backgroundColor:"transparent", border:"0.771045px solid #4D5B9E"}
  if(answersRevealed){
    if(isCorrect){
      style.backgroundColor = "#94d7a2"
    }
    else if(!isCorrect && isSelected) {
      style.backgroundColor = "#f8bcbc"
    }

  }
  else{
    if(isSelected){
      style.backgroundColor = "#d6d8f5"
    }
  }
}
  
const unselectedButtonStyle = {
  backgroundColor: "transparent"
}

const selectedButtonStyle = {
  backgroundColor: "#D6D8F5",
  border: "none"
}

const correctAnswerStyle ={
  backgroundColor:"#94d7a2",
  border: "none"
}
const incorrectAnswerStyle ={
  backgroundColor:"#f8bcbc",
  border: "none"
}



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