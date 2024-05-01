import "./App.css";
import { Button } from "@nextui-org/react";

function App() {
  return (
    <>
      <div>
        <h1 className="text-cyan-600 text-3xl font-bold underline">
          Meal Generator
        </h1>
        <Button color="primary" isLoading>
          Generate
        </Button>
      </div>
    </>
  );
}

export default App;
