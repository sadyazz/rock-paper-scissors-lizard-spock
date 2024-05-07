import { useEffect } from "react";
import { moves } from "../constants/moves";
import { useState } from "react";
import { useMemo } from "react";
import { useRef } from "react";

const Game = () => {
  const [selected, setSelected] = useState(null);
  const ref = useRef();
  //useMemo
  //useCallback
  //useEffect

  const selected2 = useMemo(() => {
    switch (selected) {
      case "Rock":
        return "Paper";
      case "Paper":
        return "Paper";
      case "Scissors":
        return "Paper";
      case "Lizard":
        return "Paper";
      case "Spock":
        return "Paper";
      default:
        console.log("No move selected");
    }
  }, [selected]);

  console.log("SELECTED 2", selected2);
  return (
    <div
      ref={ref}
      className="border-slate-400 border-2 text-gray m-0 text-4xl w-screen flex justify-center flex-wrap py-7"
    >
      {moves.map(({ title, icon }) => {
        return (
          <div
            key={title}
            onClick={() => {
              setSelected(title);
            }}
          >
            {title}
            {icon}
          </div>
        );
      })}
      {/* <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer"> <img  src="src\assets\rock.svg"></img></div>
           <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer"> <img  src="src\assets\paper.svg"></img></div>
           <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer"> <img  src="src\assets\scissors.svg"></img></div>
           <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer"> <img  src="src\assets\lizard.svg"></img></div>
           <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer"> <img  src="src\assets\spock.svg"></img></div> */}
    </div>
  );
};

export default Game;
