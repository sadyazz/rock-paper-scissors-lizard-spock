import { useState, useEffect } from 'react'
import Header from './components/Header'
import Game from './components/Game'
import Rules from './components/Rules'
import Score from './components/Score'

function App() {

  const [score, setScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [currentResult, setCurrentResult] = useState("");

  return (
    <div className='bg-sky-950 px-2 w-screen h-screen relative'>
      <Header text='rock paper scissors lizard spock' />
      <div className="mt-16 md:mt-32">
        <Score score={score} computerScore={computerScore} currentResult={currentResult} />
        <Game
          score={score} setScore={setScore} computerScore={computerScore} setComputerScore={setComputerScore}
          setCurrentResult={setCurrentResult}
        />
      </div>
      <div className="absolute bottom-8 right-8">
        <Rules />
      </div>
    </div>
  )
}

export default App
