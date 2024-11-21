import { Square } from "./Square";

const Board = () => {
  return (
    <div
      className="grid grid-cols-3 grid-rows-3
    w-[calc(3*2.5rem)] h-[calc(3*2.5rem)] 
    border border-gray-400"
    >
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
    </div>
  );
};

export { Board };
