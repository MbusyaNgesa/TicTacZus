import { useGameStore } from "../store/gameStore";
import { Square } from "./Square";

const Board = () => {
  const squares = useGameStore((state) => state.squares);
  const setSquares = useGameStore((state) => state.setSquares);

  const xIsNext = useGameStore((state) => state.xIsNext);
  const setXIsNext = useGameStore((state) => state.setxIsNext);

  const player = xIsNext ? "X" : "O";

  function handleClick(i) {
    if (squares[i]) return; // Prevent updating if there's already a value
    const nextSquares = squares.slice();
    // nextSquares[i] = "X"; // Mark the square with 'X'
    nextSquares[i] = player;
    setSquares(nextSquares); // Update the game state
    setXIsNext(!xIsNext); //State is updated if its not 'X'
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
