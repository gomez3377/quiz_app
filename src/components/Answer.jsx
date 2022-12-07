import React from 'react'


const Answer = ({answer,questionId, selectAnswer, answersRevealed}) => {
  const selectedButtonStyle = {
    backgroundColor: "#D6D8F5",
    border: "none"
  }
  const correctButtonStyle = {
    backgroundColor: "#94D7A2",
    border: "none"
  }
  const incorrectButtonStyle = {
    backgroundColor: "#F8BCBC",
    border: "none"
  }
  const unselectedButtonStyle = {
    backgroundColor: "transparent"
  }

  return (
    <>
    {
      answersRevealed ?
      <button 
      className='answers'
      style={answer.isCorrect ? correctButtonStyle 
        : answer.isSelected ? incorrectButtonStyle
        : unselectedButtonStyle  }
      onClick={() => selectAnswer(questionId, answer.id)}
      >{answer.answer}</button> 
      :
       <button 
        className='answers'
        style={answer.isSelected ? selectedButtonStyle : unselectedButtonStyle }
        onClick={() => selectAnswer(questionId, answer.id)}
        >{answer.answer}</button>}
        </>
  )
}

export default Answer