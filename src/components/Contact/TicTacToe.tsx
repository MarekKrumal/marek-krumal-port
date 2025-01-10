import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const TicTacToe = () => {
  const t = useTranslations("TicTacToe");
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
    if (!isPlayerTurn && !winner) {
      const availableMoves = board
        .map((cell, index) => (cell === "" ? index : null))
        .filter((index) => index !== null) as number[];

      if (availableMoves.length > 0) {
        const randomMove =
          availableMoves[Math.floor(Math.random() * availableMoves.length)];
        makeMove(randomMove, "O");
      }
    }
  }, [isPlayerTurn, winner]);

  const handleClick = (index: number) => {
    if (board[index] || winner || !isPlayerTurn) return;
    makeMove(index, "X");
  };

  const makeMove = (index: number, player: string) => {
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);
    calculateWinner(newBoard);
    setIsPlayerTurn(player !== "X");
  };

  const calculateWinner = (board: string[]) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
    if (!board.includes("")) setWinner("Draw");
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setIsPlayerTurn(true);
    setWinner(null);
  };

  return (
    <div className="relative w-48 h-48 mx-auto font-mono">
      {/* Vertical Lines */}
      <div className="absolute top-0 left-1/3 w-[2px] h-full border"></div>
      <div className="absolute top-0 left-2/3 w-[2px] h-full border"></div>

      {/* Horizontal Lines */}
      <div className="absolute left-0 top-1/3 h-[2px] w-full border"></div>
      <div className="absolute left-0 top-2/3 h-[2px] w-full border"></div>

      {/* Game Grid */}
      <div className="grid grid-cols-3 grid-rows-3 gap-0 w-full h-full">
        {board.map((cell, i) => (
          <button
            key={i}
            className={`w-full h-full flex items-center justify-center text-2xl font-bold cursor-pointer transition-colors duration-200 ${
              cell === "X"
                ? "text-orange-600 dark:text-orange-400"
                : cell === "O"
                ? "text-blue-600 dark:text-blue-300"
                : "text-gray-500"
            }`}
            onClick={() => handleClick(i)}
          >
            {cell}
          </button>
        ))}
      </div>

      {/* Winner Announcement */}
      {winner && (
        <div className="text-center mt-2">
          <p
            className={`text-lg font-semibold ${
              winner === "X"
                ? "text-orange-600 dark:text-orange-400"
                : winner === "O"
                ? "text-blue-600 dark:text-blue-300"
                : "text-gray-500"
            }`}
          >
            {winner === "Draw" ? t("draw") : `${t("winner")}: ${winner}`}
          </p>
          <button
            className="mt-2 px-5 py-2 border shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-transparent bg-transparent hover:bg-gray-100 dark:hover:bg-black/10"
            onClick={resetGame}
          >
            {t("playagain")}
          </button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
