import { useState } from "react";
import { Card } from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-2xl font-semibold px-6 py-2 rounded-2xl bg-green-400 text-black text-center mb-2">Hello World</h1>
      <Card/>
      <Card/>
    </>
  );
}

export default App;
