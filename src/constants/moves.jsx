const moves = [
  {
    title: "Rock",
    icon: (
      <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer">
        {" "}
        <img src="src\assets\rock.svg"></img>
      </div>
    ),
  },
  {
    title: "Paper",
    icon: (
      <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer">
        {" "}
        <img src="src\assets\paper.svg"></img>
      </div>
    ),
  },
  {
    title: "Scissors",
    icon: (
      <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer">
        {" "}
        <img src="src\assets\scissors.svg"></img>
      </div>
    ),
  },
  {
    title: "Lizard",
    icon: (
      <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer">
        {" "}
        <img src="src\assets\lizard.svg"></img>
      </div>
    ),
  },
  {
    title: "Spock",
    icon: (
      <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer">
        {" "}
        <img src="src\assets\spock.svg"></img>
      </div>
    ),
  },
];

/**
 *            <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer"> <img  src="src\assets\rock.svg"></img></div>
           <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer"> <img  src="src\assets\paper.svg"></img></div>
           <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer"> <img  src="src\assets\scissors.svg"></img></div>
           <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer"> <img  src="src\assets\lizard.svg"></img></div>
           <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer"> <img  src="src\assets\spock.svg"></img></div>
 */

export { moves };
