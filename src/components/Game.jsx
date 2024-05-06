import React from "react";

const Game = () =>{
    return(
        <div className="border-slate-400 border-2 text-gray m-0 text-4xl w-screen flex justify-center flex-wrap py-7">
           <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer"> <img  src="src\assets\rock.svg"></img></div>
           <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer"> <img  src="src\assets\paper.svg"></img></div>
           <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer"> <img  src="src\assets\scissors.svg"></img></div>
           <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer"> <img  src="src\assets\lizard.svg"></img></div>
           <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer"> <img  src="src\assets\spock.svg"></img></div>
        </div>
    )
}

export default Game