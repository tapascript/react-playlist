import { useState } from "react";

const Register = () => {
     const [query, setQuery] = useState("");

     const handleSubmit = (event) => {
        
        event.preventDefault();
        console.log(query)
        setQuery("")
     };
     return (
          <form onSubmit={handleSubmit}>
               <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter something..."
               />
               <button type="submit">Submit</button>
          </form>
     );
};

export default Register;
