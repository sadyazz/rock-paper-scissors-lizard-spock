import React, { useState } from "react";
//import { useState, useEffect } from 'react'

const Rules = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button 
        onClick={() => setIsOpen(true)} 
        className="text-white border border-white rounded-md w-[8rem] h-10 tracking-[0.1563rem]"
      >
        rules
      </button>

      {isOpen && (
        <div className="fixed inset-0 grid place-items-center z-50">
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50"
          />
          
          <div className="relative z-10 bg-white p-8 md:mx-0 mx-5 rounded-lg max-w-[500px] flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl text-[#3B4262] font-bold">RULES</h2>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-gray-400 hover:text-gray-600"
                aria-label="close rules"
              >
                ✕
              </button>
            </div>

            <img 
              src="src/assets/rules.svg" 
              alt="Game rules diagram"
              className="w-full max-w-[300px] mx-auto"
            />

            <p className="text-[#3B4262] text-center leading-relaxed">
              In the wise words of Sheldon Cooper the rules are simple: Scissors cuts paper, 
              paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, 
              scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, 
              and as it always has, rock crushes scissors.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Rules