import { useGameStore } from "../store/gameStore";
import { Square } from "./Square";

const Board = () => {
  const squares = useGameStore((state) => state.squares);
  const setSquares = useGameStore((state) => state.setSquares);

  function handleClick(i) {
    if (squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <div
      className="mt-6 rounded-md grid grid-cols-3 grid-rows-3
    w-[calc(3*2.5rem)] h-[calc(3*2.5rem)] 
    border border-gray-400"
    >
      {/* <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" /> */}
      {squares.map((square, squareIndex) => (
        <Square
          key={squareIndex}
          value={square}
          onSquareClick={() => handleClick(squareIndex)}
          //   To connect onSquareClick to handleClick you'll pass
          // an inline function to the onSquareClick prop of the first
          // Square component:
        />
      ))}
    </div>
  );
};

export { Board };
