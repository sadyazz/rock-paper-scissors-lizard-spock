import React from "react";
import { useState, useEffect } from 'react'
import { moves } from "../constants/moves";

const Game = ({ score, setScore, computerScore, setComputerScore, setCurrentResult }) => {

  const [selected, setSelected] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  const [resultMessage, setResultMessage] = useState("");

  useEffect(() => {
    const comboMoves = selected + computerChoice

    if (!!selected && !!computerChoice) {
      if (selected === computerChoice) {
        setResultMessage("Tied");
        setCurrentResult("Tied");
      } else if (comboMoves === 'paperrock' || comboMoves === 'rocklizard' || comboMoves === 'lizardspock' || comboMoves === 'spockscissors' || comboMoves === 'scissorspaper' || comboMoves === 'rockscissors' || comboMoves === 'scissorslizard' || comboMoves === 'lizardpaper' || comboMoves === 'paperspock' || comboMoves === 'spockrock') {
        setScore(score + 1);
        setResultMessage("You won");
        setCurrentResult("You won");
      } else {
        setComputerScore(computerScore + 1);
        setResultMessage("You lost");
        setCurrentResult("You lost");
      }
    }
  }, [selected, computerChoice]);

  const handlePlayerChoice = (playerChoice) => {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
    setComputerChoice(randomChoice);
    setSelected(playerChoice);
  };

  return (
    <div className=" text-gray m-0 text-4xl w-full flex justify-center flex-wrap py-7">

      <p className="w-screen flex justify-center text-white font-medium">{resultMessage}</p>

      {moves.map(({ title, icon }) => {
        return (
          <div
            key={title}
            onClick={() => {
              handlePlayerChoice(title);
            }}
            className="block mt-4"
          >
            {icon}
          </div>
        );
      })}
    </div>
  )
}

export default Game
