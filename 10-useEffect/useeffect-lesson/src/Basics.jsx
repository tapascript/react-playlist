import {useState, useEffect} from "react";

const Basics = () => {
    const [data, setData] = useState(null);

   useEffect(() => {
    // Side Effect Logic
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((json) => setData(json));
   }, []);

  return (
    <div>
        <h2>Fetched Data</h2>
        {data ? <p>{data?.title}</p> : <p>Loading...</p>}
    </div>
  )
}

export default Basics