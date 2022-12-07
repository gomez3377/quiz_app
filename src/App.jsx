import { useEffect, useState } from "react";
import QuizPage from "./components/QuizPage";
import StartPage from "./components/StartPage";
import { nanoid } from "nanoid";

function App() {
  const [quizzes, setQuizzes] = useState([]);
  const [game, setGame] = useState(false)
  const [resultsShown, setResultsShown] = useState(false)
  const [correctAnswersSelected, setCorrectAnswersSelected] = useState([])
  const url =
    "https://opentdb.com/api.php?amount=4&difficulty=easy&type=multiple";
  useEffect(() => {

        generateQuiz()
      
  }, [game]);

function generateQuiz() {
  fetch(url)
  .then((res) => res.json())
  .then((data) =>
  setQuizzes(
    data.results.map(quiz =>  {
      const newQuizObject = {
        id: nanoid(),
        question: quiz.question,
        answers: createAnswersArray(quiz.correct_answer, quiz.incorrect_answers),
        answersRevealed: false
      };
      return newQuizObject;
    }
    )
    )
    
    );
}

function newGame(){
  setResultsShown(false)
  generateQuiz()
  
}



  function createAnswersArray(correctAnswer, incorrectAnswers) {
    const correctAnswerObject = {
      id: nanoid(),
      answer: correctAnswer,
      isSelected: false,
      isCorrect: true
    }
    const incorrectAnswerObject = incorrectAnswers.map(
      (incorrectAnswer) => {
        const incorrectAnswerObject = {
          id: nanoid(),
          answer: incorrectAnswer,
          isSelected: false,
          isCorrect: false
        };

        
        return incorrectAnswerObject;
      }
      )
      
      const answersArray = incorrectAnswerObject.concat(correctAnswerObject)
      
      
    return shuffleArray(answersArray)
  }

function shuffleArray(array){
  for(let i; i < 4; i++){
    const j = Math.floor(Math.random() * (i + 1))
   array[i], array[j] = array[j], array[i]
  }
  return array
}



  function checkAnswers() {
    
    // Allows the the answers the be revealed
    
    setQuizzes(oldQuizzes => oldQuizzes.map(quiz => 
      ({...quiz, answersRevealed: !quiz.answersRevealed})
      ))

      // Shows what answers you got right and a chance to play again
      setResultsShown(!resultsShown)



  }

  function selectButton(quizCurrentId, answerCurrentId) {
    
    setQuizzes(oldQuizzes => oldQuizzes.map((quiz) => {

     return quiz.id === quizCurrentId ?
      {
        ...quiz,
        answers: quiz.answers.map(answer => {
          
         return answer.id === answerCurrentId 
         ?  {...answer, isSelected: !answer.isSelected}
          
      
          
          
          : {...answer, isSelected: false}
            
        })
      }
         :quiz 
        }))
         
      
      }
    
    function startQuiz(){
    
      setGame(!game)
    }
    
    
  

  return (
    <div className="App">
      <div className="blob1"></div>
      {
        game
        ? <QuizPage 
        selectButton={selectButton} 
        quizzes={quizzes}
        checkAnswers={checkAnswers}
        resultsShown={resultsShown}
        newGame={newGame} />
        :
        <StartPage startQuiz={startQuiz}/>
      }
      <div className="blob2"></div>
    </div>
  );
}

export default App;
