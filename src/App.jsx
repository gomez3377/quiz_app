import { useEffect, useState } from 'react'
import QuizPage from './components/QuizPage'
import StartPage from './components/StartPage'
import { nanoid } from 'nanoid'



function App() {
const [quizzes, setQuizzes] = useState([])
const url = "https://opentdb.com/api.php?amount=4&difficulty=easy&type=multiple"
useEffect(() => {
  fetch(url)
  .then((res) => res.json())
  .then((data) => setQuizzes(data.results.map(quiz => {
    const newQuizObject = {
      id:nanoid(),
      question: quiz.question,
      incorrectAnswers: quiz.incorrect_answers,
      correctAnswer: quiz.correct_answer
    }
    return newQuizObject
  }))) 
},[])





return (
    <div className="App">
      <div className="blob1"></div>
      {/* <StartPage /> */}
      <QuizPage quizzes={quizzes}/>
      <div className="blob2"></div>
    </div>
  )
}

export default App
