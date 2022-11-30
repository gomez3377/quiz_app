import React from 'react'


const Answer = ({answer,questionId, selectAnswer, answersRevealed}) => {
  const styles = {
    backgroundColor: ``
  
    }
  

  return (
    <button 
    className='answers'
    onClick={() => selectAnswer(questionId, answer.id)}
    >{answer.answer}</button>
  )
}

export default Answer