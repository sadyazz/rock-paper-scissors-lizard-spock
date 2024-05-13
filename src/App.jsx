import { useState, useEffect } from 'react'
import Header from './components/Header'
import Game from './components/Game'
import Rules from './components/Rules'
import Score from './components/Score'

function App() {

  const [score, setScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  return (
    <div className='bg-sky-950 w-screen h-screen'>
      <Header text='rock paper scissors lizard spock' />
      <Score score={score} computerScore={computerScore} />
      <Game
        score={score} setScore={setScore} computerScore={computerScore} setComputerScore={setComputerScore}
      />
      <Rules />
    </div>
  )
}

export default App
