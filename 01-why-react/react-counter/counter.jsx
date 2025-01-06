import React from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="counter">
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Counters</h1>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
