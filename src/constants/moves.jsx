const moves = [
    {
      title: "rock",
      icon: (
        <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer">
          {" "}
            <img src="./assets/rock.svg"></img>
        </div>
      ),
    },
    {
      title: "paper",
      icon: (
        <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer">
          {" "}
          <img src="./assets/paper.svg"></img>
        </div>
      ),
    },
    {
      title: "scissors",
      icon: (
        <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer">
          {" "}
          <img src="./assets/scissors.svg"></img>
        </div>
      ),
    },
    {
      title: "lizard",
      icon: (
        <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer">
          {" "}
          <img src="./assets/lizard.svg"></img>
        </div>
      ),
    },
    {
      title: "spock",
      icon: (
        <div className="bg-white hover:bg-slate-300 rounded-full h-28 w-28 flex items-center justify-center p-4 m-5 hover:cursor-pointer">
          {" "}
          <img src="./assets/spock.svg"></img>
        </div>
      ),
    },
  ];

  export { moves };