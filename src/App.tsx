import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import { Section } from "./components/Section";
import List from "./components/List";

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <Heading title="Hello" />
      <Section>Hello World</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={["item 1", "item 2", "item 3"]}
        render={(item: string) => {
          return <span className="gold">{item}</span>;
        }}
      />
    </>
  );
}

export default App;
