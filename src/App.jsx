import { useEffect, useState } from 'react'
import QuizPage from './components/QuizPage'
import StartPage from './components/StartPage'

function App() {
const [quizes, setQuizes] = useState([])
const url = "https://opentdb.com/api.php?amount=4&difficulty=easy&type=multiple"
useEffect(() => {
  fetch(url)
  .then((res) => res.json())
  .then((data) => setQuizes(data.results)) 
},[])





return (
    <div className="App">
      <div className="blob1"></div>
      {/* <StartPage /> */}
      <QuizPage quizes={quizes}/>
      <div className="blob2"></div>
    </div>
  )
}

export default App
