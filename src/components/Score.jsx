import React from "react";
import { useState, useEffect } from 'react'

const Score = ({ score, computerScore, resultMessage }) => {
  const [borderColor, setBorderColor] = useState("border-white");

  useEffect(() => {
    if (resultMessage === "You won") {
      setBorderColor("border-green-500");
    } else if (resultMessage === "You lost") {
      setBorderColor("border-red-500");
    } else {
      setBorderColor("border-white");
    }
  }, [resultMessage]);

  return (
    <div className={`w-64 mx-auto my-8 ${borderColor} border-2 rounded-xl bg-sky-900/20 backdrop-blur-sm shadow-lg`}>
      <h2 className="text-slate-200 text-center text-lg font-medium pt-3 border-b border-slate-700/50 pb-2">
        SCORE
      </h2>
      <div className="flex justify-center items-center gap-8 p-4">
        <div className="text-center">
          <p className="text-sm text-slate-400 mb-1">YOU</p>
          <p className="text-4xl font-bold text-slate-200">{score}</p>
        </div>
        <div className="text-slate-400 text-3xl font-light">vs</div>
        <div className="text-center">
          <p className="text-sm text-slate-400 mb-1">COMPUTER</p>
          <p className="text-4xl font-bold text-slate-200">{computerScore}</p>
        </div>
      </div>
    </div>
  )
}

export default Score