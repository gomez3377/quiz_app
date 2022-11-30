import React from 'react'

const StartPage = (startQuiz) => {
  return (
    <div className='start-page'>
        <h1>Quizzical</h1>
        <p>Test Your Knowledge!</p>
        <button onClick={() => startQuiz}>Start Quiz</button>

    </div>
  )
}

export default StartPage