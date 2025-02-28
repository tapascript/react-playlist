import { useState, useEffect } from "react";

const StateChangeEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>++</button>
    </div>
  )
}

export default StateChangeEffect