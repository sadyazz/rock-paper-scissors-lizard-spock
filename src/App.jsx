import Game from "./components/Game";

function App() {
  // const [userChoice, setUserChoice] = useState("");
  // const [computerChoice, setcomputerChoice] = useState("");
  // const [score, setScore] = useState(0);
  // const [computerScore, setComputerScore] = useState(0);
  // const [turnResult, setTurnResult] = useState(null);
  // const [result, setResult] = useState('Let\'s see who wins');
  // const [gameOver, setGameOver] = useState(false);

  // const choice = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

  return (
    <div className="bg-sky-950 w-screen h-screen">
      {/* <Header className=" top-0 x-10"/>
    <Score score={score} computerScore={computerScore}  className=""/> */}
      <Game />
      {/* <Rules className=" flex justify-end lg:justify-end relative z-50"/> */}
    </div>
  );
}

export default App;
