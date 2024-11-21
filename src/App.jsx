import { Board } from "./components";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen  bg-gray-800">
      <Board />
      <div className="mt-3">{status}</div>
    </div>
  );
};
export default App;
