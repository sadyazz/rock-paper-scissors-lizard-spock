import React from "react";
import { useState, useEffect } from 'react'

const Score = ({score, computerScore}) =>{
 
  const [isDifferent, setIsDifferent] = useState(false);

useEffect(() => {
  if (score > computerScore) {
    setIsDifferent("border-green-400");
  } else if (score < computerScore) {
    setIsDifferent("border-red-400");
  } else {
    setIsDifferent("");
  }
}, [score, computerScore]);

const borderClass = isDifferent;
  
    return(
        <div className={`flex justify-evenly rounded-xl border-slate-400 border-2 text-gray my-5 text-4xl  py-5 w-1/4 h-min m-auto  ${borderClass}`}>
        <p className="text-slate-200">{score} : {computerScore}</p>
        </div>
    )
}

export default Score