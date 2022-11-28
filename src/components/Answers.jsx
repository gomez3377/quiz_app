import React from 'react'
import { nanoid } from 'nanoid'

const Answers = ({correctAnswer, incorrectAnswers}) => {
  const correctAnswerArray = [correctAnswer]
  const buttonArray = incorrectAnswers.concat(correctAnswerArray)
const buttonElements =  buttonArray.map(answer => <button key={nanoid()}>{answer}</button>)
  return (
    <div className="answer-container">
      {buttonElements
}
        </div>
  )
}

export default Answers