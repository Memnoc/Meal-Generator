import "./App.css";
import { Button } from "@nextui-org/react";
import { shuffleArray } from "./utils/shuffle";

function App() {
  // TODO: test implementation for the meal shuffling
  const testArray = { data: [1, 2, 3, 4, 5] };
  const shuffledTestArray = shuffleArray(testArray);
  console.log(shuffledTestArray);

  return (
    <>
      <div>
        <h1 className="text-cyan-600 text-3xl font-bold underline">
          Meal Generator
        </h1>
        <Button color="primary">Generate</Button>
      </div>
    </>
  );
}

export default App;
