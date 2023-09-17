import { useState } from "react";
import GameBoard from "../GameBoard/GameBoard";

const Game = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [players, setPlayers] = useState(0);

  return (
    <div className="bg-black h-screen">
      {!isStarted ? (
        <div>
          <h3 className=" text-white text-3xl font-semibold font-mono fixed left-1/2 -translate-x-1/2 top-52">
            Choose the players
          </h3>
          <div className=" bg-white text-black text-xl font-bold w-fit inline-flex fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col font-mono p-8 gap-2 rounded-lg shadow-md">
            <button
              className=" bg-black text-white px-4 py-2 rounded-lg"
              onClick={() => {
                setPlayers(2);
                setIsStarted(true);
              }}
            >
              2 Players
            </button>
            <button
              className=" bg-black text-white px-4 py-2 rounded-lg"
              onClick={() => {
                setPlayers(3);
                setIsStarted(true);
              }}
            >
              3 Players
            </button>
            <button
              className=" bg-black text-white px-4 py-2 rounded-lg"
              onClick={() => {
                setPlayers(4);
                setIsStarted(true);
              }}
            >
              4 Players
            </button>
          </div>
        </div>
      ) : (
        <GameBoard />
      )}
    </div>
  );
};

export default Game;
