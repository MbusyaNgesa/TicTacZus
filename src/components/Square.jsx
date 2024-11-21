const Square = ({ value, onSquareClick }) => {
  return (
    <>
      <button
        className="inline-flex items-center 
      justify-center p-0 bg-white border border-gray-400
       outline-none rounded-none text-base font-bold"
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  );
};

export { Square };
