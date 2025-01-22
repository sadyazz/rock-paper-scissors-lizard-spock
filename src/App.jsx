import { useState, useEffect } from 'react'
import Header from './components/Header'
import Game from './components/Game'
import Rules from './components/Rules'
import Score from './components/Score'

function App() {

  const [score, setScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [resultMessage, setResultMessage] = useState("");

  return (
    <div className='bg-sky-950 min-h-screen w-full relative flex flex-col'>
      <div className="px-2 flex-1">
        <Header text='rock paper scissors lizard spock' />
        <div className="mt-16 md:mt-32">
          <Score score={score} computerScore={computerScore} resultMessage={resultMessage} />
          <Game
            score={score} setScore={setScore} computerScore={computerScore} setComputerScore={setComputerScore} setResultMessage={setResultMessage}
          />
        </div>
      </div>
      <div className="flex justify-end p-4 md:absolute md:bottom-8 md:right-8">
        <Rules />
      </div>
    </div>
  )
}

export default App
