import React from "react";

const Score = ({score, computerScore}) =>{
    return(
        <div className="flex justify-evenly rounded-xl border-slate-400 border-2 text-gray mt-5 text-4xl  py-5 w-1/4 h-min m-auto">
        <p className="text-slate-200">user {score}</p>
      <p className="text-slate-200">{computerScore} computer</p>
        </div>
    )
}

export default Score