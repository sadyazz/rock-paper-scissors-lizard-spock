import React from "react";
import { useState, useEffect } from 'react'
import { moves } from "../constants/moves";
import Score from "./Score";


import { useMemo } from "react";
import { useRef } from "react";
//{ handleScoreChange }
const Game = ({score, setScore, computerScore, setComputerScore}) =>{

    const [selected, setSelected] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    // const [score, setScore] = useState(0);
    // const [computerScore, setComputerScore] = useState(0);

//     useEffect(() =>{
//         const comboMoves = selected + computerChoice
//         if( comboMoves === 'paperrock' || comboMoves === 'rocklizard' || comboMoves === 'lizardspock' || comboMoves === 'spockscissors' || comboMoves === 'scissorspaper' || comboMoves === 'rockscissors' || comboMoves === 'scissorslizard' || comboMoves === 'lizardpaper' || comboMoves === 'paperspock' || comboMoves === 'spockrock'){
//             console.log(comboMoves + "WON")
            
//         }else if(selected === computerChoice){
//             console.log(comboMoves +" TIED")    
//         }else
//         console.log(comboMoves + "LOST")
       
        
//    })

//    const handlePlayerChoice = (playerChoice) => {
//     const choices = ["rock", "paper", "scissors", "lizard", "spock"];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     const randomChoice = choices[randomIndex];
//     setComputerChoice(randomChoice);
//     setSelected(playerChoice);

//     console.log("User choice:", playerChoice);
//   console.log("Computer choice:", randomChoice);
//   };
const [resultMessage, setResultMessage] = useState("");

  
  useEffect(() => {
    const comboMoves = selected + computerChoice
   
    if (!!selected && !!computerChoice) {
      if (selected === computerChoice) {
        setResultMessage("Tied");
      } else if( comboMoves === 'paperrock' || comboMoves === 'rocklizard' || comboMoves === 'lizardspock' || comboMoves === 'spockscissors' || comboMoves === 'scissorspaper' || comboMoves === 'rockscissors' || comboMoves === 'scissorslizard' || comboMoves === 'lizardpaper' || comboMoves === 'paperspock' || comboMoves === 'spockrock'){
        setScore(score+1);
        console.log(score);
        setResultMessage("You won");
      }else {
        setComputerScore(computerScore+1);
        console.log(computerScore);
        setResultMessage("You lost");
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
        <div className=" text-gray m-0 text-4xl w-screen flex justify-center flex-wrap py-7">
          
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
