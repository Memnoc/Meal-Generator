import "./App.css";
import { Button } from "@nextui-org/react";
import { shuffleArray } from "./utils/shuffle";
import { foods } from "./api/foods";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";

function App() {
  const shuffledFoods = shuffleArray(foods);
  const foodList = shuffledFoods.map((food) => (
    <Checkbox key={food.id} value={food.name}>
      {food.name}
    </Checkbox>
  ));
  return (
    <>
      <div>
        <h1 className="text-cyan-600 text-3xl font-bold underline">
          Meal Generator
        </h1>
        <CheckboxGroup
          label="select foods"
          defaultValue={["fettucine alfredo"]}
        >
          {foodList}
        </CheckboxGroup>
        <Button color="primary">Generate</Button>
      </div>
    </>
  );
}

export default App;
