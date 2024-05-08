import React, { useState } from "react";
//import { useState, useEffect } from 'react'

const Rules = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="text-white border border-white rounded-md w-[8rem] h-10 tracking-[0.1563rem] mx-10 my-10">rules</button>



      <div
        className={`${isOpen ? "left-0" : "left-[-100vw]"}
        fixed top-0  h-screen w-full z-[50] grid place-items-center`}
      >
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className={"fixed inset-0 bg-black/50"}
          ></div>
        )}
        <div className="overflow-auto flex flex-row-reverse relative z-10 w-full h-full bg-white items-center justify-around lg:w-[25rem] lg:h-[28.8125rem] lg:rounded-lg lg:flex-row lg:flex-wrap lg:justify-between lg:px-8 lg:pt-8 lg:pb-12">
          <h2 className="mx-auto text-3xl text-[#3B4262] font-bold lg:order-0 ">
            RULES
          </h2>
          <div className="w-[19.4375rem] lg:w-full lg:order-2 lg:flex lg:justify-center">
            <img src="src\assets\rules.svg" />

          </div>
          <div className="lg:order-3">
            In the wise words of Sheldon Cooper the rules are simple: Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors.
          </div>
          <button onClick={() => setIsOpen(false)} aria-label="close rules" className="lg:order-2">

          </button>

        </div>
      </div>




    </div>
  )
}

export default Rules